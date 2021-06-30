/*
    List of establishments in Santa Rosa
*/
import { Establishment } from '../!interfaces/Establishment';

export interface EstablishmentCategory {
    type    :'Food' | 'Hotel' | 'Gas' | 'Mall' | 'Store' | 'Hospital' | 'Bank' | 'Police' | 'SLEX';
    items   :Array<Establishment>;
}

export const establishmesnts :Array<EstablishmentCategory> = [
    {
        type: 'Gas',
        items: [
            { name: 'Caltex Tagapo',    lat: 14.321435, lng: 121.097257 },
            { name: 'Flying V',         lat: 14.316412, lng: 121.108604 },
            { name: 'Uno Fuel',         lat: 14.305362, lng: 121.102529 },
            { name: 'Petron Station',   lat: 14.310465, lng: 121.100772 },
            { name: 'Fuel Express',     lat: 14.303213, lng: 121.109037 },
            { name: 'Uno Fuel',         lat: 14.293337, lng: 121.100476 },
            { name: 'Shell',            lat: 14.287083, lng: 121.090986 },
            { name: 'Caltex',           lat: 14.288732, lng: 121.094433 },
            { name: 'Shell',            lat: 14.277387, lng: 121.083362 },
            { name: 'Caltex',           lat: 14.272216, lng: 121.08143 },
            { name: 'Shell',            lat: 14.3187,   lng: 121.097789 },
            { name: 'Petron',           lat: 14.263618, lng: 121.074365 },
        ]
    },
    {
        type: 'Hospital',
        items: [
            { name: 'Marian Hospital',      lat: 14.320071, lng: 121.100051 },
            { name: 'City Medic',           lat: 14.316642, lng: 121.108027 },
            { name: 'Balibago Polyclinic',  lat: 14.297436, lng: 121.106647 },
            { name: 'New Sinai MDI',        lat: 14.317579, lng: 121.098223 },
        ]
    },
    {
        type: 'Store',
        items: [
            { name: '7/11 Tagapo',      lat: 14.317579, lng: 121.105584 },
            { name: 'Pure Gold Tagapo', lat: 14.315952, lng: 121.109717 },
            { name: 'Mini Stop',        lat: 14.312913, lng: 121.112207 },
            { name: '7/11 Labas',       lat: 14.306403, lng: 121.110351 },
            { name: 'Save N Save',      lat: 14.300959, lng: 121.107676 },
            { name: 'Mercury Drug',     lat: 14.29389,  lng: 121.104617 },
            { name: '7/11 Balibago',    lat: 14.292715, lng: 121.099812 },
            { name: 'Wilcom Depot',     lat: 14.267594, lng: 121.078644 },
        ]
    },
    {
        type: 'Bank',
        items: [
            { name: 'Land Bank ATM',  lat: 14.314729, lng: 121.112442 },
            { name: 'Maybank',        lat: 14.313729, lng: 121.112292 },
            { name: 'Metro Bank',     lat: 14.298118, lng: 121.105135 },
            { name: 'PS Bank',        lat: 14.263618, lng: 121.074365 },
        ]
    },
    {
        type: 'Food',
        items: [
            { name: 'Jollibe Bayan',  lat: 14.312913, lng: 121.112207 },
            { name: 'Jollibe',        lat: 14.29389,  lng: 121.104617 },
        ]
    },
    {
        type: 'Hotel',
        items: [
            { name: 'Lag Inn & Apartelle',  lat: 14.306675, lng: 121.102093 },
            { name: 'Mariposa Budget Hotel',lat: 14.3182,   lng: 121.097965 },
            { name: 'Candy Motel',          lat: 14.307279, lng: 121.101877 },
            { name: 'Seda Nuvali',          lat: 14.23901,  lng: 121.06037 },
            { name: 'Sogo Santa Rosa',      lat: 14.267594, lng: 121.078644 },
            { name: 'Asiantel Econo',       lat: 14.26532,  lng: 121.076028 },
        ]
    },
    {
        type: 'Mall',
        items: [
            { name: 'Target Mall',  lat: 14.293735, lng: 121.103894 },
            { name: 'Walter Mark',  lat: 14.288732, lng: 121.094433 },
            { name: 'SM Mall',      lat: 14.314309, lng: 121.098955 },
            { name: 'Robinson Mall',lat: 14.314309, lng: 121.098955 },
        ]
    },
    {
        type: 'Police',
        items: [
            { name: 'Police Station',lat: 14.309519, lng: 121.101071 },
        ]
    },
    {
        type: 'SLEX',
        items: [
            { name: 'SLEX North bound', lat: 14.285161, lng: 121.089915 },
            { name: 'SLEX South bound', lat: 14.284827, lng: 121.087458 },
        ]
    }
];
