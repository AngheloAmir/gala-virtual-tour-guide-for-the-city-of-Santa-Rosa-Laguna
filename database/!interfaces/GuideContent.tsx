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
    link?           :string;
    linkText?       :string; //the text of the link
    type?           : 'accordionList';
    data?           :GuideParagraphContent | any; //the content of data is based on the type
}