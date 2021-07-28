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
    updateinfo,
    setguideinfo,
}

export interface StateInterface {
    user :{
        name        :string;
        about       :string;
        avatar      :number;
        signedin    :boolean;
        status      : 'Will visit' | 'visited' | 'Residence' | 'Guest';
    };
    features :{
        guideInfo? :StoryContent;
    };
}
