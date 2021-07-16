/*
    The list of Self Guided tours that are available
    These tours are guided only by a GPS line mark.

    This is file is not optional
*/

import { GalaSelfGuidedTour } from '../!interfaces/GalaSelfGuidedTour';

//Set the range of working GPS
export const GPSRANGE = {
    x:      121.041694,  endy: 14.21141, //041406
    endx:   121.135533,  y: 14.339070,   //339077
};

export const IntroPosition = {lat: 14.296238, lng: 121.105799};

const TEMP_VOICE = require('../../assets/speech/sample.mp3');

export const GalaTours :Array<GalaSelfGuidedTour> = [
    {
        name: 'Bisita Iglesia',
        description: 'Visit catholic churches',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.294119, lng: 121.105482, name: 'Chair of St. Peter Church Parish Church',
                    commute: 'Busses will drop you to Balibago Complex. If not, ride a jeep with a sign "Complex". The common fare rate is P10',
                    description: 'no desc',
                },
            },
            {
                from: 'user',
                to:  {
                    lat: 14.313694, lng: 121.111536, name: 'Santa Rosa De Lima Parish Church',
                    commute: 'Ride a jeep with a sign "Bayan" or "Tagapo". The common fare rate is P10',
                    description: 'no desc', 
                }
            }
        ],
        pointOfInterests: [
            { lat: 14.313931, lng: 121.111579, name: 'Santa Rosa De Lima Parish Church',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.294416, lng: 121.105571, name: 'Chair of St. Peter Church Parish Church',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
        ]
    },

    {
        name: 'Glimpse Of Santa Rosa',
        description: 'Take look into the city',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.313727, lng: 121.112185, name: 'Santa Rosa Bayan',
                    commute: 'Ride a jeep with a sign "Bayan" or "Tagapo". The common fare rate is P10',
                    description: 'no desc', 
                }
            },
        ],
        pointOfInterests: [
            { lat: 14.314116, lng: 121.112082, name: 'City Plaza',          description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.313892, lng: 121.111595, name: 'Santa Rosa de Lima',  description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.315214, lng: 121.111438, name: 'Santa Rosa Arch',     description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.312721, lng: 121.112980, name: 'Casa Gonzales',       description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.313601, lng: 121.111843, name: 'Museo ng Santa Rosa', description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.313764, lng: 121.112556, name: 'Col. Basillo Boromeo Gonzales Statue', description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
        ]
    },

    {
        name: 'Enchanted Kingdom',
        description: 'Visit the theme park.',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.281996, lng: 121.097719, name: 'Enchanted Kindom',
                    commute: 'Take a ride to "Complex" or a bus, then find the tricle terminal (close to Target Mall) and ride a tricle. Ask the driver to Enchangted Kingdom. The fare rate may reach P100',
                    description: 'no desc', 
                }
            }
        ]
    },

    {
        name: 'Nuvali Park',
        description: 'The green and refreshing site',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.240921, lng: 121.058971, name: 'Nuvalli Park Parking',
                    commute: 'Take a ride to "Complex" or a bus, then find the tricle terminal (close to Target Mall) and ride a tricle. Ask the driver to Nuvalli. The fare rate may reach P150',
                    description: 'no desc', 
                },
            }
        ],
        pointOfInterests: [
            { lat: 14.240475, lng: 121.058054, name: 'Nuvali Fish Feeding', description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.240358, lng: 121.058706, name: 'Nuvali Park',         description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.237234, lng: 121.059677, name: 'Lake View',           description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.235051, lng: 121.058668, name: 'Evoliving Center',    description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
            { lat: 14.2369391,lng: 121.057341, name: 'Ayala Malls Solenad', description: 'no desc', voiceasset: () => { return TEMP_VOICE }},
        ]
    },
    
    {
        name: 'To Bus Terminal',
        description: 'Find busses for commuters',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.293904, lng: 121.104525, name: 'Balibago Bus Termininal',
                    commute: 'Ride a jeep with a sign "Complex". The common fare rate is P10',
                    voiceasset: () => undefined,
                    description: 'no desc', 
                }
            }
        ],
        pointOfInterests: [
            { lat: 14.293864, lng: 121.103926, name: 'TNVS Group',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.293665, lng: 121.104334, name: 'Bus Terminal',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.292273, lng: 121.103227, name: 'Vista Mall Terminal',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.294400, lng: 121.103461, name: 'Target Mall',
                description: 'no desc',
                voiceasset: () => { return TEMP_VOICE }
            },
        ]
    }
];