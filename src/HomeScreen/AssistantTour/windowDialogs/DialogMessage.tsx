/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        Show a dialog message box if there is a message in the locaState

    * VISIBLE WHEN
        If there is a message in the locaState
*/
import React from 'react';
import { View } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setDialogMessage } from '../localstateAPI/actions';

import DialogAlert  from '../../../Utility/AlertBox';

export default function DialogMessage() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    if(localState.dialogmsg.msg.length >= 1)  
        return (
            <DialogAlert title={localState.dialogmsg.title} text={localState.dialogmsg.msg}
                isshow={true} ok={ () => localDispatch( setDialogMessage('', '') ) }
            />
        );
    return (
        <View style={{position: 'absolute'}}></View>
    )
}
