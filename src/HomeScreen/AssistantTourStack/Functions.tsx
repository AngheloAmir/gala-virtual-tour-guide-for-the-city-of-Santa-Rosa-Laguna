/*
    * FindPath(from :Location, to :Location) :Array<Location>
        Find a path between two points, then return an array of {lat, lng}
        to be used in polyline marker. Returns an array of location (path way - polyline).

    * RequestPermission() :boolean
        return true if Location permission is granted

    * getLocation() :Location
        return the user current location or 'out' if the user is out of coverage area

    * getMapDestinationMarkers( :GalaSelfGuidedTour, :number) :Array<MapMarker>
        return all markers (display in the map) based on the number of markers found.
        The value is ready to be use in <ExpoLeaftlet> component.

    * getPathWays(:number, :Location, :Location) :MapShape
        return a single polyline shape that draw between two location.
        The value is ready to be use in <ExpoLeaftlet> component.
    
*/
import * as Location from 'expo-location';
import { MapMarker, MapShape } from "expo-leaflet";
import { GalaSelfGuidedTour, FromToInterface } from '../../../database/!interfaces/GalaSelfGuidedTour';
import { GPSRANGE } from '../../../database/assistantour/tours';
import { NAVCOLORS } from './Options';

interface Location {
    lat     :number;
    lng     :number;
}

export async function FindPath(from :Location, to :Location) {
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
        const pathway :Array<Location> = nodes.map( (anode :number) => {
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

export async function RequestPermission() {
    try {
        let { status } = await Location.requestPermissionsAsync();
        if (status == 'granted') return true;
        return false;
    } catch(err) {
        return false;
    }
}

export async function getLocation() {
    try {
        const location = await Location.getCurrentPositionAsync({});
        if( location.coords.latitude  > GPSRANGE.y || location.coords.latitude < GPSRANGE.endy ||
            location.coords.longitude < GPSRANGE.x || location.coords.longitude > GPSRANGE.endx )
            return 'out';
        return {lat: location.coords.latitude, lng: location.coords.longitude};
    } catch(err) {
        throw err;
    }
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

export async function getPathWays(id :number, current :Location, destination :Location) {
    try {
        const paths :any = await FindPath(current, destination);
        const polyline :MapShape = {
        // @ts-ignore
        //color attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
            shapeType: 'polyline', id: id + '', color: NAVCOLORS[id], positions: [...paths], 
        }
        return polyline;
    } catch(err) {
        throw err;
    }
}
