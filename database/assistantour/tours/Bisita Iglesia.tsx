import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';

const ChairofStPeterParishChurch        = require('../../places/Chair of St. Peter Parish Church.json');
const SantaRosaDeLimaParishChurch       = require('../../places/Santa Rosa De Lima Parish Church.json');
const ChairOfStPeterSpeech              = require('../../../assets/santarosa/speech/Chair of St. Peter Parish Church.mp3');
const DelimaParishSpeech                = require('../../../assets/santarosa/speech/Delima Parish Church.mp3');

const BisitaIglesia :GalaSelfGuidedTour = {
    name:               'Bisita Iglesia',
    description:        'Visit Catholic churches',
    longdescription:    'Here are the churches that you for Holy Week for religious reasons? Here are the churches that you may visit in Santa Rosa. However, due to the rising Covid-19 in Laguna, these churches are likely to be close. These were opened back then in 2020 December at 30% capacity.',
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
            voiceasset: () => { return DelimaParishSpeech }
        },
        {
            name:           'Chair of St. Peter Church Parish Church',
            address:        ChairofStPeterParishChurch.address,
            description:    ChairofStPeterParishChurch.description,
            lat:            ChairofStPeterParishChurch.lat,
            lng:            ChairofStPeterParishChurch.lng,
            voiceasset: () => { return ChairOfStPeterSpeech }
        },
    ]
}
export default BisitaIglesia;
