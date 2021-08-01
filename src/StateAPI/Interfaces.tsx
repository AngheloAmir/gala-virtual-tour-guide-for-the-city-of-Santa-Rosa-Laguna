/*
    Define all of the interface used in the global State API
*/
import { StoryContent } from '../../database/!interfaces/StoryContent';

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export enum actionType {
    setUserInfo,
    setguideinfo,
}

export interface UserInfo {
    name        :string;
    description :string;
    avatar      :number;
    uid         :string;
    registered  :boolean;
}

export interface StateInterface {
    user            :UserInfo,

    features :{
        guideInfo? :StoryContent;
    };
}
