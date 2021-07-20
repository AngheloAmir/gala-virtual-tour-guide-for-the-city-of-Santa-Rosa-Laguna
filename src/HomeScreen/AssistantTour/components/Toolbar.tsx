/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/IndexContainer - A fragment is a piece of component that is
            part of a scene
        Index - A component that does not display itself

    * DESCRIPTION
        Show the toobar that appear above the scene of GPS Navigation feature of the app

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown.
*/
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

import SelectTourAndNavigate from './Toolbar/SelectTourAndNavigate';
import IconButtons from './Toolbar/IconButtons';

export default function Toolbar() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const [notifmsg, setnotifmsg]   = React.useState('');
    const [shownotif, setshow]      = React.useState(false);
    const [timeoutid, settimeoutid] = React.useState();

    React.useEffect(() => {
        clearTimeout(timeoutid);
        if(notifmsg.length > 1) {
            setshow(true);
            let i = setTimeout(() => {
                setshow(false);
                setnotifmsg('');
            }, 3000);
            // @ts-ignore
            settimeoutid(i);
        }
        return () => clearTimeout(timeoutid); 
    },[notifmsg]);

    return (
        <View style={{width: '100%', height: 100}}>
            <View style={styles.container}>
                <SelectTourAndNavigate  setnotifmsg={(msg) => setnotifmsg(msg)}/>
                <IconButtons            setnotifmsg={(msg) => setnotifmsg(msg)}/>
            </View>

            <View style={styles.notifMessageContainer}>
                { localState.isnavpathloading &&
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>...Loading navigation path...</Text>
                </View>
                }
                { shownotif &&
                <View style={styles.messageBox}>
                    <Text style={styles.messageText}>{notifmsg}</Text>
                </View>
                }
                {
                    !localState.hasLoaded &&
                    <View style={styles.messageBox}>
                        <Text style={styles.messageText}>...Loading your location... </Text>
                    </View>
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderBottomColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 2,
        paddingHorizontal: 8, paddingVertical: 16,
        backgroundColor: 'rgba(230, 240, 250, 1)',
        flexDirection: 'column',
    },
    tourcontainer: {
        flexDirection: 'row', width: '100%',
    },

    notifMessageContainer: {
        position: 'absolute', top: 100, left: '5%', zIndex: 24,
        width: '90%',
    },
    messageBox: {
        borderWidth: 1, borderRadius: 4, 
        backgroundColor: 'white', borderColor: 'rgba(115, 170, 220, 1)',
        height: 24, marginTop: 4,
    },
    messageText: {
        textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'red',
    },
});
