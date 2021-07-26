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
    setDialogMessage }      from '../../localstateAPI/actions';
import { getPathWays }      from '../../functions';
import { LocalStateAPI }    from '../../localstateAPI/interface';

import { EstablishmentCategory }    from '../../../../../database/!interfaces/Establishment';
const tourjson                      = require ('../../../../../database/assistantour.json');
const establishments :Array<EstablishmentCategory> = tourjson.establishments;

export default async function findPlaceFunction({localDispatch, localState} :LocalStateAPI, index :number, estaIndex :number) {
    const userPosition = localState.mapmarkers[0].position;
    const establishmentPos = {
        lat: establishments[index].items[estaIndex].lat,
        lng: establishments[index].items[estaIndex].lng
    };
    const mapmarkers = localState.mapmarkers.filter((marker :any, index :number) => index !== 0);
    localDispatch( setMapMarkers([...mapmarkers, {
            id: localState.mapmarkers.length + '' ,
            position: establishmentPos,
            icon: '<div style="margin-top: -28px; margin-left: 26px">🏨</div>', size: [24, 24],
            //@ts-ignore
            name: establishments[index].items[estaIndex].name,
            commute: 'Establishment'
    }]) );

    localDispatch( setMapLock(true) );
    localDispatch( setZoomlevel(12) );
    localDispatch( setMapCenter(userPosition));
    localDispatch( setMapPathIsLoading(true) );

    ( async () => {
        try {
            //let polylines :Array<MapShape> = [];
            const id   :number = localState.mapmarkers.length;
            const poly :MapShape | any = await getPathWays(id, userPosition, establishmentPos, true);
            //polylines.push(poly);
            localDispatch( setMapPolyLines([...localState.polylines, poly]) );
        } catch(err) {
            localDispatch( setMapLock(false) );
            localDispatch( setDialogMessage('Failed...', 'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n' + err) );           
        }
        localDispatch( setMapPathIsLoading(false) );
        setTimeout(() => {
            localDispatch( setMapLock(false) );
            localDispatch( setZoomlevel(17) );
        }, 3000);
    })();  
}
