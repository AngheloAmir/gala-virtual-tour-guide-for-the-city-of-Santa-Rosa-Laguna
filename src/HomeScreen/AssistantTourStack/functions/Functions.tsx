/*
    Define the functionality (effect) of the map when the user start viewing the GPS Map
*/
import * as Location from 'expo-location';
import { setDialogMessage, permissionLocationNotGranted, setMapWasLoaded,
         setUserPosition, setMapCenter, setZoomlevel, setMapLock } from '../localstateAPI/actions';
import { MapMarker, MapShape } from "expo-leaflet";

import { GalaSelfGuidedTour, FromToInterface } from '../../../../database/!interfaces/GalaSelfGuidedTour';
import { GPSRANGE, IntroPosition } from '../../../../database/assistantour/tours';
import { NAVCOLORS } from './Options';

export async function Init( localDispatch :any) {
    try {
        await RequestPermission();
        const userlocation = await getLocation();
        localDispatch( setUserPosition(userlocation) );
        localDispatch( setMapCenter(userlocation) );
        setTimeout( () => {
            localDispatch( setZoomlevel(17) );
            localDispatch( setMapWasLoaded() );
            localDispatch( setMapLock(false) );
        }, 1000);
    }
    catch(err) {
        if(err.message == 'PermissionException') 
            localDispatch( setDialogMessage('Location error', 'Location permision not granted or there is not data connection.') );
        else if(err.message == 'OutOfRangeException')
            localDispatch( setDialogMessage('Out of service range', 'Out of service range. Too far from the city') );
        else 
            localDispatch( setDialogMessage('Error', err) );
        localDispatch( permissionLocationNotGranted() ); 
        localDispatch( setUserPosition(IntroPosition) );
        localDispatch( setZoomlevel(17) );
        localDispatch( setMapWasLoaded() );
        localDispatch( setMapLock(false) );
    }
}

export async function updateUserLocation( localDispatch: any) {
    try {
        const userlocation = await getLocation();
        localDispatch( setUserPosition(userlocation) );
    } catch(err) {}
}

//The MapMarkers that will be draw in the ExpoLeaftlet component.
export function getMapDestinationMarkers(tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> {
    const destinations :Array<MapMarker> = tours.destinations.map((item :FromToInterface, i :number) => {
        return {
          id: i + startingIndex + '' ,
          position: { lat: item.to.lat, lng: item.to.lng },
          icon: '<div style="margin-top: -28px; margin-left: 32px">🏁</div>', size: [32, 32],
          name:     item.to.name,
          commute:  item.to.commute,
        };
    });
    if(tours.pointOfInterests) {
        const prevLastIndex = destinations.length + startingIndex;
        const poi :Array<MapMarker> = tours.pointOfInterests?.map((item, i) => {
            return {
              id: i + prevLastIndex + '' ,
              position: { lat: item.lat, lng: item.lng },
              icon: '<div style="margin-top: -28px; margin-left: 26px">🚩</div>', size: [24, 24],
              name: item.name,
            };
          });
        return [...destinations, ...poi];
    }
    return destinations;
}

export async function getPathWays(id :number, current :Geolocation, destination :Geolocation, isRed? :boolean) {
    try {
        const paths :any = await FindPath(current, destination);
        if(isRed) return {
        // @ts-ignore
        //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
            shapeType: 'polyline', id: id + '', color: 'red', positions: [...paths], 
        }
        return {
            // @ts-ignore
            //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
                shapeType: 'polyline', id: id + '', color: NAVCOLORS[id], positions: [...paths], 
        }
    } catch(err) {
        throw err;
    }
}

/*=========================================================================*/
/*=========================================================================*/
/*=========================================================================*/

interface Geolocation {
    lat :number; lng: number
}

async function FindPath(from :Geolocation, to :Geolocation) {
    try {
        const position1 = from;
        const position2 = to;

        //First, obtain the node (street nodes in OSM) that connects two places
        const osrm_response = await fetch(`http://router.project-osrm.org/route/v1/highway/${position1.lng},${position1.lat};${position2.lng},${position2.lat}?alternatives=false&annotations=nodes`);
        const result        = await osrm_response.json();
        const nodes         = result.routes[0].legs[0].annotation.nodes;
        const stringnode    = nodes.map((node :any) => { return "" + node });

        //Then, convert each nodes into actual latitude and logitude position thru overpass-api
        const overpass_res  = await fetch(`https://www.overpass-api.de/api/interpreter?data=[out:json];node(id:${stringnode});out;`);
        const opresult      = await overpass_res.json();

        //However, the result position is returned in alphabetical order not in the path way order. The code fix it
        const pathway :Array<Geolocation> = nodes.map( (anode :number) => {
            let temp :any;
            for(let i = 0; i < opresult.elements.length; i++) {
                if(opresult.elements[i].id === anode) {
                    temp = { lat: opresult.elements[i].lat, lng: opresult.elements[i].lon }
                    break;
                }
            }
            return temp;
        });
        return pathway;
    } catch(err) {
        throw new Error(err); 
    }
}

async function RequestPermission() {
    let { status } = await Location.requestPermissionsAsync();
    if (status == 'granted') return true;
    throw new Error('PermissionException');
}

async function getLocation() {
    const location = await Location.getCurrentPositionAsync({});
    if( location.coords.latitude  > GPSRANGE.y || location.coords.latitude < GPSRANGE.endy ||
        location.coords.longitude < GPSRANGE.x || location.coords.longitude > GPSRANGE.endx )
        throw new Error('OutOfRangeException');
    return {lat: location.coords.latitude, lng: location.coords.longitude};
}