/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        The attribution that appear in the bottom of the map as per requirement of Mapbox lincess agreement.

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown at the bottom
*/

/*
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import { setAttributionshow } from '../localstateAPI/actions';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

 const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
   
<TouchableOpacity style={styles.icon} onPress={handleOpenAttribution}>
                <Icon name='info-outline' size={28} color='blue' />
            </TouchableOpacity>
 function handleOpenAttribution() {
        localDispatch(setAttributionshow(true));
    }
*/
import React from 'react';
import { Image, View, StyleSheet} from 'react-native';
const mapboxicon = require('../../../../assets/icons/mapbox-logo-black.png');

export default function Attribution() {
    return (
        <View style={styles.container}>
            <Image source={mapboxicon} style={{width: 80, height: 30}} resizeMode='contain' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', bottom: 2, left: '2%', opacity: 0.5,
        width: '96%', flexDirection: 'row', justifyContent: 'space-between',
    },
    icon: {
        marginRight: 0,
    },
});

