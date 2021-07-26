/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "" button.
*/
import React from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { WindowDimension }      from '../../../Utility/useResponsive';

export default function StreetView() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    if( !localState.streetviewlink )
        return <Text style={{fontSize: 20, color: 'red'}}>Invalid street view link</Text>

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: localState.streetviewlink}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}} />
        </View>
    );
}
