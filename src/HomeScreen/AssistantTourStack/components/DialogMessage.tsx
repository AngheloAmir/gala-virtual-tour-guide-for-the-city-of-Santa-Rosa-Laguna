/*
    Show a dialog message if there is a message in the locaState
*/
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setDialogMessage } from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';

import DialogAlert  from '../../../Utility/DialogAlert';

export default function DialogMessage() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const responsive :Responsive = useResponsive();

    const styles = StyleSheet.create({
        container: {
            position: 'absolute', 
            zIndex: 25,
            top: 0,
        },
        dialog: {
            top: (responsive.height - 700) / 2,
        }
    });

    if(!localState.dialogmsg.msg)
        return <View style={styles.container}></View>;
        
    return (
        <View style={styles.container}>
            {
                localState.dialogmsg.msg.length >= 1 &&
                <View style={{width: 2000, height: 2000, position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)'}}></View>
            }
            {
                localState.dialogmsg.msg.length >= 1 &&
                <View style={styles.dialog}>
                    <DialogAlert title={localState.dialogmsg.title} text={localState.dialogmsg.msg}
                        isshow={true} ok={ () => localDispatch( setDialogMessage('', '') ) }
                    />
                </View>
            }
        </View>
    );
}