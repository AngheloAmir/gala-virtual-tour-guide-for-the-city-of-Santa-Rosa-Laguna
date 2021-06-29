import { PlaceInformationInterface } from '../!PlaceInfoInterface';

export default function PlaceInfo() :PlaceInformationInterface {
    return {
        name:           'City Plaza',
        address:        'Rizal Blvd, Santa Rosa, Laguna',
        latitude:       14.314083,
        longitude:      121.112111,
        headerimage:    require('../../../assets/santarosa/plaza.jpg'),
        website:        undefined,
        contents: [
            {
                headingText: 'aaaaa', paragraph: 'aaaaaa'
            }
        ],
    }
};