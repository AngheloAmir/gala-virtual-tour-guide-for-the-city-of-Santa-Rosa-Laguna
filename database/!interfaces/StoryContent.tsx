/*
    Defines the stucture of how the story content. The structure is same to
    utilities/StoryViewer.tsx
*/
import { ImageSourcePropType } from 'react-native';

export interface  StoryContent {
    title?          :string;
    date?           :string;
    headerImage?    :ImageSourcePropType | any;
    imagecredits?   :string;
    contents?       :Array<StoryParagraph>;
    accordion?      :Array<StoryParagraph>;
    references      :Array<{
        linkname    :string;
        link        :string;
    }>;
}

export interface StoryParagraph {
    headingText?    :string;
    image?          :ImageSourcePropType;
    paragraph?      :string;
    link?           :string; //which appear in the end of the paragraph
    linkText?       :string;
    links?          :{ //which appear only in an image
        link :string;
        text :string; 
    };
}