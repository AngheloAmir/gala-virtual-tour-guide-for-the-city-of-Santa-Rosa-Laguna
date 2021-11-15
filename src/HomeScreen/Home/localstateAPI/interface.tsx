/*
*/
import { StoryContent } from "../../../../database/!interfaces/StoryContent";

export interface LocalStateAPI {
    localState     :HomeStateInterface;
    localDispatch  :React.Dispatch<any>;
}

export interface HomeStateInterface {
    attributionDialogShow       :boolean;
    mapMarkerId                 :number; //an index equal to database/places/allplaces array
    placeInfoShow               :boolean;
    isMarkerShow                :boolean;
    isSearchBarShow             :boolean;
    webviewlink                 :string;
    isInstantSVCreadit          :number;
    storyToRead?                :StoryContent;

    mapCenterPosition           :{
        lat:    number;
        lang:   number;
    },
    zoomlevel                   :number;
}

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export enum actionType {
    setIsDialogAttributionShow,
    setMapMarkerId,
    setPlaceInfoShow,
    setWebviewLink,
    setDialogOpenStreetMapProviderCreadit,
    setStory,
    flipSearchButton,
    offSearchBar,

    setMapCenter,
    setZoomlevel,
}