/*
    Defines that structure of the data that will appear in the Home screen > home tab
*/
import { ImageSourcePropType } from 'react-native';

export interface HomeTabInterface {
    externalLinkText:string;
    cityMapText     :string;
    aboutcity       :string;
    headingSlides   :Array<Slides>;
    offlineStories  :Array<Stories>;
    allplaces       :Array<string>;

    aboutthecityjson:string;
    externalinksjson:string;

    websites        :{
        morearticles :string;
        officialsite :string;
        githubsite   :string;
    };

    slidesAnimation :{
        interval    :number; //the time each frame last
        transistion :number; //fade transition speed
    };

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
    storyjson :string;
    link   :string;
}