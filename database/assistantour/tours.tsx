/*
    The list of Self Guided tours that are available
    These tours are guided only by a GPS line mark.

    This is file is not optional

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
        longdescription:    'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 12.345678, lng: 12.345678,
                    name:           'Destination name',
                    commute:        'How to go to this area',
                    description:    'Destination description',
                },
            },
        ],
        pointOfInterests: [
            {
                lat: 12.345678, lng: 12.345678,
                name:           'Point of interest (a place where should ne notice by a tourist)',
                description:    'Description of the place',
                //Voice asset is often available for the tourist to hear the place description instead of reading it
                voiceasset: () => { return TEMP_VOICE }
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

//Voice Assets
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
        ],
        pointOfInterests: [
            { lat: 14.282312, lng: 121.096497, name: 'Grand Carousel',
                description: 'The Grand Carousel is the activy that first you can see in the theme park',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.282474, lng: 121.095424, name: 'Brooklyn ',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.283177, lng: 121.096136, name: 'EKStreme Drop Tower ',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.281617, lng: 121.096367, name: 'Disk-O-Magic',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.281927, lng: 121.095970, name: 'River Rapids',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.282869, lng: 121.094872, name: 'Anchors Away',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.281820, lng: 121.094222, name: 'Space Shuttle',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.282642, lng: 121.093968, name: 'Jungle Rapids',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
            { lat: 14.282402, lng: 121.094941, name: 'Wheel of Faith (Ferris Wheel)',
                description: 'The Gsss',
                voiceasset: () => { return TEMP_VOICE }
            },
        ],
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
    },

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
                voiceasset: () => { return TEMP_VOICE }
            },
        ]
    }
];
