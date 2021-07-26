/*
    Defines the stucture of how the story content. The data used this interface will appear when
    the user tap a story (read more) while in the home tab
*/
import { ImageSourcePropType } from 'react-native';

export interface  StoryContent {
    title           :string;
    date            :string;
    headerImage     :ImageSourcePropType | any;
    contents        :Array<StoryParagraph>;
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