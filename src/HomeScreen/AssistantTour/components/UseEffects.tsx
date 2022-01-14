/*
    Contains useEffect. These are originally part of the AssitantTourIndex.tsx but 
    it was move here since it start to pollute that source file

    This component does not actually renders anything, just a hooks
*/

import React from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';

import { StateAPI, contextProvider } from '../../../StateAPI/State';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setMapCenter, setUserPosition, setUserStatus, setDestinationStatus } from '../localstateAPI/actions';

import { CheckIfGalaBookShow } from '../functions/isShowGalaBook';
import { Init, GetDistance } from '../functions';
const mapjson = require('../../../../database/map.json');

//use to determine if still mounted
import { setMountedState, isMounted } from '../functions/IsMounted';

export default function UseEffects() {
    const { state } :StateAPI = React.useContext(contextProvider);
    const {localState, localDispatch} :LocalStateAPI = React.useContext(localContextProvider);
    const intervalid        = React.useRef({});
    const isDevModeRef      = React.useRef(state.devmode);

    //This refs are used with the get distance interval since it is in async function,
    //it will contain default localState value. Therefore it needs the references to these
    //value
    const getDistanceTimerRef = React.useRef({});
    const refToIsFindingPlace = React.useRef(localState.isLookingForAPlace);
    const refUserPosition     = React.useRef(localState.mapmarkers[0].position);
    const refDestinations     = React.useRef(localState.statusDestination);
    const refIsMapLock        = React.useRef(localState.ismaplock);

    async function SetUpTheInitialEffectAndWatcher() {
        //Check if the user is NOT in dev mode
        if(!isDevModeRef.current) {
            await Init(localDispatch, false);
            const interval = await Location.watchPositionAsync({
                accuracy:                   Location.Accuracy.BestForNavigation,
                timeInterval:               mapjson.gpsUpdateSpeed.timeInterval,
                distanceInterval:           mapjson.gpsUpdateSpeed.distance,
                mayShowUserSettingsDialog:  mapjson.gpsUpdateSpeed.mayShowUserSettingsDialog
            }, userLocation => {
                localDispatch(setUserPosition({
                    lat: userLocation.coords.latitude,
                    lng: userLocation.coords.longitude
                }));
                localDispatch( setUserStatus({
                    speed:  userLocation.coords.speed   ? userLocation.coords.speed : 0,
                    facing: userLocation.coords.heading ? userLocation.coords.heading : -1
                }));
            });
            intervalid.current = interval;
        }
        else {
            await Init(localDispatch, true); 
        }
    }

    function initDistanceCalcTimer() {
        getDistanceTimerRef.current = setInterval(async () => {
            if(refToIsFindingPlace.current && !refIsMapLock.current) {
                console.log('updating status destination');
                refToIsFindingPlace.current = false;
                const des =  refDestinations.current.map((i) => {
                    return {lat: i.destinations.lat, lng: i.destinations.lng}
                });
                let distances :Array<number> = [];
                for(let i = 0; i < des.length; i ++ ) {
                    if(!isMounted) break;
                    try {
                        const temp =  await GetDistance(refUserPosition.current, des[i]);
                        if(temp != null)
                            distances.push(temp);
                        else
                            distances.push(-1);
                    }
                    catch(err) {
                        distances.push(-1);
                    }
                }
                if(!isMounted) return;
                refToIsFindingPlace.current = true;
                const newStatusDestination = refDestinations.current.map((i, index) => {
                    return {
                        ...i, distance: distances[index]
                    }
                });
                localDispatch( setDestinationStatus(newStatusDestination) );

                //console.log( 'distance is ' + JSON.stringify(distances) );
            }
        }, mapjson.getDistanceInterval)
    }

    React.useEffect(() => {
        setMountedState(true);
        SetUpTheInitialEffectAndWatcher();
        initDistanceCalcTimer();

        return () => {
            setMountedState(false);
            try {
                //@ts-ignore
                intervalid.current.remove && intervalid.current.remove();
            } catch(err) { }
            try {
                //@ts-ignore
                clearInterval( getDistanceTimerRef.current );
            } catch(err) { }
        }
    }, []);

    React.useEffect(() => {
        if(!isMounted) return;
        
        //update map center if enable by the user
        if(localState.hasLoaded && localState.ismapcenter )
            localDispatch( setMapCenter(localState.mapmarkers[0].position));

        //will show gala book if the user is really close to a point of interest marker
        CheckIfGalaBookShow({localState, localDispatch}, localState.mapmarkers[0].position);

        refUserPosition.current = localState.mapmarkers[0].position;
    }, [localState.mapmarkers[0].position])


    //This useEffect is required for the "refs" to be updated
    React.useEffect(() => {
        refToIsFindingPlace.current = localState.isLookingForAPlace;
        refDestinations.current     = localState.statusDestination;
    }, [localState.isLookingForAPlace, localState.statusDestination]);

    React.useEffect(() => {
        refIsMapLock.current = localState.ismaplock;
    }, [localState.ismaplock]);

    return (
        <View></View>
    );
}
