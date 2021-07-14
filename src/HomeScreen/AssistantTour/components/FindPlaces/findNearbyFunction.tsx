/*
    Handle the effect (animation) when the user press "find Nearby" when FindPlaces component is shown

    HOW IT WORKS
    First, it look for the user position which is stored in the first element of the localState.mapmarkers.
    Then, it enumerate based on the selected category each and compare each whether there are closer to the
    user position or not. closestGradeLat, closestGradeLng, estaGradeLat, estaGradeLng are variables used to
    determine.
    After it found the nearby place it will add a new map marker in the localState and then
    it will make animation (effect) into the map  
*/

import { MapShape } from "expo-leaflet";
import {
    setFindPlacesOpen,
    setMapMarkers,
    setMapLock,
    setZoomlevel,
    setMapCenter,
    setMapPathIsLoading,
    setMapPolyLines,
    setDialogMessage }
    from '../../localstateAPI/actions';
import { getPathWays } from     '../../functions';
import { LocalStateAPI } from   '../../localstateAPI/interface';
import { establishments } from  '../../../../../database/assistantour/establishments';

export default async function findNearbyFunction({localDispatch, localState} :LocalStateAPI, index :number) {
    localDispatch(setFindPlacesOpen(false));

    //The user position is always stored at mapmarkers[0]
    const userLocation :{lat: number, lng: number} = localState.mapmarkers[0].position;
    let   closestEst   :{lat: number, lng: number} = {lat: 0, lng: 0};
    let   closestGradeLat = 999, closestGradeLng = 999, estaGradeLat = 0, estaGradeLng = 0;
    let   establishmentIndex: number = -1;
    for(let i = 0; i < establishments[index].items.length; i++ ) {
        const temp = {
            lat: establishments[index].items[i].lat,
            lng: establishments[index].items[i].lng,
        }
        //get the establishment current grade
        if(userLocation.lat > temp.lat)
            estaGradeLat = userLocation.lat - temp.lat;
        else  
            estaGradeLat = temp.lat - userLocation.lat;
        if(userLocation.lng > temp.lng)
            estaGradeLng = userLocation.lng - temp.lng;
        else
            estaGradeLng = temp.lng - userLocation.lng;
        //compare the grade
        if(estaGradeLng < closestGradeLng || estaGradeLng < closestGradeLng) {
            establishmentIndex = i;
            closestGradeLat = estaGradeLat; closestGradeLng = estaGradeLng;
            closestEst = {lng: temp.lng, lat: temp.lat}
        }
    }
    const userPosition = localState.mapmarkers[0].position;
    const mapmarkers = localState.mapmarkers.filter((marker, index) => index !== 0);
    localDispatch( setMapMarkers([...mapmarkers, {
            id: localState.mapmarkers.length + '' ,
            position: closestEst,
            icon: '<div style="margin-top: -28px; margin-left: 26px">🏨</div>', size: [24, 24],
            //@ts-ignore
            name: establishments[index].items[establishmentIndex].name,
            commute: 'Establishment',
    }]) );
    localDispatch( setDialogMessage('Found Establishment', 'Nearest ' + establishments[index].category + ' is ' + establishments[index].items[establishmentIndex].name) );           
    localDispatch( setMapLock(true) );
    localDispatch( setZoomlevel(12) );
    localDispatch( setMapCenter(userPosition));
    localDispatch( setMapPathIsLoading(true) );

    ( async () => {
        try {
            const id   :number = localState.mapmarkers.length;
            const poly :MapShape | any = await getPathWays(id, userPosition, closestEst, true);
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
