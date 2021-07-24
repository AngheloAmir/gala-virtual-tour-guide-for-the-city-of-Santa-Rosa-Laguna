/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the content of the External lists

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "External List" button.
*/
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ExternalLinks( {navigation} :any) {
    return (
        <View>
            <Text style={{fontSize: 18}}>
                You are in the EXTERNAL LINKS
            </Text>

            <Button title='BACK' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}