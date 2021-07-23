/*
*/
import { ImageSourcePropType } from 'react-native';

export interface HomeTabInterface {
    externalLinkText:string;
    cityMapText     :string;
    aboutcity       :string;
    cityCovidNews   :string;
    headingSlides   :Array<Slides>;
    offlineStories  :Array<Stories>;
}

export interface Slides {
    image       :ImageSourcePropType;
    place       :string;
    isWhite?    :boolean;
}

export interface Stories {
    title   :string;
    date    :string;
    text    :string;
}