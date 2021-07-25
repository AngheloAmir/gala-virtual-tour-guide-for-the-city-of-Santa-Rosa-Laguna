/*
    Define what will happen after the map is loaded and draw
    -- used in AssistanTourIndex.tsx
*/
import * as Location from 'expo-location';
import { setDialogMessage, permissionLocationNotGranted, setMapWasLoaded,
         setUserPosition, setMapCenter, setZoomlevel, setMapLock } from '../localstateAPI/actions';
import { IntroPosition } from '../../../../database/assistantour/tours';
import { GPSRANGE } from '../../../../database/assistantour/tours';

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
            //@ts-ignore
            if(userlocation.accurancy >= 100)
                localDispatch( setDialogMessage('GPS Acccurancy',
                'Caution! Your GPS accrancy is too low! You are withing ' + userlocation.accurancy + 'meter. ' +
                'To improve your GPS accurancy, enable location in your device and connect it to a pocket wifi. ' +
                'The accurancy is affected by weather condition and obsructions such as trees. ' +
                'Visit https://www.gps.gov/systems/gps/performance/accuracy/ to learn more.') );
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

async function getLocation() {
    const location = await Location.getCurrentPositionAsync({});
    if( location.coords.latitude  > GPSRANGE.y || location.coords.latitude < GPSRANGE.endy ||
        location.coords.longitude < GPSRANGE.x || location.coords.longitude > GPSRANGE.endx )
        throw new Error('OutOfRangeException');
    return {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        accurancy: location.coords.accuracy,
    };
}
