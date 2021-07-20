/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show an Info icon below the toolbar when the user get close to a point of interest

    * VISIBLE WHEN
        It should be visible only when the user is close to a point of interest

    The the value in the line 44 to set the aquitance range
*/
import React from 'react';
import { Animated, TouchableOpacity, StyleSheet, View } from 'react-native';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setPOIBoxOpen, setPoiIndex }        from '../localstateAPI/actions';
import { GalaTours }            from '../../../../database/assistantour/tours';
import { isClose }              from '../functions';

export default function NotifyWhenClose() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [isVisible, setVisible]       = React.useState(false);

    React.useEffect(() => {
        if( localState.currenttour.index < 0 ||
            !GalaTours[localState.currenttour.index].pointOfInterests) {
            setVisible(false);
            return;
        }
        const userPosition = localState.mapmarkers[0].position;
        let hasClosestPOI :boolean = false;
        let poinIndex     :number  = -1;

        //@ts-ignore
        for(let i=0; i < GalaTours[localState.currenttour.index].pointOfInterests.length; i++) {
            //@ts-ignore
            const POI = GalaTours[localState.currenttour.index].pointOfInterests[i];
            const poiPos = { lat: POI.lat, lng: POI.lng };
            if( POI.voiceasset && isClose(userPosition, poiPos, 0.0005 ) ) {
                hasClosestPOI = true; poinIndex = i;
            }
        }
        if(hasClosestPOI && poinIndex > -1) {
            setVisible(true);
            localDispatch( setPoiIndex(poinIndex));
        }
        else {
            setVisible(false);
            localDispatch( setPoiIndex(-1));
        }
    },[localState.mapmarkers[0].position]);

    const [isGoingUp, setGoin] = React.useState(true);
    const animvalue = React.useRef(new Animated.Value(0.7)).current;
    React.useEffect(() => {
        if(isGoingUp)
            Animated.timing(animvalue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setGoin(false));
        else 
            Animated.timing(animvalue, {
                toValue: 0.6,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setGoin(true));
    }, [isGoingUp]);

    function handleBookOnPress() {
        localDispatch( setPOIBoxOpen(true) );
    }

    if(isVisible)
        return (
            <Animated.View style={[styles.container,  {transform: [{scale: animvalue}]} ]}>
            <TouchableOpacity onPress={handleBookOnPress}>
                <MaterialCommunityIcons name='book-information-variant' size={52} color='rgba(95, 150, 200, 1)' />
            </TouchableOpacity>
            </Animated.View>
        );
    else
        return <View style={{position: 'absolute'}}></View>
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', top: 110, right: 5, zIndex: 3,
    }
})
