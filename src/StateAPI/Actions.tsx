/*
    Contains function that that change the app state
*/

import { actionType, ActionInterface } from './Interfaces';

export function updateInfo(name :string, about :string, avatar :number) :ActionInterface {
    return {
        type: actionType.updateinfo, payload: { name, about, avatar }
    }
}

import { StoryContent } from '../../database/!interfaces/StoryContent';
export function setGuideInfo(guidedata :StoryContent) :ActionInterface {
    return {
        type: actionType.setguideinfo, payload: guidedata
    }
}
