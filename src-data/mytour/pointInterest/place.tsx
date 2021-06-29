import { pointOfInterestInterface } from '../virtualmap';
import ExpressWayInfo   from '../../placeinfo/info/ExpressWay';
import PlazaInfo        from '../../placeinfo/place/plaza';

const data :Array<pointOfInterestInterface> = [
    {
        x: 898, y: 465, type: 'spot',
        image: require('../../../assets/santarosa/map icon/plaza.jpg'),
        name:           'Santa Rosa Plaza',
        description:    'The local city town square. It contains a stage and monunent of Dr. Jose Rizal. ',
        address:        'Rizal Blvd, Santa Rosa, Laguna',
        latitude:       14.314083,
        longitude:      121.112111,
        streetviewlink: 'https://www.instantstreetview.com/@14.31415,121.112388,263.16h,-8.12p,0z,Y7IyeToX30rPA016e1Rj9Q',
        webviewlink:    '',
        information:    () => PlazaInfo(),
    },
    {
        x: 720, y: 1070, type: 'spot',
        image: require('../../../assets/icons/book.png'),
        name:           'Enchanted Kingdom Entrance',
        description:    'Popular theme park in Santa Rosa city',
        address:        'Laguna Blvd, Don Jose, Santa Rosa, Laguna',
        latitude:       14.281997,
        longitude:      121.097718,
        streetviewlink: 'https://www.instantstreetview.com/@14.281902,121.097739,284.81h,-21.28p,0z,9LQzLzXIRxqCVvSN2up4KQ',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 230, y: 1830, type: 'spot',
        image: require('../../../assets/icons/book.png'),
        name:           'Nuvali Park',
        description:    'Nuvali Park',
        address:        'One Evotech, Nuvali Boulevard, Don Jose, Santa Rosa',
        latitude:       14.239906,
        longitude:      121.059477,
        streetviewlink: 'https://www.instantstreetview.com/@14.239906,121.059477,40.97h,-23.2p,0z,CAoSLEFGMVFpcFBvdmRkZDE1NWpUNFJRRDhRNGNnS3NXd2FJSXFDWGx6WWpzMDhK',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
    {
        x: 240, y: 1880, type: 'spot',
        image: require('../../../assets/icons/book.png'),
        name:           'Lake side Nuvali',
        description:    'The lake view in Nuvali. Take a look at the street view',
        address:        'Don Jose, Santa Rosa, Laguna',
        latitude:       14.237234,
        longitude:      121.059677,
        streetviewlink: 'https://www.instantstreetview.com/@14.237234,121.059677,210.91h,-14.24p,0.09z,CAoSLEFGMVFpcE5wZV9LWkFOaUJQbVZYTUVpRWNpMkpJNTJUaFBZcllzUF9NRFB2',
        webviewlink:    '',
        information:    () => ExpressWayInfo(),
    },
];
export default data;