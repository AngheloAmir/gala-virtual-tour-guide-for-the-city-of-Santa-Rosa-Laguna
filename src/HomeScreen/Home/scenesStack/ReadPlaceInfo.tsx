/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "" button.
*/
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ReadPlaceInfo( {navigation} :any) {
    return (
        <View>
            <Text style={{fontSize: 18}}>
                You are in the READ PLACE INFO
            </Text>

            <Button title='BACK' onPress={() => navigation.navigate('ViewCityMap')} />
        </View>
    )
}