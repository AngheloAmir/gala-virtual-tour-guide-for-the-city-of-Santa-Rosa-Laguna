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
*/

import React from 'react';
import { Platform } from 'react-native';

import { localContextProvider, defaultLocalState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';
import { setMapCenter } from './localstateAPI/actions';

import LeafletContainer     from './components/LeafletContainer';
import Toolbar              from './components/Toolbar';
import MapLockView          from './components/MapLockView';
import Attribution          from './components/Attribution';
import NotifyWhenClose      from './components/NotifyWhenClose'
import SelectTourList       from './windowDialogs/SelectTourList';
import FindPlaces           from './windowDialogs/FindPlaces';
import DialogMessage        from './windowDialogs/DialogMessage';
import AttributionInfo      from './windowDialogs/AttributionInfo';
import PointOfInterestInfo  from './windowDialogs/PointOfInterestInfo';

import { Init, updateUserLocation } from './functions';

export default function AssistanTourIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, defaultLocalState );
    const [intervalID, setIntervalID] = React.useState()

    //Set up the initial user position and map display (zoom level) after map load
    React.useEffect(() => {
        ( async () => {
            await Init( localDispatch);
            if(Platform.OS !== 'web')
                setIntervalID(
                    //@ts-ignore
                    setInterval(() => updateUserLocation(localDispatch), 2000)
                );
        })();
        return clearInterval(intervalID);
    }, []);

    //will center the map to user current position?
    React.useEffect(() => {
        if( localState.hasLoaded && localState.ismapcenter )
            localDispatch( setMapCenter(localState.mapmarkers[0].position))
    }, [localState.mapmarkers[0].position]);

    return (
        <localContextProvider.Provider value={{localState, localDispatch}}>
            <Toolbar />
            <NotifyWhenClose />
            <LeafletContainer />
            <Attribution />

            <FindPlaces />
            <SelectTourList />
            <DialogMessage />
            <AttributionInfo />
            <PointOfInterestInfo />

            <MapLockView />
        </localContextProvider.Provider>
    );
}
