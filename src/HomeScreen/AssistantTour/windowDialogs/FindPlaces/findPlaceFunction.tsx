/*
    Handle the effect (animation) and what will happen when the user is looking for a specific place
*/

import { MapShape } from "expo-leaflet";
import {
    setMapMarkers,
    setMapLock,
    setZoomlevel,
    setMapCenter,
    setMapPathIsLoading,
    setMapPolyLines,
    setIsLookingForAPlace,
    setDestinationStatus,
    setDialogMessage }      from '../../localstateAPI/actions';
import { getPathWays }      from '../../functions';
import { LocalStateAPI, StatusDestination }    from '../../localstateAPI/interface';

import { EstablishmentCategory }    from '../../../../../database/!interfaces/Establishment';
const tourjson                      = require ('../../../../../database/assistantour.json');
const mapjson                       = require('../../../../../database/map.json');
const establishments :Array<EstablishmentCategory> = tourjson.establishments;

export default async function findPlaceFunction({localDispatch, localState} :LocalStateAPI, index :number, estaIndex :number) {
    const userPosition = localState.mapmarkers[0].position;
    const establishmentPos = {
        lat: establishments[index].items[estaIndex].lat,
        lng: establishments[index].items[estaIndex].lng
    };
    //const mapmarkers = localState.mapmarkers.filter((marker :any, index :number) => index !== 0);
    //localDispatch( setMapMarkers([ ...mapmarkers, {
    localDispatch( setMapMarkers([{
            id: localState.mapmarkers.length + '' ,
            position: {
                lat: establishmentPos.lat + mapjson.mapestablishmentadjustlng,
                lng: establishmentPos.lng + mapjson.mapestablishmentadjustlat,
            },
            icon: mapjson.mapestablishmenticon,
            size: mapjson.mapestablishmenticonsize,
            //@ts-ignore
            name: establishments[index].items[estaIndex].name,
            commute: 'Establishment'
    }]) );

    localDispatch( setMapLock(true) );
    localDispatch( setZoomlevel(12) );
    localDispatch( setMapCenter(userPosition));
    localDispatch( setMapPathIsLoading(true) );

    ( async () => {
        let distance :string = '0 meter';
        let isError  :boolean = false;

        try {
            //let polylines :Array<MapShape> = [];
            const id   :number = localState.mapmarkers.length;
            const poly :MapShape | any = await getPathWays(id, userPosition, establishmentPos, true);
            //polylines.push(poly);
            //localDispatch( setMapPolyLines([...state.polylines, poly.navpath]) );
            localDispatch( setMapPolyLines([poly.navpath]) );

            //calculate distance
            if(poly.distance > 1000) {
                const d = (poly.distance / 1000).toFixed(2);
                distance = d + ' kilometer';
            }
            else {
                const d = poly.distance.toFixed(0);
                distance = d + ' meters';
            }

            let places :Array<StatusDestination> = [];
            places.push({
                placename:  establishments[index].items[estaIndex].name, 
                distance:   poly.distance,
                destinations: establishmentPos
            });
            localDispatch( setIsLookingForAPlace(true));
            localDispatch( setDestinationStatus(places) ); 
        } catch(err) {
            isError = true;
            localDispatch( setMapLock(false) );
            localDispatch( setDialogMessage('Failed...', 'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n' + err) );           
        }
        localDispatch( setMapPathIsLoading(false) );
        setTimeout(() => {
            localDispatch( setMapLock(false) );
            localDispatch( setZoomlevel(17) );
            if(!isError)
                localDispatch( setDialogMessage('Found Establishment', 'You are away by: ' + distance + ' from ' + establishments[index].items[estaIndex].name) ); 
        }, 3000);
    })();  
}
