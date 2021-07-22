/*
    Define the structure of a guide.
*/

import { ImageSourcePropType } from 'react-native';

export interface GuideContent {
    title           :string;
    date            :string;
    headerImage     :ImageSourcePropType | any;
    contents        :Array<GuideParagraphContent>;
}

export interface GuideParagraphContent {
    headingText?    :string;
    image?          :ImageSourcePropType;
    paragraph?      :string;
    type?           : 'accordionList' | 'attribution';
    link?           :string;
    linkText?       :string;
    links?          :{ //which appear only in an image
        link :string;
        text :string; 
    };
    data?           :GuideParagraphContent | any; //the content of data is based on the type
}