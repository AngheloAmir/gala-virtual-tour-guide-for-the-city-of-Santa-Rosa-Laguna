/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        Display an attribution dialog box (window) in the screen as per the requirements 
    of Mapbox lincess agreement.

    * VISIBLE WHEN
        The user press the (i) icon that appear in the bottom of the map
*/
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setAttributionshow } from '../localstateAPI/actions';
import DialogBox from '../../../Utility/DialogBox';

export default function AttributionInfo() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    function openlink(link :string) {
        Linking.canOpenURL(link).then(supported => {
        if (supported) {
            Linking.openURL(link);
        }});
    }

    return (
        <DialogBox
            title='Attribution'
            isshow={localState.isAttributionOpen}
            ok={() => localDispatch( setAttributionshow(false)) }
            dialogContent={() => {
                return (
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.attributionItem} onPress={() => openlink('https://www.mapbox.com/about/maps/')}>
                            <Text style={styles.name}>© Mapbox </Text>
                            <Text style={styles.link}>https://www.mapbox.com/about/maps/</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.attributionItem} onPress={() => openlink('http://www.openstreetmap.org/copyright')}>
                            <Text style={styles.name}>© OpenStreetMap  </Text>
                            <Text style={styles.link}>http://www.openstreetmap.org/copyright</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.attributionItem} onPress={() => openlink('https://www.mapbox.com/map-feedback/')}>
                            <Text style={styles.name}>Improve this map  </Text>
                            <Text style={styles.link}>https://www.mapbox.com/map-feedback/</Text>
                        </TouchableOpacity>
                        
                    </View>
                )
            }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%', marginLeft: '2.5%',
    },
    attributionItem: {
        paddingBottom: 12,
    },
    name: {
        color: 'darkblue', fontSize: 18, 
    },
    link: {
        fontSize: 12, fontStyle: 'italic',
        textDecorationLine: 'underline',
    }

});



/*
© Mapbox                https://www.mapbox.com/about/maps/
© OpenStreetMap         http://www.openstreetmap.org/copyright
Improve this map        https://www.mapbox.com/map-feedback/
*/
