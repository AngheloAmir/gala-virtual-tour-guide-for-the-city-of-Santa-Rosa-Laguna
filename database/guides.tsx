/*
    Defines the list of guides that will be availabe in the Home Screen > Guides
    This file is not optional
*/
import { GuideData }    from './!interfaces/GuideData';

import GuideToSantaRosa from './guides/guidetosantarosa';
import VisitingGuide    from './guides/visitingguide';
import JourneyGuide     from './guides/journeyguide';
import JeepneyRoutes    from './guides/jeepneyroutes';

const guidedata :GuideData = {
    title: 'Guides that help your adventure',
    guidelist: [
        {
            title: 'Visiting Guide',
            description: 'Regulations and safety you should know when before visiting.',
            icon: require('./guides/assets/icons/list.png'),
            guidedata: () => VisitingGuide,
        },
        {
            title: 'Public transport',
            description: 'Public transport route that you may take to get into Santa Rosa.',
            icon: require('./guides/assets/icons/bus.png'),
            guidedata: () => GuideToSantaRosa,
        },
        {
            title: 'Journey Guide',
            description: 'Your journey guide to the tourist places in Santa Rosa.',
            icon: require('./guides/assets/icons/globe.png'),
            guidedata: () => JourneyGuide,
        },
        {
            title: 'Jeepney routes',
            description: 'Jeepney routes and path.',
            icon: require('./guides/assets/icons/building.png'),
            guidedata: () => JeepneyRoutes,
        },
    ]
}
export default guidedata;
