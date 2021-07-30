/*
    This function was essentially part of the NotifyWhenClose.tsx.
    It was seperated and now part of AssistanTourIndex in order to prevent error:
    'Cant update on unmounted component'

    show whether show the 'Gala Book' (a beeping icon in the left side of the screen)
    when the user is close to a point of interest marker
*/
import { Platform } from 'react-native';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setIsCloseToMarker, setPoiIndex } from '../localstateAPI/actions';
import { GalaTours } from '../functions/options';
import { isClose } from '../functions';

const mapsetting = require('../.././../../database/map.json');
const AQUITANCERANGE = mapsetting.pointOfInterestAcquisitionRange;

export function CheckIfGalaBookShow( {localState, localDispatch}:LocalStateAPI, userPosition :{lat :number, lng :number}) {
    if( localState.currenttour.index < 0 ||
        !GalaTours[localState.currenttour.index].pointOfInterests) {
        localDispatch(setIsCloseToMarker(false));
        return;
    }
    let hasClosestPOI :boolean = false;
    let poinIndex     :number  = -1;

    for(let i=0; i < GalaTours[localState.currenttour.index].pointOfInterests.length; i++) {
        const POI = GalaTours[localState.currenttour.index].pointOfInterests[i];
        const poiPos = { lat: POI.lat, lng: POI.lng };
        if( isClose(userPosition, poiPos, AQUITANCERANGE ) ) {
            hasClosestPOI = true; poinIndex = i;
        }
    }
    if(hasClosestPOI && poinIndex > -1) {
        localDispatch(setIsCloseToMarker(true));
        localDispatch( setPoiIndex(poinIndex));
    }
    else {
        localDispatch(setIsCloseToMarker(false));
        localDispatch( setPoiIndex(-1));
    }
}
