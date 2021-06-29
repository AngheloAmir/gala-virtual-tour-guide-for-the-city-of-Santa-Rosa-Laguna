/*

*/

import { ImageSourcePropType } from 'react-native';
import { GuideInterface } from './guides/!GuideInterface';

interface GuideDataInterface {
    title       :string;
    guidelist   :Array<GuideListInterface>;
}
export interface GuideListInterface {
    title       :string;
    description :string;
    icon        :ImageSourcePropType;
    guidedata   :() => GuideInterface; //return an object so its content will be loaded only when needed
}

import guidetosantarosa from './guides/guidetosantarosa';
import jeepneyguide from './guides/jeepneyroutes';
import journeyguide from './guides/journeyguide';
import traffiguide from './guides/trafficguide';

const guidedata :GuideDataInterface = {
    title: 'Guides that help your adventure',
    guidelist: [
        {
            title: 'Guide To Santa Rosa City',
            description: 'This guide text contains instruction how they going to visit the Santa Rosa during these pandemic which includes laws,... How to go to the city from metro manila',
            icon: require('../assets/icons/book.png'),
            guidedata: () => guidetosantarosa,
        },
        {
            title: 'Journey Guide',
            description: 'Contains the places that should be visited and how to get there',
            icon: require('../assets/icons/compass.png'),
            guidedata: () => journeyguide,
        },
        {
            title: 'Jeepney routes and terminal',
            description: 'List of the Jeepney, Bus and tricicle terminals and there location',
            icon: require('../assets/icons/bus.png'),
            guidedata: () => jeepneyguide,
        },
        {
            title: 'Traffic Guide',
            description: 'Contains information where and when the time the traffic becomes heavy',
            icon: require('../assets/icons/buses.png'),
            guidedata: () => traffiguide,
        },
    ]
}
export default guidedata;
