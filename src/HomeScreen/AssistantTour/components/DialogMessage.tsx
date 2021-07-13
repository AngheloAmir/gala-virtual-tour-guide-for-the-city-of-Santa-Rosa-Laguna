/*
    Show a dialog message if there is a message in the locaState
*/
import React from 'react';
import { View } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setDialogMessage } from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';

import DialogAlert  from '../../../Utility/DialogAlert';

export default function DialogMessage() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const responsive :Responsive = useResponsive();

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
