/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "" button.
*/
import React from 'react';
import { View, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { WindowDimension } from '../../../Utility/useResponsive';
import { HomeTabData } from '../../../../database/home';

export default function MoreArticles( {navigation} :any) {
    const link = HomeTabData.websites.morearticles;

    if(Platform.OS == 'web') {
        Linking.canOpenURL(link).then((supported :any) => {
            if (supported) {
                Linking.openURL(link);
            }
        });
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: HomeTabData.websites.covidcase}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}} />
        </View>
    );
}