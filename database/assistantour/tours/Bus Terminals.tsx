import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';

const TEMP_VOICE = require('../../../assets/speech/sample.mp3');

const BusTerminal :GalaSelfGuidedTour = {
    name: 'To Bus Terminal',
    description: 'Find busses for commuters',
    longdescription: 'Visit the Santa Rosa Complex Balibago, the busiest place in the city. There are a lot of establishments that can be found here, from a bakery, hardware, electronics, tiange, and food stall.',
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
            description: 'TNVS Group Jeepney and UV Express terminal',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.293665, lng: 121.104334, name: 'Bus Terminal',
            description: 'Bus Terminal',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.292273, lng: 121.103227, name: 'Vista Mall Terminal',
            description: 'Bus terminal',
            voiceasset: () => { return TEMP_VOICE }
        },
        { lat: 14.294400, lng: 121.103461, name: 'Target Mall',
            description: 'Take a visit to the most known mall in Santa Rosa. Although it is small, it becomes popular because it was close to bus terminals.',
            voiceasset: () => { return TEMP_VOICE }
        },
    ]
}
export default BusTerminal;
