/*
    Contains all of the interface (object type) defined in the 
    localstate api
*/

import { MapMarker, MapShape } from "expo-leaflet";

export interface LocalStateAPI {
    localState     :AssistantTourState;
    localDispatch  :React.Dispatch<any>;
}

export interface AssistantTourState {
    /**
    * This attribute contains the markers that will be used by Expo-Leaflet container
    * actions available to change this state (see src/AssistantTour/localStateAPI/actions)
    * @usage
    * localDispatch( setUserPosition(geolocation :Position) )
    * localDispatch( setMapMarkers(markers :Array<MapMarker>) )
    */
    mapmarkers  :Array<MapMarker>;

    /**
     * Contains polylines that is draw between two points (position)
     * @usage
     * setMapPolyLines(polylines :Array<MapShape>)
     */
    polylines   :Array<MapShape>;

    /**
     * The current map center, this value is change only when localState.ismapcenter = true
     * @usage
     * setMapCenter(geolocation :Position)
     */
    mapcenter   :Position;

    /**
     * The current map zoom level. Changing this will create a zoom effect
     * @usage
     * setZoomlevel(level :number)
     */
    zoomlevel   :number;
    
    /**
     * The current tour which is change when [---select tour---] is tap in the toolbar
     * @usage
     * setCurrentTour(name :string, index :number)
     */
    currenttour :{
        name   :string;
        index  :number;
    },

    /**
     * Show a dialog message when there a text in localState.dialogmsg.msg
     * @usage
     * setDialogMessage(title :string, msg :string)
     */
    dialogmsg   :{
        title :string;
        msg   :string;
    },

    /**
     * true or false when the user tap the [lock icon] in the toolbar
     * @usage
     * flipIsMapCenter()
     */
    ismapcenter         :boolean;

    /**
     * set after Location.requestPermissionAsycn() returns
     * @usage
     * permissionLocationNotGranted() - this function will set isGranted to false
     */
    isGranted           :boolean;

    /**
     * tells if the map is loaded, usually changed in the init() function
     * @usage
     * setMapWasLoaded() - this function will set hasLoaded to true
     */
    hasLoaded           :boolean;

    /**
     * will play assistant tour mp3 speech
     * @usage
     * flipIsSoundPlay()
     */
    playsound           :boolean;

    /**
     * when true, an invisible view appears on the screen to prevent user making actions (during animation)
     * @usage
     * setMapLock(isLock :boolean)
     */
    ismaplock           :boolean;

    /**
     * true when an API request was sent to router.project-osrm.org and www.overpass-api to get the path ways
     * @usage
     * setMapPathIsLoading(isLoading :boolean) 
     */
    isnavpathloading    :boolean;

    /**
     * true when the user tap [---select tour--] in the toolbar
     * @usage
     * setSelectTourOpen(isOpen :boolean)
     */
    isSelectTourOpen    :boolean;

    /**
     * true when the user tap [magnifying glass icon] in the toolbar
     * @usage
     * setFindPlacesOpen(isOpen :boolean)
     */
    isFindPlacesOpen    :boolean;

    /**
     * true when the user tap the info icon appears in the bottom of the screen
     * @usage
     * setAttributionshow(isOpen :boolean)
     */
    isAttributionOpen   :boolean;

    /**
     * true when the taps an marker in the map
     * @usage
     * setPOIBoxOpen(isOpen :boolean)
     */
    isPOIBoxOpen        :boolean;

    /**
     * the index of the nearest point of interest item in the current tour
     * @usage
     * setPoiIndex(index :number)
     */
    poiCloseIndex       :number;

    /**
     * Determine if the user is close to a Point of Interest so a "book" icon will be show in the scren
     * @usage
     * localDispatch( setIsCloseToMarker(isClose :boolean) )
     */
    isCloseToMarker     :boolean;

    /**
     * Status of the user. This values appear in the bottom of the map
     */
    statusUser  :UserStatus

    /**
     * Status of the destination. This values appear in the bottom of the map
     */
    statusDestination :Array<StatusDestination>;

    /**
     * Is the user is looking for a place
     */
    isLookingForAPlace   :boolean;

}

export interface UserStatus {
    facing          :number;
    speed           :number;
}

export interface StatusDestination {
    placename       :string;
    destinations    :Position;
    distance        :number;
}

export interface Position {
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

    clearShapeNMarkers,
    setIsAttributionShow,

    setIsCloseToMarker,
    setIsPOIBoxOpen,
    setPoiIndex,

    setUserStatus,
    setDestinationStatus,
    setIsLookingForAPlace,
}
