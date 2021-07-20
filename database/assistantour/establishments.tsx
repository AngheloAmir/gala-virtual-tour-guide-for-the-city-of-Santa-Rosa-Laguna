/*
    List of establishments in Santa Rosa
*/
import { Establishment } from '../!interfaces/Establishment';

export interface EstablishmentCategory {
    category :string;
    items    :Array<Establishment>;
}

export const establishments :Array<EstablishmentCategory> = [
    {
        category: 'Gas Station',
        items: [
            { name: 'Caltex Near Enchanted K.', lat: 14.288732, lng: 121.094433 },
            { name: 'Caltex Pulong Santa Cruz', lat: 14.272216, lng: 121.08143 },
            { name: 'Caltex Tagapo',            lat: 14.321435, lng: 121.097257 },
            { name: 'Flying V Tagapo',          lat: 14.316412, lng: 121.108604 },
            { name: 'Fuel Express Macabling',   lat: 14.309238, lng: 121.101175 },
            { name: 'Fuel Express Pooc',        lat: 14.303213, lng: 121.109037 },
            { name: 'Petron Bel Air',           lat: 14.263618, lng: 121.074365 },
            { name: 'Petron Station Near SM',   lat: 14.310465, lng: 121.100772 },
            { name: 'Shell Balibago',           lat: 14.294131, lng: 121.106508 },
            { name: 'Shell Near SLEX',          lat: 14.287083, lng: 121.090986 },
            { name: 'Shell Pulong Santa Cruz',  lat: 14.277387, lng: 121.083362 },
            { name: 'Uno Fuel Balibago',        lat: 14.293337, lng: 121.100476 },
            { name: 'Uno Fuel Macabling',       lat: 14.305362, lng: 121.102529 },
            { name: 'Shell Near Robinson Mall', lat: 14.3187,   lng: 121.097789 },
        ]
    },
    {
        category: 'Stores',
        items: [
            { name: '7/11 Balibago',    lat: 14.292715, lng: 121.099812 },
            { name: '7/11 Bayan',       lat: 14.314853, lng: 121.112217 },
            { name: '7/11 Labas',       lat: 14.306403, lng: 121.110351 },
            { name: '7/11 Tagapo',      lat: 14.317579, lng: 121.105584 },
            { name: 'Mercury Drug',     lat: 14.29389,  lng: 121.104617 },
            { name: 'Mini Stop',        lat: 14.312913, lng: 121.112207 },
            { name: 'Pure Gold Tagapo', lat: 14.315952, lng: 121.109717 },
            { name: 'Save N Save',      lat: 14.300959, lng: 121.107676 },
            { name: 'Wilcom Depot',     lat: 14.267594, lng: 121.078644 },
        ]
    },
    {
        category: 'Fast Foods',
        items: [
            { name: 'Complex Fast Foods',   lat: 14.293596, lng: 121.103247 },
            { name: 'Cowking Bayan',        lat: 14.314906, lng: 121.112127 },
            { name: 'Jollibe Bayan',        lat: 14.312913, lng: 121.112207 },
            { name: 'Jollibe',              lat: 14.29389,  lng: 121.104617 },
        ]
    },
    {
        category: 'Hotels',
        items: [
            { name: 'Asiantel Econo',       lat: 14.26532,  lng: 121.076028 },
            { name: 'Candy Motel',          lat: 14.307279, lng: 121.101877 },
            { name: 'Golden Gate Inn',      lat: 14.320308, lng: 121.097216 },
            { name: 'Lag Inn & Apartelle',  lat: 14.306675, lng: 121.102093 },
            { name: 'Mariposa Budget Hotel',lat: 14.3182,   lng: 121.097965 },
            { name: 'Seda Nuvali',          lat: 14.23901,  lng: 121.06037 },
            { name: 'Sogo Santa Rosa',      lat: 14.267594, lng: 121.078644 },
        ]
    },
    {
        category: 'Shopping Malls',
        items: [
            { name: 'Ayala Mall Solenad',   lat: 14.23658,  lng: 121.056691 },
            { name: 'Robinson Mall',        lat: 14.314309, lng: 121.098955 },
            { name: 'SM Mall',              lat: 14.314309, lng: 121.098955 },
            { name: 'Target Mall',          lat: 14.293735, lng: 121.103894 },
            { name: 'Vista Mall',           lat: 14.243295, lng: 121.058006 },
            { name: 'Walter Mart',          lat: 14.288732, lng: 121.094433 },   
        ]
    },
    {
        category: 'Banks',
        items: [
            { name: 'Land Bank ATM',  lat: 14.314729, lng: 121.112442 },
            { name: 'Maybank',        lat: 14.313729, lng: 121.112292 },
            { name: 'Metro Bank',     lat: 14.298118, lng: 121.105135 },
            { name: 'PS Bank',        lat: 14.263618, lng: 121.074365 },
        ]
    },
    {
        category: 'Hospital',
        items: [
            { name: 'Balibago Polyclinic',  lat: 14.297436, lng: 121.106647 },
            { name: 'City Medic',           lat: 14.316642, lng: 121.108027 },
            { name: 'Marian Hospital',      lat: 14.320071, lng: 121.100051 },
            { name: 'New Sinai MDI',        lat: 14.317579, lng: 121.098223 },
        ]
    },
    {
        category: 'Police',
        items: [
            { name: 'Police Station',lat: 14.309519, lng: 121.101071 },
        ]
    },
    {
        category: 'SLEX',
        items: [
            { name: 'SLEX North bound', lat: 14.285161, lng: 121.089915 },
            { name: 'SLEX South bound', lat: 14.284827, lng: 121.087458 },
        ]
    }
];
