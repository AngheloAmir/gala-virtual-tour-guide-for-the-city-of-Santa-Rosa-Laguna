/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Display a webview. This will link to a default website defined in the
        database/guides.json -> webviewguide.link

    * VISIBLE WHEN
       When the user navigates to "Latest News" in the Guides tab.
*/
import React from 'react';
import { View, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { WindowDimension }      from '../../Utility/useResponsive';
import { contextProvider, StateAPI } from '../../StateAPI/State';

export default function Webview() {
    const { state } :StateAPI = React.useContext(contextProvider);
    const link = state.features.guideLink ?
        state.features.guideLink : 'https://galavtg.github.io/assets_online/news';

    if(Platform.OS == 'web') {
        Linking.canOpenURL(link).then((supported :any) => {
            if (supported) {
                Linking.openURL(link);
            }
        });
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: link}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}} />
        </View>
    );
}
