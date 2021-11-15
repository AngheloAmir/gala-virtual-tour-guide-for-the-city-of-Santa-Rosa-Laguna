/*
    Define the contents and type of the APP STATE
    It is also known as the global state
*/

import React from 'react';
import { HomeStateInterface } from './interface';
const mapjson = require('../../../../database/map.json');

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
        isSearchBarShow: false,

        //Show instant street view creadit dialog. This value is quite confusing, but to make sure it is displayed once
        //0 means never showed
        //1 means it is show but first time
        //2 means that it was previous show so no need to show it again
        isInstantSVCreadit: 0,
        webviewlink: '',
        mapCenterPosition: mapjson.introposition,
        zoomlevel: 14,
    };
}
