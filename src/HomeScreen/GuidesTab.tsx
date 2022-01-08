/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        Show the content of the Home > Guide tab by using a webview

    * VISIBLE WHEN
        When the user is in Home Screen and in the Guide Tab
*/
//@ts-nocheck
import React from 'react';
import { View, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { WindowDimension } from '../Utility/useResponsive';
const guidelist = require('../../database/guides.json');

export default function GuidesIndex() {
    if(Platform.OS == 'web') {
        Linking.canOpenURL(guidelist.homelink).then((supported :any) => {
            if (supported) {
                Linking.openURL(guidelist.homelink);
            }
        });
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: guidelist.homelink}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}} />
        </View>
    );
}
