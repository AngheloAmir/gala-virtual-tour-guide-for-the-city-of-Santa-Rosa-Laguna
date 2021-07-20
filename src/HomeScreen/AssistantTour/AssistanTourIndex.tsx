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
import * as Location from 'expo-location';

import { localContextProvider, defaultLocalState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';
import { setMapCenter, setUserPosition } from './localstateAPI/actions';

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
import PointOfInterestInfo  from './windowDialogs/PointOfInterestInfo';

import { Init } from './functions';

export default function AssistanTourIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, defaultLocalState );
    const [intervalID, setIntervalID] = React.useState()

    //Set up the initial user position and subscribe to Location updates
    React.useEffect(() => {
        ( async () => {
            await Init( localDispatch);
            if(Platform.OS !== 'web') {
                const interval = await Location.watchPositionAsync({
                    accuracy:                   Location.Accuracy.BestForNavigation,
                    timeInterval:               1000,
                    distanceInterval:           1,
                    mayShowUserSettingsDialog:  true 
                }, userLocation => {
                    localDispatch(setUserPosition({
                        lat: userLocation.coords.latitude,
                        lng: userLocation.coords.longitude
                    }));
                });
                //@ts-ignore
                setIntervalID(interval);
            }
        })();
        return () => {
            //@ts-ignore
            try { intervalID.remove() } catch(err) { }
        }
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
            <Magnetometer />
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
