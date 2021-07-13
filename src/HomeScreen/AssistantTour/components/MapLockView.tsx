/*
    an empty view that more than the size of the screen to prevent user doing a action
    during some process (like loading)
*/

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

export default function MapLockView() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    const styles = StyleSheet.create({
        active: {
            width: 2000, height: 2000, top: 0, 
            position: 'absolute', zIndex: 20,
        },
        nonActive: {
            position: 'absolute', zIndex: 0,
            width: 0, height: 0, 
        }
    });

    return (
        <View style={localState.ismaplock ? styles.active : styles.nonActive}>
        </View>
    );
}