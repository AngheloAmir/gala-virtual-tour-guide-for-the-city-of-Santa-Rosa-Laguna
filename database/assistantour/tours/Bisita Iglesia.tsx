import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';

const ChairofStPeterParishChurch        = require('../../places/Chair of St. Peter Parish Church.json');
const SantaRosaDeLimaParishChurch       = require('../../places/Santa Rosa De Lima Parish Church.json');
const TEMP_VOICE = require('../../../assets/speech/sample.mp3');

const BisitaIglesia :GalaSelfGuidedTour = {
    name:               'Bisita Iglesia',
    description:        'Visit Catholic churches',
    longdescription:    'Visiting Churches for Holy Week for religious reasons? Here are the churches that you may visit in Santa Rosa. However, due to the rising Covid-19 in Laguna, these churches are likely to be close.',
    destinations: [
        {
            from: 'user',
            to: {
                lat: 14.294119, lng: 121.105482,
                name:     'Balibago Complex',
                commute:  ChairofStPeterParishChurch.commute,
            },
        },
        {
            from: 'user',
            to:  {
                lat: 14.313694, lng: 121.111536,
                name:    'Santa Rosa Bayan',
                commute:  SantaRosaDeLimaParishChurch.commute,
            }
        }
    ],
    pointOfInterests: [
        {
            name:           'Santa Rosa De Lima Parish Church',
            address:        SantaRosaDeLimaParishChurch.address,
            description:    SantaRosaDeLimaParishChurch.description,
            lat:            SantaRosaDeLimaParishChurch.lat,
            lng:            SantaRosaDeLimaParishChurch.lng,
            voiceasset: () => { return TEMP_VOICE }
        },
        {
            name:           'Chair of St. Peter Church Parish Church',
            address:        ChairofStPeterParishChurch.address,
            description:    ChairofStPeterParishChurch.description,
            lat:            ChairofStPeterParishChurch.lat,
            lng:            ChairofStPeterParishChurch.lng,
            voiceasset: () => { return TEMP_VOICE }
        },
    ]
}
export default BisitaIglesia;
