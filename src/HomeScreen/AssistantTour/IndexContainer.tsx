/*
    The index (container) when displaying the GPS Navigation system (Assistan Tour).
    It set up the local context provider availble only in Assitant Tour Feature 
    It also renders the Following:
        * The Expo-Leaflet map
        * The Toolbar that appears above the screen (below the TopBar)
        * An Invisible View that takes up the screen use to prevent user clicking when something happening
*/

import React from 'react';
import { Platform } from 'react-native';

import { localContextProvider, defaultLocalState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';
import { setMapCenter } from './localstateAPI/actions';

import LeafletContainer     from './components/LeafletContainer';
import Toolbar              from './components/Toolbar';
import FindPlaces           from './components/FindPlaces';
import SelectTourList       from './components/SelectTourList';
import DialogMessage        from './components/DialogMessage';
import MapLockView          from './components/MapLockView';
import Attribution          from './components/Attribution';
import AttributionDialogBox from './components/AttributionDialogBox'
import NotifyWhenClose      from './components/NotifyWhenClose'
import POIDialogBox         from './components/POIDialogBox';
import { Init, updateUserLocation } from './functions';

export default function IndexContainer() {
    const [localState, localDispatch] = React.useReducer(rootReducer, defaultLocalState );

    //Set up the initial user position and map display (zoom level) after map load
    React.useEffect(() => {
        let i :any;
        ( async () => {
            await Init(localDispatch);
            if(Platform.OS !== 'web')
                i = setInterval(() => updateUserLocation(localDispatch), 2000);
        })();
        return clearInterval(i);
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
            <AttributionDialogBox />
            <POIDialogBox />

            <MapLockView />
        </localContextProvider.Provider>
    );
}
