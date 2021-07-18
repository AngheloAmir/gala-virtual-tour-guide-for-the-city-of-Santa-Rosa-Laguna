/*
    Handle the effect (animation) when the user press "find Nearby" when FindPlaces component is shown

    HOW IT WORKS
    First, it look for the user position which is stored in the first element of the localState.mapmarkers.
    Then, it enumerate based on the selected category each and compare each whether there are closer to the
    user position or not.
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

 //Find the nearest establishment
    const userLocation :{lat: number, lng: number} = localState.mapmarkers[0].position;
    let   closestEst   :{lat: number, lng: number} = {lat: 0, lng: 0};
    let   establishmentIndex: number = -1;
    let closestDistance :number = 999999;
    for(let i = 0; i < establishments[index].items.length; i++ ) {
        const temp = {
            lat: establishments[index].items[i].lat,
            lng: establishments[index].items[i].lng,
        }
        const distance = Math.sqrt(
                Math.pow(userLocation.lat - temp.lat, 2) +
                Math.pow((userLocation.lng - temp.lng), 2)
        );
        if(distance < closestDistance) {
            closestDistance = distance;
            closestEst      = {lng: temp.lng, lat: temp.lat}
            establishmentIndex = i;
        }
    }

//Add the establishment in the Markers of Expo-Leaflet
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
    localDispatch( setMapCenter(userLocation));
    localDispatch( setMapPathIsLoading(true) );

//Create a navigational path between the user and the establishment
    ( async () => {
        try {
            const id   :number = localState.mapmarkers.length;
            const poly :MapShape | any = await getPathWays(id, userLocation, closestEst, true);
            localDispatch( setMapPolyLines([...localState.polylines, poly]) );
        } catch(err) {
            localDispatch( setMapLock(false) );
            localDispatch( setDialogMessage('Failed...',
                'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n' + err) );           
        }
        localDispatch( setMapPathIsLoading(false) );
        setTimeout(() => {
            localDispatch( setMapLock(false) );
            localDispatch( setZoomlevel(17) );
        }, 3000);
    })();
}
