/*
    Contains all of the interface (object type) defined in the 
    localstate api
*/

import { MapMarker, MapShape } from "expo-leaflet";

export interface LocalStateAPI {
    localState     :AssistantTourState;
    localDispatch  :React.Dispatch<any>;
}

export interface Location {
    lat :number;
    lng :number;
}

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export enum actionType {
    setUserPosition,
    setMapMarkers,
    setMapCenter,
    flipIsMapCenter,
    setZoomlevel,
    setCurrentTour,
    flipIsSoundPlay,
    setDialogMessage,
    setPermissionNotGranted,
    setMapWasLoaded,
    setMapLock,
    setMapPathIsLoading,
    setSelectTourOpen,
    setMapPolylines,
    setIsFindPlacesOpen,
}

export interface AssistantTourState {
    mapmarkers  :Array<MapMarker>;
    polylines   :Array<MapShape>;
    mapcenter   :Location;
    zoomlevel   :number;
    
    currenttour :{
        name   :string;
        index  :number;
    },
    dialogmsg   :{
        title :string;
        msg   :string;
    },

    ismapcenter :boolean;
    isGranted   :boolean;
    hasLoaded   :boolean;   //tells if the map is loaded
    playsound   :boolean;
    ismaplock   :boolean;   //tells if an invisible view appears on the screen to prevent user making actions (during animation)
    isnavpathloading :boolean;
    isSelectTourOpen :boolean;
    isFindPlacesOpen :boolean;
}
