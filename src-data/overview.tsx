/*
    Contains text information and image path that is seen in the overview tab.
    The purpose of this file is to reduce that chances to edit the actual component source code when a typo to be fixed.
    It also makes this app a template, which is readily available for changing the contents 
*/

import santarosa_plaza from './map/plaza';
import { ImageSourcePropType } from 'react-native'
import { Map } from './map/!MapInterface'

interface OverviewDataInterface {
    headingImage            :ImageSourcePropType;
    featuredMultiviewText   :string;
    featureMultiView        :Array<featuredMultiviewInterface>;
    paragraphs              :Array<paragraphsInterface>;
}
export interface featuredMultiviewInterface {
    title       :string;
    image       :ImageSourcePropType;
    jsonmap     :Map;
};
export interface paragraphsInterface {
    title       :string;
    text        :string;
}

const overviewdata :OverviewDataInterface = {
    headingImage: require('../assets/santarosa/arch.png'),
    featuredMultiviewText: "Featured \"Multi-view\" in Santa Rosa",
    featureMultiView: [
        {
            title: "Santa Rosa Plaza",
            image:  require('../assets/santarosa/arch.png'),
            jsonmap: santarosa_plaza,
        },
        {
            title: "The Arch",
            image: require('../assets/santarosa/arch.png'),
            jsonmap: santarosa_plaza,
        },
    ],
    paragraphs: [
        {
            title: "Santa Rosa Overview",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatibus atque, non quod autem ipsum facilis, aut voluptas nihil cum laudantium maxime nulla saepe ex corrupti sunt necessitatibus fugiat nisi temporibus, explicabo commodi est aspernatur? Officia aut unde natus impedit distinctio autem quidem id omnis velit aspernatur necessitatibus dolores, dicta reiciendis sit ratione culpa obcaecati iste dolore vitae reprehenderit?"
        },
        {
            title: "History",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolores voluptatibus atque, non quod autem ipsum facilis, aut voluptas nihil cum laudantium maxime nulla saepe ex corrupti sunt necessitatibus fugiat nisi temporibus, explicabo commodi est aspernatur? Officia aut unde natus impedit distinctio autem quidem id omnis velit aspernatur necessitatibus dolores, dicta reiciendis sit ratione culpa obcaecati iste dolore vitae reprehenderit?"
        }
    ]
};
export default overviewdata;
