/*
    Load the assets and text from the json file "home.json" in the database folder
*/
import ASSETS from '../../../../database/assets';
import { HomeTabInterface, Slides } from '../../../../database/!interfaces/HomeInterface';
import { Stories } from '../../../../database/!interfaces/HomeInterface';
import { DestinationLocation } from '../../../../database/!interfaces/GalaSelfGuidedTour';

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
        //@ts-ignore
        image: ASSETS[item.image], place: item.place, isWhite: item.isWhite
    }
});

export const allplaces :Array<DestinationLocation> = homejson.allplaces.map((item :string) => {
    //@ts-ignore
    return ASSETS[item];
}) 
