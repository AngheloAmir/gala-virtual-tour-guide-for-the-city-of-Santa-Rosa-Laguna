/*
    Define the contents and type of the APP STATE
    It is also known as the global state
*/

import React from 'react';
import { StateInterface } from './Interfaces';

export const contextProvider :React.Context<any> = React.createContext(null);

export interface StateAPI {
    state     :StateInterface;
    dispatch  :React.Dispatch<any>;
}

export function createDefaultState() :StateInterface {
    return {
        user: {
            name:        'passkey',
            description: 'token',
            avatar:      0,
            uid:         'secret token = asdacso85asdq;Ad21',
            token:       'secret token = utbcosab976faa',
            registered:  false,
            joined:      0,
        },
        features: {
        },
        isHideBottomTabs: false,
    };
}
