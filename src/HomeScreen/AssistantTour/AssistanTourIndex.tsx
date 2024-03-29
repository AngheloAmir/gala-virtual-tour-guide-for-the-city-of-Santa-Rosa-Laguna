/*
* TYPE
    Scene - A screen is a component that occupies a large part of the screen
    Index - A component that does not display itself

* DESCRIPTION
    The index (container) when displaying the GPS Navigation system (Assistan Tour).
    It set up the local context provider availble only in Assitant Tour Feature 
    It also renders the Following:
        * The Expo-Leaflet map
        * The Toolbar that appears above the screen (below the TopBar)
        * An Invisible View that takes up the screen use to prevent user clicking when something happening
        * and many more...

* VISIBLE WHEN
    The user press the Assitant Tour Tab (in the bottom of the home screen) and press 
    "START NAVIGATING"

* HOW THE ASSISTANT TOUR WORKS
    1) Prepare the local state api - which contain state contains data like:
        -the drawn markers and shapes (polyline) for Expo-Leaft component

    2) Display the nessarry components. These component are as follows:
        -The toolbar which appear in the top of the screen
        -The Expo-Leaflet container
        -The magenetometer icon (an image that use transform rotate a png image)
        -Attribution icons (as describe in Mapbox lincess agreement)
    And additionally although not visible for a moment. These are visible only when certain local state value
    becomes true:
        -FindPlaces dialog box          (when pressed an icon)
        -SelectTourList dialog box      (when pressed the box with initial text --select tour--)
        -DialogMessage dialog box       (used when an error or any message to be seen by the user)
        -AttributionInfo dialog box     (when pressed the info icon in bottom of the map)
        -PointOfInterestInfo dialog box (when the a marker is pressed in the map)

    3) After everything was drawn, this component will do the FF:
        -init() which perform an initial user screen effect
            - asking for permission
            - getting the user current location
            - centering the map to user location
            - then changing the zoom level and removing MapLockView
        -setting a watcher that watch user geolocation changes
        -Also, setting the map center when the user location has changed. This code has to be seperated because
            the async function tends to receive only the initial value and never changes

    4) Then, the component will just wait to receive user activity like tapping an icon
    ***Tapping an icon in the toolbar:

        [--please select tour--]
            When tap, the component SelectTourList which uses src/utility/DialogBox to display its dialog box as the base
            When the user tap on one of the list in the tour, it will set the current tour in the local state

        [FIND PATH] 
            When tap (when there is a selected tour), it do the ff:
                -set the map markers based on the current tour information
                -lock the screen (prevent user tapping the screen)
                -set the zoomlevel
                -call getPathWays() from src/HomeScreen/AssistantTour/functions to get path from two points
                    and then set it to draw a polyline (shape)
                -then it return back the setting to default values

        [magnifying glass icon]
            Show FindPlaces component (a dialog box). The effect is same when the user taps [FIND PATH] button

        [info icon]
            A simple function that set a dialog box message containing information about the current tour

        [lock and sound icon]
            These two buttons in the toolbar are simple as changing a state to true or false values and showing
            a message in the screen.
*/

import React from 'react';
import { localContextProvider, defaultLocalState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';

import LeafletContainer     from './components/LeafletContainer';
import Toolbar              from './components/Toolbar';
import MapLockView          from './components/MapLockView';
import Attribution          from './components/Attribution';
import NotifyWhenClose      from './components/NotifyWhenClose';
import Magnetometer         from './components/Magnetometer';
import SelectTourList       from './windowDialogs/SelectTourList';
import FindPlaces           from './windowDialogs/FindPlaces';
import DialogMessage        from './windowDialogs/DialogMessage';
import AttributionInfo      from './windowDialogs/AttributionInfo';
import Status               from './components/Status';
import PointOfInterestInfo  from './windowDialogs/PointOfInterestInfo';
import UseEffects           from './components/UseEffects';

export default function AssistanTourIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, defaultLocalState);

    return (
        <localContextProvider.Provider value={{localState, localDispatch}}>
            <Toolbar />
            <Magnetometer />
            <LeafletContainer />
            <Attribution />
            <Status />
            <UseEffects />

            { localState.isCloseToMarker            && <NotifyWhenClose /> }
            { localState.isFindPlacesOpen           && <FindPlaces /> }
            { localState.isSelectTourOpen           && <SelectTourList /> }
            { localState.isAttributionOpen          && <AttributionInfo /> }
            { localState.isPOIBoxOpen               && <PointOfInterestInfo /> }
            { localState.ismaplock                  && <MapLockView /> }
            { localState.dialogmsg.msg.length >= 1  && <DialogMessage />}
           
        </localContextProvider.Provider>
    );
}
