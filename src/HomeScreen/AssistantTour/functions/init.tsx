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

export async function init( localDispatch :any, isdevmode :boolean= false) {
    let isGranted = false;
    let isBreak   = false;

    setTimeout(() => {
        if(!isGranted) {
            isBreak = true;
            localDispatch(
                setDialogMessage(
                'Request for location has time out',
                'The request for your geolocation has timed out. It may be that permission for location is not granted, location is off, Google Service is not present, or the device has a problem getting its geolocation. \n\nYou can still see how this feature work but the marker is not your actual location.'
            ));
            localDispatch( setUserPosition(IntroPosition) );
            localDispatch( setZoomlevel(17) );
            localDispatch( setMapWasLoaded() );
            localDispatch( setMapLock(false) );
            localDispatch( permissionLocationNotGranted() );
        }
    }, 20000);

    try {
        if(isdevmode) throw new Error('dev mode');
        await RequestPermission();
        const userlocation :UserPosition = await getLocation();

        //This is used for timeout when requesting for geolocation
        isGranted = true;
        if(isBreak) return;

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
        if(isBreak) return;
        isGranted = true;

        let isCanStillBeUse = false;

        if(err.message == 'PermissionException' && !isdevmode) 
            localDispatch( setDialogMessage('Location error', 'Location permision not granted or there is no data connection.') );
        else if(err.message == 'OutOfRangeException' && !isdevmode) {
            localDispatch( setDialogMessage('Too far from Santa Rosa', 'This application is optimize to work inside Santa Rosa City but it will still works as intended. ') );
            isCanStillBeUse = true;
        }
        else 
            localDispatch( setDialogMessage('Error', err) );
        localDispatch( setUserPosition(IntroPosition) );
        localDispatch( setZoomlevel(17) );
        localDispatch( setMapWasLoaded() );
        localDispatch( setMapLock(false) );

        if(isdevmode) {
            localDispatch( setDialogMessage('Development mode', 'You are at development mode. Tap on the map to teleport to that area') );
        }

        //suppress error during devmode
        if(!isdevmode && !isCanStillBeUse) {
            localDispatch( permissionLocationNotGranted() );
        }
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
