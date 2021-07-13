/*
    Return the user current position or return error if out of range
*/

import * as Location from 'expo-location';
import { GPSRANGE } from '../../../../database/assistantour/tours';

export async function getLocation() {
    const location = await Location.getCurrentPositionAsync({});
    if( location.coords.latitude  > GPSRANGE.y || location.coords.latitude < GPSRANGE.endy ||
        location.coords.longitude < GPSRANGE.x || location.coords.longitude > GPSRANGE.endx )
        throw new Error('OutOfRangeException');
    return {lat: location.coords.latitude, lng: location.coords.longitude};
}