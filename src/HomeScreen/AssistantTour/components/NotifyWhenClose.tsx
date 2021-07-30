/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show an Info icon below the toolbar when the user get close to a point of interest

    * VISIBLE WHEN
        It should be visible only when the user is close to a point of interest
*/
import React from 'react';
import { Animated, TouchableOpacity, StyleSheet, View } from 'react-native';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setPOIBoxOpen } from '../localstateAPI/actions';

export default function NotifyWhenClose() {
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

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
                toValue: 0.8,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setGoin(true));
    }, [isGoingUp]);

    function handleBookOnPress() {
        localDispatch( setPOIBoxOpen(true) );
    }

    return (
        <Animated.View style={[styles.container,  {transform: [{scale: animvalue}]} ]}>
        <TouchableOpacity onPress={handleBookOnPress}>
            <MaterialCommunityIcons name='book-information-variant' size={64} color='rgba(95, 150, 200, 1)' />
        </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', top: 110, right: 5, zIndex: 3,
    }
})
