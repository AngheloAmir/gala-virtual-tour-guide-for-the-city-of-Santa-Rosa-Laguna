/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the place description and image

    * VISIBLE WHEN
        When the user is in Home Screen / Online Map view and pressed "more info" after tapping a marker
*/
import React from 'react';
import { View, Text, StyleSheet, Image, Animated, ScrollView } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { WindowDimension }      from '../../../Utility/useResponsive';
import { allplaces }            from '../functions/homejson';
import ASSETS                   from '../../../../database/assets';

export default function ReadPlaceInfo() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    //@ts-ignore
    const image = ASSETS[ allplaces[localState.mapMarkerId].image ];

    const animvalue = React.useRef(new Animated.ValueXY({x: .5, y: .9})).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: {x: 1, y: 1},
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <ScrollView style={{marginBottom: 24}}>
        <Animated.View style={[styles.container, {opacity: animvalue.x, transform: [{scale: animvalue.y }]}]}>
            { allplaces[localState.mapMarkerId].image &&
                <Image style={styles.image} source={image} resizeMode='cover' />
            }
            <View style={styles.content}>
                <Text style={styles.placename}>{allplaces[localState.mapMarkerId].name }</Text>
                <Text style={styles.address}>{ allplaces[localState.mapMarkerId].address }</Text>
                <Text style={styles.description}>{ allplaces[localState.mapMarkerId].description }</Text>
            </View>
        </Animated.View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: WindowDimension.width,
    },
    image: {
        width: WindowDimension.width ,
        height: (WindowDimension.width) * 0.72,
    },
    content: {
        width: '90%', alignSelf: 'center',
        textAlign: 'justify',
    },
    placename: {
        fontSize: 20, fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
    },
    address: {
        fontSize: 18,
        fontWeight: '300',
        color: 'gray',
        textAlign: 'center',
    },
    description: {
        fontSize: 18, lineHeight: 28, marginBottom: 0, marginTop: 16,
    },
})
