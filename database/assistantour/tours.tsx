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

export const GalaTours :Array<GalaSelfGuidedTour> = [
    {
        name: 'Bisita Iglesia',
        description: 'Visit catholic churches',
        longdescription: 'adasdasda',
        destinations: [
            {
                from: 'user',
                to: {
                    lat: 14.294119, lng: 121.105482, name: 'Chair of St. Peter Church - Balibago',
                    commute: 'Busses will drop you to Balibago Complex. If not, ride a jeep with a sign "Complex". The common fare rate is P10',
                    voiceasset: () => undefined,
                },
            },
            {
                from: 'user',
                to:  {
                    lat: 14.313694, lng: 121.111536, name: 'Santa Rosa De Lima Parish Church',
                    commute: 'Ride a jeep with a sign "Bayan" or "Tagapo". The common fare rate is P10',
                    voiceasset: () => undefined,
                }
            }
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
                    voiceasset: () => undefined,
                }
            },
        ],
        pointOfInterests: [
            { lat: 14.313892, lng: 121.111595, name: 'Santa Rosa de Lima',  voiceasset: () => undefined },
            { lat: 14.315214, lng: 121.111438, name: 'Santa Rosa Arch',     voiceasset: () => undefined },
            { lat: 14.312721, lng: 121.112980, name: 'Casa Gonzales',       voiceasset: () => undefined },
            { lat: 14.313601, lng: 121.111843, name: 'Museo ng Santa Rosa', voiceasset: () => undefined },
            { lat: 14.313764, lng: 121.112556, name: 'Col. Basillo Boromeo Gonzales Statue', voiceasset: () => undefined}
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
                    voiceasset: () => undefined,
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
                    voiceasset: () => undefined,
                },
            }
        ],
        pointOfInterests: [
            { lat: 14.240475, lng: 121.058054, name: 'Nuvali Fish Feeding', voiceasset: () => undefined },
            { lat: 14.240358, lng: 121.058706, name: 'Nuvali Park',         voiceasset: () => undefined },
            { lat: 14.237234, lng: 121.059677, name: 'Lake View',           voiceasset: () => undefined },
            { lat: 14.235051, lng: 121.058668, name: 'Evoliving Center',    voiceasset: () => undefined },
            { lat: 14.2369391,lng: 121.057341, name: 'Ayala Malls Solenad', voiceasset: () => undefined },
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
                    voiceasset: () => undefined 
                }
            }
        ],
    }
];