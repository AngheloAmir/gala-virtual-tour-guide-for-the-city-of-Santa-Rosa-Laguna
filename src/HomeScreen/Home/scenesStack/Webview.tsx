/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Display a webview

    * VISIBLE WHEN
       This is displayed when navigation.navigate('Webview') is called and
       localState.webviewlink is not empty
*/
import React from 'react';
import { Text, View, Platform, Linking } from 'react-native';
import { WebView } from 'react-native-webview';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { WindowDimension }      from '../../../Utility/useResponsive';

export default function StreetView() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    if( !localState.webviewlink )
        return <Text style={{fontSize: 20, color: 'red'}}>Error: Missing Link</Text>

    if(Platform.OS == 'web') {
        Linking.canOpenURL(localState.webviewlink).then((supported :any) => {
            if (supported) {
                Linking.openURL(localState.webviewlink);
            }
        });
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: localState.webviewlink}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}} />
        </View>
    );
}
