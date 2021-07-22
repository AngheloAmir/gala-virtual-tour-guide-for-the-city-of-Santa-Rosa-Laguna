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
            name:  'Anonymous Account',
            about: 'Provide a short description of yourself for the community',
            avatar: 0,
            signedin: false,
            status: 'Guest',
        },
        
        features: {
        },
    };
}
