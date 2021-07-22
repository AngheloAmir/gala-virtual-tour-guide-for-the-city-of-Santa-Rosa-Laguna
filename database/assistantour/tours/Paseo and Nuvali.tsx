import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';

const PaseoAndNuvali :GalaSelfGuidedTour = {
    name: 'Paseo and Nuvali',
    description: 'The green and refreshing site',
    longdescription: 'Paseo and Nuvali are popular tourist spots in Santa Rosa. Relieve the fresh air in Nuvali or take a shopping spree in Paseo. Go into point of interest to see a beautiful and refreshing view.', 
    destinations: [
        {
            from: 'user',
            to: {
                lat: 14.247622, lng: 121.063784,
                name: 'Paseo de Santa Rosa',
                commute: 'Take a ride to "Complex" or a bus, then find the tricle terminal (close to Target Mall) and ride a tricle. Ask the driver to Paseo. The fare rate may reach P150',
            },
        },
        {
            from: { lat: 14.247622, lng: 121.063784, name: 'Paseo de Santa Rosa' },
            to: {
                lat: 14.240921, lng: 121.058971, name: 'Nuvalli Park Parking',
                commute: 'Take a ride to "Complex" or a bus, then find the tricle terminal (close to Target Mall) and ride a tricle. Ask the driver to Nuvalli. The fare rate may reach P150',
            },
        },
    ],
    pointOfInterests: [
        {
            lat: 14.240475, lng: 121.058054,
            name: 'Nuvali Fish Feeding',
            description: 'Feed a multitude of Koi Fish that looks like yummy goldfish. These fishes can be feed only by Solenad designated feeding pack. Children and adults are having fun feeding them. Remember, avoid getting too close to the waters.',
        },
        { lat: 14.240358, lng: 121.058706,
            name: 'Nuvali Park',
            description: 'Take a picnic or take a nap in the grassy park of Nuvali.',
        },
        {
            lat: 14.237234, lng: 121.059677,
            name: 'Lake View',
            description: 'Take a look at Nuvali Lake and it\'s a multi-functional lake.',
        },
        {
            lat: 14.235051, lng: 121.058668,
            name: 'Evoliving Center',
            description: 'The lifestyle, business focus center, and other eco-green environment venues. It has about 51 thousand trees and most of them are native species in the country.',
        },
        {
            lat: 14.2369391,lng: 121.057341,
            name: 'Ayala Malls Solenad',
            description: 'The shopping mall in Nuvali',
        },
    ]
}
export default PaseoAndNuvali;
