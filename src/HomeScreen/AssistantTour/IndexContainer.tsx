/*
    The index (container) when displaying the GPS Navigation system (Assistan Tour).
    It set up the local context provider availble only in Assitant Tour Feature 
    It also renders the Following:
        * The Expo-Leaflet map
        * The Toolbar that appears above the screen (below the TopBar)
        * Dialog Message Box and Find Place Message Box (if shown)
        * An Invisible View that takes up the screen use to prevent user clicking when something happening
        * A opaque dark background
*/

import React from 'react';
import { View, Platform } from 'react-native';

import { localContextProvider, defaultLocalState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';
import { setMapCenter } from './localstateAPI/actions';

import LeafletContainer from './components/LeafletContainer';
import Toolbar          from './components/Toolbar';
import FindPlaces       from './components/FindPlaces';
import SelectTourList   from './components/SelectTourList';
import DialogMessage    from './components/DialogMessage';
import MapLockView      from './components/MapLockView';
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
            <View style={{width: '100%', height: '100%'}}>
                <Toolbar />
                <LeafletContainer />
                <FindPlaces />
                <SelectTourList />
                <DialogMessage />
                <MapLockView />
            </View>
        </localContextProvider.Provider>
    );
}
