/*
    Contains function that that change the app state
*/

import { actionType, ActionInterface } from './Interfaces';

export function updateInfo(name :string, about :string, avatar :number) :ActionInterface {
    return {
        type: actionType.updateinfo, payload: { name, about, avatar }
    }
}

import { GuideContent } from '../../database/!interfaces/GuideContent';
export function setGuideInfo(guidedata :GuideContent) :ActionInterface {
    return {
        type: actionType.setguideinfo, payload: guidedata
    }
}
