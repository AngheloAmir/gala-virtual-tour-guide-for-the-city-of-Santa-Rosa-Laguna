/*
    Load the assets and text from the json file "home.json" in the database folder
*/
//@ts-nocheck
import ASSETS                       from '../../../../database/assets';
import { HomeTabInterface, Slides } from '../../../../database/!interfaces/HomeInterface';
import { Stories }                  from '../../../../database/!interfaces/HomeInterface';
import { StoryContent }             from '../../../../database/!interfaces/StoryContent';
import { DestinationLocation }      from '../../../../database/!interfaces/GalaSelfGuidedTour';

interface ButtonsText {
    externalLinkText    :string;
    cityMapText         :string;
    aboutcity           :string;
    cityCovidNews       :string;
}

interface Websites {
    morearticles    :string;
    covidcase       :string;
    officialsite    :string;
    githubsite      :string;
}

interface SlideAnimation {
    interval    :number;
    transistion :number;
}

export const homejson :HomeTabInterface = require('../../../../database/home.json');
export const slideanimation     :SlideAnimation = homejson.slidesAnimation;
export const offlinestories     :Array<Stories> = homejson.offlineStories;
export const website            :Websites = homejson.websites;

export const buttonstext        :ButtonsText = {
    externalLinkText:   homejson.externalLinkText,
    cityMapText:        homejson.cityMapText,
    aboutcity:          homejson.aboutcity,
    cityCovidNews:      homejson.cityCovidNews,
};

export const headingslides :Array<Slides> = homejson.headingSlides.map((item :Slides) => {
    return {
        image: ASSETS[item.image], place: item.place, isWhite: item.isWhite
    }
});

//Defines all places that are found in home.json
export const allplaces :Array<DestinationLocation> = homejson.allplaces.map((item :string) => {
    return ASSETS[item];
}) 

//Translate the json only string content to an object to get about the city 
export const aboutTheCity :StoryContent = {
    ...ASSETS[homejson.aboutthecityjson],
    headerImage: ASSETS[ ASSETS[homejson.aboutthecityjson].headerImage ],
    contents: ASSETS[homejson.aboutthecityjson].contents.map((item) => {
        return {
            ...item,
            image: ASSETS[ item.image ],
    }})
}

export const allstories :Array<StoryContent> = homejson.offlineStories.map((item) => {
    const storyjson = ASSETS[ item.storyjson ];
    return {
        ...storyjson,
        headerImage: ASSETS[ storyjson.headerImage ],
        contents: storyjson.contents.map((contentitem) => {
            return {
                ...contentitem,
                image: ASSETS[ contentitem.image ],
        }})
    }
});
