import { PlaceInformationInterface } from '../!PlaceInfoInterface';

export default function PlaceInfo() :PlaceInformationInterface {
    return {
        name:           'Santa Rosa - Binan Boundary',
        address:        '32 Rizal Blvd, Santa Rosa, Laguna',
        latitude:       14.321692,
        longitude:      121.096832,
        headerimage:    require('../../../assets/santarosa/santa rosa binan.jpg'),
        website:        undefined,
        contents: [
            {
            paragraph: 'This area is the boundary between Santa Rosa City and Binan City. ' +
            'There is a Gas Station and two roads - the left road leads to Santa Rosa Plaza while the other leads to Robinson, ' +
            'SM Malls, and Brgy. Balibago. '
            },
            {
                headingText: 'How to get there?',
                paragraph: 'From inside the Santa Rosa city, take a jeepney ride going to San Pedro or SM. If by car, take the National Highway or Rizal Blvd road going north. '
            }
        ],
    }
};