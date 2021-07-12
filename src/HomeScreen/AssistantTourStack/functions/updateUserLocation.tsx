/*
    Set the user postion by calling an localReducer
*/

import { setUserPosition } from '../localstateAPI/actions';
import { getLocation } from './getLocation';

export async function UpdateUserLocation( localDispatch: any) {
    try {
        const userlocation = await getLocation();
        localDispatch( setUserPosition(userlocation) );
    } catch(err) {}
}
