import { pointOfInterestInterface } from '../virtualmap';
import ExpressWayInfo       from '../../placeinfo/info/ExpressWay';
import TrafficAdvisory1     from '../../placeinfo/info/TrafficAdvisory1';
import SantaRosaBinan       from '../../placeinfo/info/Santarosa-binan';

export const infoIcon = require('../../../assets/icons/book.png');

const data :Array<pointOfInterestInterface> = [
    {
        x: 710, y: 350, type: 'info',
        image:          require('../../../assets/santarosa/map icon/santa rosa binan.jpg'),
        name:           'Santa Rosa - Binan',
        description:    'The boundary between the Santa Rosa City and Binan City.',
        address:        '32 Rizal Blvd, Santa Rosa, Laguna',
        latitude:       14.321692,
        longitude:      121.096832,
        streetviewlink: 'https://www.instantstreetview.com/@14.321692,121.096832,150.64h,-5.46p,0z,8UXM5RUS5HMCerR6pAXMRA',
        webviewlink:    '',
        information:    () => SantaRosaBinan(),
    },
    {
        x: 825, y: 810, type: 'info',
        image: infoIcon,
        name:           'Road Advisory',
        description:    'Some roads here are "one way". Please follow the direction of other vehicles',
        address:        'AH26, Santa Rosa, Calabarzon',
        latitude:       14.296548,
        longitude:      121.105672,
        streetviewlink: 'https://www.instantstreetview.com/@14.296548,121.105672,11.71h,-23.7p,0z,HvJqqgwtuR1eBr5g8aizCg',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 725, y: 910, type: 'info',
        image: infoIcon,
        name:           'Traffic Advisory',
        description:    'Traffic in this road can be heavy. The travell may take upto an hour',
        address:        'Balibago Rd, Santa Rosa, Calabarzon',
        latitude:       14.291391,
        longitude:      121.098331,
        streetviewlink: 'https://www.instantstreetview.com/@14.291391,121.098331,270.65h,-23.67p,0z,FDGvrEktVkDbARxNTkvp3g',
        webviewlink:    '',
        information:    () => TrafficAdvisory1(),
    },
    {
        x: 630, y: 1010, type: 'info',
        image: infoIcon,
        name:           'Santa Rosa Toll Plaza Northbound',
        description:    'Entrance or exit from express way taking northbound direction',
        address:        'Balibago, Santa Rosa, Laguna',
        latitude:       14.285161,
        longitude:      121.089917,
        streetviewlink: 'https://www.instantstreetview.com/@14.285161,121.089917,31.83h,-14.8p,0z,Crdr2Ur9urNjWi1v-XkL4Q',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 585, y: 1010, type: 'info',
        image: infoIcon,
        name:           'Santa Rosa Toll Plaza Southbound (Autosweep)',
        description:    'Entrance or exit from express way taking southbound direction',
        address:        'Pulong Santa Cruz, Santa Rosa, Laguna',
        latitude:       14.284895,
        longitude:      121.087119,
        streetviewlink: 'https://www.instantstreetview.com/@14.284895,121.087119,134.78h,-24.46p,0z,U7dPUH3OuSvxttD2rPm1gA',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 75, y: 2090, type: 'info',
        image:          infoIcon,
        name:           'Santa Rosa - Tagatay',
        description:    'The Boundary between the Santa Rosa City and Tagatay City',
        address:        'Santa Rosa - Tagaytay Rd, Calabarzon',
        latitude:       14.226708,
        longitude:      121.046797,
        streetviewlink: 'https://www.instantstreetview.com/@14.226939,121.047209,58.51h,-4p,0z,psqq6ZwseLHir5myemk-8A',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 170, y: 2150, type: 'info',
        image:          require('../../../assets/icons/book.png'),
        name:           'Marcos Twin Mansion',
        description:    'View it in the street view. Note it is outside the city',
        address:        'Cabuyao, Laguna (the marker placement is incorrect)',
        latitude:       14.203614,
        longitude:      121.041665,
        streetviewlink: 'https://www.instantstreetview.com/@14.203614,121.041665,67.66h,-16.89p,0z,oevGf4-G7Ui2N6iA3tZZBw',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
];
export default data;

/*

{
        x: 0, y: 0, type: 'info',
        image:          infoIcon,
        name:           '?????',
        description:    '????',
        address:        '????',
        latitude:       14.00000,
        longitude:      121.000000,
        streetviewlink: 'https://www.instantstreetview.com',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
*/