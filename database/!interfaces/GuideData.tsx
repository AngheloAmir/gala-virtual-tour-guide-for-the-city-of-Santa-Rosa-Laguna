/*
    Define the interface that will be the structure of an object for
    the HomeScreen > Guide List
*/
import { ImageSourcePropType } from 'react-native';

export interface GuideData {
    title       :string;
    guidelist   :Array<GuideItem>;
}

export interface GuideItem {
    title       :string;
    description :string;
    icon        :ImageSourcePropType;
    guidedata   :string;
}
