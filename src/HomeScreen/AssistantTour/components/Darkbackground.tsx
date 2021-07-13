/*
    A opaque dark background that used to cast shadow in the background
    when a dialog box is opened.
*/

import React from 'react';
import { View } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

export default function DarkBackground() {
    const { localState} :LocalStateAPI = React.useContext(localContextProvider);

    if( localState.isFindPlacesOpen || localState.isSelectTourOpen ||
        localState.dialogmsg.msg.length >= 2 )
        return (
            <View style={{width: 2000, height: 2000, position: 'absolute', top: 0, zIndex: 18, backgroundColor: 'rgba(0,0,0,.5)'}}></View>
        );
    
    return (
        <View style={{position: 'absolute'}}></View>
    )
}
