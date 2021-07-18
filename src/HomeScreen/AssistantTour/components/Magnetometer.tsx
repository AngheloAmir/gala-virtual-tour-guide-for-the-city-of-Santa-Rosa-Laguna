/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown.
*/
import React, { useState, useEffect } from 'react';
import { Image, View, Platform } from 'react-native';
import { Magnetometer } from 'expo-sensors';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
const compassIcon = require('./Magetometer/compass.png');

export default function Compass() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    //Prevent the compass being updated when a dialog box is shown in the screen for optimation
    if( Platform.OS == 'web'                ||
        localState.isAttributionOpen        ||
        localState.isFindPlacesOpen         ||
        localState.isSelectTourOpen         ||
        localState.dialogmsg.msg.length >= 1 )
    return <View style={{position: 'absolute'}}></View>

    const [magnet, setMagnet] = useState(0);
    const [subscription, setSubscription] = useState(null);

    function subscribe() {
        const sub = Magnetometer.addListener(result => {
            let angle = Math.atan2(result.y, result.x);
            angle = angle * (180 / Math.PI)
            angle = angle + 90
            angle = (angle +360) % 360
            setMagnet( Math.round(angle));
        });
        //@ts-ignore
        setSubscription( sub );
        Magnetometer.setUpdateInterval(1500);
    };

    useEffect(() => {
        subscribe();
        return () => {
            //@ts-ignore
            subscription && subscription.remove();
            setSubscription(null);
        };
    }, []);

    return (
        <View style={{position: 'absolute', top: 105, left: 5, zIndex: 3}}>
            <Image source={compassIcon} resizeMode='cover' style={
                { transform: [{ rotate: magnet + 'deg'}], width: 50, height: 50} }
            />
        </View>
  );
}
