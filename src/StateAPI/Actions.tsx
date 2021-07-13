/*
    Contains function that that change the app state
*/

import { actionType } from './ActionType';

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export function setCurrentScreen(screenName :string) :ActionInterface {
    return {
        type: actionType.setscreen, payload: screenName
    }
}

export function updateInfo(name :string, about :string, avatar :number) {
    return {
        type: actionType.updateinfo, payload: { name, about, avatar }
    }
}

/*
export function setVisiblePoint(newpoint :any) {
    return {
        type: actionType.setvisiblepoint, payload: newpoint
    }
}
*/

export function setstreetviewlink(link :string) {
    return {
        type: actionType.setstreetviewlink, payload: link
    }
}

import { GuideContent } from '../../database/!interfaces/GuideContent';
export function setGuideInfo(guidedata :GuideContent) {
    return {
        type: actionType.setguideinfo, payload: guidedata
    }
}

import { PlaceInformation } from '../../database/!interfaces/PlaceInformation';
export function setMarkerDescription(marker :PlaceInformation)  {
    return {
        type: actionType.setmarkerdescription, payload: marker
    }
}
