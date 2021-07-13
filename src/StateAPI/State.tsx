/*
    Define the contents and type of the APP STATE
    It is also known as the global state
*/

import React from 'react';
import { GuideContent } from '../../database/!interfaces/GuideContent';
import { PlaceInformation } from '../../database/!interfaces/PlaceInformation';

export const contextProvider :React.Context<any> = React.createContext(null);

export interface StateAPI {
    state     :StateInterface;
    dispatch  :React.Dispatch<any>;
}

export interface StateInterface {
    user :{
        name        :string;
        about       :string;
        avatar      :number;
        signedin    :boolean;
        status      : 'Will visit' | 'visited' | 'Residence' | 'Guest';
    };
    screen :{
        current: 'signin' | 'home';
    };
    features :{
        guideInfo?           :GuideContent;
    };
    map :{
        visiblePoints   :{
            mall     :boolean;
            resto    :boolean;
            gas      :boolean;
            hotel    :boolean;
            hospital :boolean;
            police   :boolean;
            bus      :boolean;
            info     :boolean;
            line     :boolean;
        };
        isShowIntro        :boolean;
        streetviewlink     :string;
        markerdescription  :PlaceInformation;
    };
}

/*=============================================================*/
/*=============================================================*/
export function createDefaultState() :StateInterface {
    return {
        user: {
            name:  'Anonymous Account',
            about: 'Provide a short description of yourself for the community',
            avatar: 0,
            signedin: false,
            status: 'Guest',
        },
        screen: {
            current: 'home',
        },
        
        features: {
        },

        map: {
            visiblePoints   :{
                mall:    true,
                resto:   true,
                gas:     true,
                hotel:   true,
                hospital:true,
                police:  true,
                bus:     true,
                info:    true,
                line:    true, 
            },
            isShowIntro: false,
            streetviewlink: 'https://www.google.com/',
            markerdescription: {
                name: '', description: '', address: '', type: 'spot', longitude: 1, latitude: 1,
                getImage:   () => require('../../assets/app/favicon.png'),
                getIcon:    () => require('../../assets/app/favicon.png'),
            }
        },
    };
}
