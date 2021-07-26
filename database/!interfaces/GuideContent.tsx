/*
    Define the structure of a guide.
*/
import { ImageSourcePropType } from 'react-native';

export interface GuideContent {
    title           :string;
    date            :string;
    headerImage     :ImageSourcePropType | any;
    contents        :Array<GuideParagraphContent>;
    accordion       :Array<GuideParagraphContent>;
}

export interface GuideParagraphContent {
    headingText?    :string;
    image?          :ImageSourcePropType;
    paragraph?      :string;
    link?           :string;
    linkText?       :string;
    links?          :{ //which appear only in an image
        link :string;
        text :string; 
    };
}