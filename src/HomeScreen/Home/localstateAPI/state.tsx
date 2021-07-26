/*
    Define the contents and type of the APP STATE
    It is also known as the global state
*/

import React from 'react';
import { HomeStateInterface } from './interface';
export const localContextProvider :React.Context<any> = React.createContext(null);

export interface LocalStateAPI {
    state     :HomeStateInterface;
    dispatch  :React.Dispatch<any>;
}

export function createDefaultState() :HomeStateInterface {
    return {
        attributionDialogShow:  false,
        mapMarkerId: 0,
        placeInfoShow: false,
        isMarkerShow: true,
        streetviewlink: 'https://www.instantstreetview.com/@14.296999,121.10642,213.27h,-2.27p,0z,dkDlNDPVCmJAfH-mjvfgog'
    };
}
