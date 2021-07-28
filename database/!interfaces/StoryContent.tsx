/*
    Defines the stucture of how the story content. The structure is same to
    utilities/StoryViewer.tsx
*/
import { ImageSourcePropType } from 'react-native';

export interface  StoryContent {
    title?          :string;
    date?           :string;
    headerImage?    :ImageSourcePropType | any;
    contents?       :Array<StoryParagraph>;
    accordion?      :Array<StoryParagraph>;
}

export interface StoryParagraph {
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