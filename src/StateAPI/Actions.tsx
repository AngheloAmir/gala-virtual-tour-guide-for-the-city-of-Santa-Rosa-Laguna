/*
    Contains function that that change the app state
*/

import { UserInfo, actionType, ActionInterface } from './Interfaces';

export function updateInfo(info :UserInfo) :ActionInterface {
    return {
        type: actionType.setUserInfo, payload: info
    }
}

import { StoryContent } from '../../database/!interfaces/StoryContent';
export function setGuideInfo(guidedata :StoryContent) :ActionInterface {
    return {
        type: actionType.setguideinfo, payload: guidedata
    }
}
