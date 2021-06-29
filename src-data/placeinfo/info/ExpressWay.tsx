import { PlaceInformationInterface } from '../!PlaceInfoInterface';

export default function PlaceInfo() :PlaceInformationInterface {
    return {
        name:           'Express Way',
        address:        'string',
        latitude:       123,
        longitude:      123,
        headerimage:    undefined,
        website:        undefined,
        contents: [
            {
                headingText: 'aaaaa', paragraph: 'aaaaaa'
            }
        ],
    }
};