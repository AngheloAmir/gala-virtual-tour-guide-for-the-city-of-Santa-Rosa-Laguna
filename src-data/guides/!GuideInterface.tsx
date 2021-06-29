import { ImageSourcePropType } from 'react-native'

export interface GuideInterface {
    title           :string;
    headerImage     :ImageSourcePropType | any;
    contents        :Array<GuideContentsInterface>;
}

export interface GuideContentsInterface {
    headingText?   :string;
    paragraph?      :string;
}
