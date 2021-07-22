/*
    The list of Self Guided tours that are available
    These tours are guided only by a GPS line mark.

    This is file is not optional - which means that it should appear when remaking the 
    app for a different cities.

BASIC TEMPLATE===================================================
export const GPSRANGE = {
    x:      12.345678,  endy: 12.345678,
    endx:   12.345678,  y:    12.345678,
};
export const IntroPosition = { lat: 12.345678, lng: 12.345678 };

export const GalaTours :Array<GalaSelfGuidedTour> = [
    {
        name:               'Place Name',
        description:        'The short description (which appear in the select tour dialog)',
        longdescription:    'this data will appear in the "Tour information" dialog box',
        destinations: [
            {
                from: 'user', //or an object with value: {lat :number lng: number, name: string}
                to: {
                    lat: 12.345678,
                    lng: 12.345678,
                    name:           'Destination name',
                    commute:        'How to go to this area',
                    description:    'Destination description',
                    address:        'Place address',
                },
            },
        ],
        pointOfInterests: [
            {
                lat: 12.345678,
                lng: 12.345678,
                name:           'Point of interest (a place where should ne notice by a tourist)',
                description:    'Description of the place',
                voiceasset: () => { return TEMP_VOICE }  //Voice asset is often available for the tourist to hear the place description instead of reading it
            },
        ],
    },
]
=================================================================
*/

import { GalaSelfGuidedTour } from '../!interfaces/GalaSelfGuidedTour';

export const GPSRANGE = {
    x:      121.041694,  endy: 14.21141, //041406
    endx:   121.135533,  y: 14.339070,   //339077
};

//The initial (user position) before the user GPS location is found
export const IntroPosition = {lat: 14.296238, lng: 121.105799};

import BisitaIglesia    from './tours/Bisita Iglesia';
import GlimpseOfHistory from './tours/Glimpse of History';
import EnchantedKindom  from './tours/EnchantedKingdom';
import PaseoAndNuvali   from './tours/Paseo and Nuvali';
import BusTerminal      from './tours/Bus Terminals';

export const GalaTours :Array<GalaSelfGuidedTour> = [
    BisitaIglesia,
    GlimpseOfHistory,
    EnchantedKindom,
    PaseoAndNuvali,
    BusTerminal,

    {
        name: 'Amir TEST Home',
        description: 'Amir actual Test',
        longdescription: 'an actual test',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.304850, lng: 121.117827, name: 'Close to home',
                    commute: 'Just walk',
                    description: 'no desc', 
                }
            }
        ],
        pointOfInterests: [
            { lat: 14.3046386, lng: 121.118446, name: 'Home Court',
                description: 'Home Court',
                voiceasset: () => { return require('../../assets/santarosa/speech/sample.mp3') }
            },
        ]
    }
];
