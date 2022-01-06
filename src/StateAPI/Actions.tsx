/*
    Contains function that that change the app state
*/

import { UserInfo, actionType, ActionInterface } from './Interfaces';

export function updateInfo(info :UserInfo) :ActionInterface {
    return {
        type: actionType.setUserInfo, payload: info
    }
}

export function setIsHideBottomTabs( isHidden :boolean ) :ActionInterface {
    return {
        type: actionType.setIsHideBottomTabs, payload: isHidden
    }
}

export function setGuideLink( link :string ) :ActionInterface {
    return {
        type: actionType.setguidelink, payload: link
    }
}

import { StoryContent } from '../../database/!interfaces/StoryContent';
export function setGuideInfo(guidedata :StoryContent) :ActionInterface {
    return {
        type: actionType.setguideinfo, payload: guidedata
    }
}
