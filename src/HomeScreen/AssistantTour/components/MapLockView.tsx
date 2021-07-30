/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        An empty view that more than the size of the screen to prevent user doing a action
    during some process (like loading)
*/
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function MapLockView() {
    const styles = StyleSheet.create({
        container: {
            width: 2000, height: 2000, top: 0, 
            position: 'absolute', zIndex: 20,
        },
    });

    return (
        <View style={styles.container}>
        </View>
    );
}