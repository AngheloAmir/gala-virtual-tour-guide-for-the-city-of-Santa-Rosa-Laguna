import { GalaSelfGuidedTour } from '../../!interfaces/GalaSelfGuidedTour';

//Text Description
const SantaRosaDeLimaParishChurch       = require('../../places/Santa Rosa De Lima Parish Church.json');
const CuarteldeSantoDomingo             = require('../../places/Cuartel de Santo Domingo.json');
const GonzalesStatue                    = require('../../places/Gonzalez Statue.json');
const CityPlaza                         = require('../../places/City Plaza.json');
const SantaRosaArch                     = require('../../places/Arch.json');
const CasaGonzalez                      = require('../../places/Casa Gonzalez.json');
const CasaZavalla                       = require('../../places/Casa Zavalla.json');
const ZavallaHouse                      = require('../../places/Zavalla House.json');
const ArambuloHouse                     = require('../../places/Arambulo House.json');
const FormerGomezResidence              = require('../../places/Former Gomez Residence.json');
const TiongcoAncestralHouse             = require('../../places/Tiongco Ancestral House.json');
const MuseoNgSantaRosa                  = require('../../places/Museo ng Santa Rosa.json');

const TEMP_VOICE                        = require('../../../assets/santarosa/speech/sample.mp3');
const GonzalesStatueSpeech              = require('../../../assets/santarosa/speech/Gonzalez Statue.mp3');
const ArchSpeech                        = require('../../../assets/santarosa/speech/Arch.mp3');
const DelimaParishSpeech                = require('../../../assets/santarosa/speech/Delima Parish Church.mp3');
const MuseoNgSantaRosaSpeech            = require('../../../assets/santarosa/speech/Museo ng Santa Rosa.mp3');
const PlazaSpeech                       = require('../../../assets/santarosa/speech/Plaza.mp3');
const CuarteldeSantoDomingoSpeech       = require('../../../assets/santarosa/speech/Cuartel de Santo Domingo.mp3');
const CasaGonzalezSpeech                = require('../../../assets/santarosa/speech/Case Gonzalez.mp3');

export const GlimpseOfHistory :GalaSelfGuidedTour = {
    name:            'Glimpse of History',
    description:     'Take look to its history',
    longdescription: 'See a glimpse of the historical past and places of Santa Rosa city. Most of these sites are outdoor tourist attractions. However, Cuartel de Santo Domingo is used by the Philipine National Police and may not be visited. Take precautions when on the road, like avoid looking on your phone while walking.',
    destinations: [
        {
            from: 'user',
            to: {
                lat: 14.313727, lng: 121.112185,
                name: 'Santa Rosa Bayan',
                commute: 'Ride a jeep with a sign "Bayan" or "Tagapo". The common fare rate is P10',
            }
        },
    ],
    pointOfInterests: [
        { ...CityPlaza,                         voiceasset: () => { return PlazaSpeech } },
        { ...SantaRosaDeLimaParishChurch,       voiceasset: () => { return DelimaParishSpeech } },
        { ...GonzalesStatue,                    voiceasset: () => { return GonzalesStatueSpeech } },
        { ...SantaRosaArch,                     voiceasset: () => { return ArchSpeech } },
        { ...CasaGonzalez,                      voiceasset: () => { return CasaGonzalezSpeech } },
        { ...CasaZavalla,                       },
        { ...ZavallaHouse,                      },
        { ...ArambuloHouse,                     },
        { ...FormerGomezResidence,              },
        { ...TiongcoAncestralHouse,             },
        { ...MuseoNgSantaRosa,                  voiceasset: () => { return MuseoNgSantaRosaSpeech } },
        { ...CuarteldeSantoDomingo,             voiceasset: () => { return CuarteldeSantoDomingoSpeech } },
        {
            name: 'Lacerna Ancestral House',
            description: 'Now the Union bank',
            address: 'Zavalla St, Santa Rosa, Calabarzon',
            lat: 14.312893,
            lng: 121.112359
        },
        {
            name: 'Lijauco – Zavalla Ancestral House',
            description: 'Ancestral house of Lijauco – Zavalla',
            address: 'Rizal Blvd, Santa Rosa, Calabarzon',
            lat: 14.312555,
            lng: 121.112184
        },
    ]
}
export default GlimpseOfHistory;
