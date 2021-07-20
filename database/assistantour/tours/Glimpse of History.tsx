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

const TEMP_VOICE                        = require('../../../assets/speech/sample.mp3');

export const GlimpseOfHistory :GalaSelfGuidedTour = {
    name:            'Glimpse of History',
    description:     'Take look to its history',
    longdescription: 'See the glimpse of the past and historical places found that can be found in Santa Rosa City. Most of these historic buildings can be found in Santa Rosa Bayan except for Cuartel de Santo Domingo which resides near Nuvali and Tagaytay. All of the sites are outdoor tourist attractions, just be careful when on the road.',
    destinations: [
        {
            from: 'user',
            to: {
                lat: 14.313727, lng: 121.112185,
                name: 'Santa Rosa Bayan',
                commute: 'Ride a jeep with a sign "Bayan" or "Tagapo". The common fare rate is P10',
            }
        },
        {
            from: 'user',
            to: {
                lat: 14.231030, lng: 121.049858, 
                name: 'Cuartel de Santo Domingo',
                commute: CuarteldeSantoDomingo.commute,
            } 
        },
    ],
    pointOfInterests: [
        { ...CityPlaza,                         voiceasset: () => { return TEMP_VOICE } },
        { ...SantaRosaDeLimaParishChurch,       voiceasset: () => { return TEMP_VOICE } },
        { ...GonzalesStatue,                    voiceasset: () => { return TEMP_VOICE } },
        { ...SantaRosaArch,                     voiceasset: () => { return TEMP_VOICE } },
        { ...CasaGonzalez,                      voiceasset: () => { return TEMP_VOICE } },
        { ...CasaZavalla,                       voiceasset: () => { return TEMP_VOICE } },
        { ...ZavallaHouse,                      voiceasset: () => { return TEMP_VOICE } },
        { ...ArambuloHouse,                     voiceasset: () => { return TEMP_VOICE } },
        { ...FormerGomezResidence,              voiceasset: () => { return TEMP_VOICE } },
        { ...TiongcoAncestralHouse,             voiceasset: () => { return TEMP_VOICE } },
        { ...MuseoNgSantaRosa,                  voiceasset: () => { return TEMP_VOICE } },
        { ...CuarteldeSantoDomingo,             voiceasset: () => { return TEMP_VOICE } },
        {
            name: 'Lacerna Ancestral House',
            description: 'Now the Union bank',
            address: 'Zavalla St, Santa Rosa, Calabarzon',
            lat: 14.312893,
            lng: 121.112359
        },
        {
            name: 'Lijauco – Zavalla Ancestral House',
            description: 'adssada',
            address: 'Rizal Blvd, Santa Rosa, Calabarzon',
            lat: 14.312555,
            lng: 121.112184
        },
    ]
}
export default GlimpseOfHistory;
