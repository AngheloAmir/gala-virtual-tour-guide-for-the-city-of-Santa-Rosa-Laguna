/*
    Define what will happen after the map is loaded and draw
    -- used in IndexContainer.tsx
*/

import * as Location from 'expo-location';
import { setDialogMessage, permissionLocationNotGranted, setMapWasLoaded,
         setUserPosition, setMapCenter, setZoomlevel, setMapLock } from '../localstateAPI/actions';
import { IntroPosition } from '../../../../database/assistantour/tours';
import { getLocation } from './getLocation';

export async function init( localDispatch :any) {
    try {
        await RequestPermission();
        const userlocation = await getLocation();
        localDispatch( setUserPosition(userlocation) );
        localDispatch( setMapCenter(userlocation) );
        setTimeout( () => {
            localDispatch( setZoomlevel(17) );
            localDispatch( setMapWasLoaded() );
            localDispatch( setMapLock(false) );
        }, 3000);
    }
    catch(err) {
        if(err.message == 'PermissionException') 
            localDispatch( setDialogMessage('Location error', 'Location permision not granted or there is no data connection.') );
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

async function RequestPermission() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status == 'granted') return true;
    throw new Error('PermissionException');
}
