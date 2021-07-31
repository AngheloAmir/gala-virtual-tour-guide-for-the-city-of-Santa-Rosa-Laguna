/*
    Define what will happen after the map is loaded and draw
    -- used in AssistanTourIndex.tsx
*/
import * as Location from 'expo-location';
import { setDialogMessage, permissionLocationNotGranted, setMapWasLoaded,
         setUserPosition, setMapCenter, setZoomlevel, setMapLock } from '../localstateAPI/actions';
const mapjson       = require('../../../../database/map.json');
const IntroPosition = mapjson.introposition;
const mapbounds     = mapjson.mapbounds;

interface UserPosition {
    lat:        number;
    lng:        number;
    accurancy:  number;
}

export async function init( localDispatch :any) {
    try {
        await RequestPermission();
        const userlocation :UserPosition = await getLocation();
        localDispatch( setUserPosition(userlocation) );
        localDispatch( setMapCenter(userlocation) );
        setTimeout( () => {
            localDispatch( setZoomlevel(17) );
            localDispatch( setMapWasLoaded() );
            localDispatch( setMapLock(false) );
            if(userlocation.accurancy >= 600)
                localDispatch( setDialogMessage('Low GPS Acccurancy',
                'Caution! Your device current GPS accuracy is TOO LOW! You are withing ' + userlocation.accurancy + ' meters.') );
            else if(userlocation.accurancy >= 120)
                localDispatch( setDialogMessage('GPS Acccurancy',
                'You are withing ' + userlocation.accurancy + ' meters. ' +
                'To improve your GPS accuracy, make sure you are under unobstructed clear sky and/or connect it to pocket wifi. ' +
                'The accuracy is affected by weather conditions and obstructions.') ); 
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

async function getLocation() :Promise<UserPosition> {
    const location = await Location.getCurrentPositionAsync(
        { accuracy: Location.Accuracy.BestForNavigation, mayShowUserSettingsDialog: true });
    if( location.coords.latitude  > mapbounds.y || location.coords.latitude < mapbounds.endy ||
        location.coords.longitude < mapbounds.x || location.coords.longitude > mapbounds.endx )
        throw new Error('OutOfRangeException');
    return {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        accurancy: location.coords.accuracy ? location.coords.accuracy : 0,
    };
}
