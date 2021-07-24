/*
    * TYPE
        Fragment of src/HomeScreen/Home/sceneStack/ViewCityMap - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION

    * VISIBLE WHEN
*/
import React from 'react';
import { Animated, View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { WindowDimension } from '../../../../Utility/useResponsive';

import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI }        from '../../localstateAPI/interface';
import { ALLPLACES } from '../../../../../database/places/allplaces';

export default function PlaceInfo() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    const animvalue = React.useRef(new Animated.Value(-400)).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.container, {transform: [{translateY: animvalue}]} ]}>
        <Image style={styles.headingImage}
            source={require('../../../../../assets/santarosa/places/arch.jpg')} resizeMode='cover' /> 
        <View style={styles.heading}>
                <View style={styles.headingTextContainer}>
                    <Text style={styles.pointOfInterestName}>{ALLPLACES[localState.mapMarkerId].name}</Text>
                    <Text style={styles.pointOfInteresAddress}>{ALLPLACES[localState.mapMarkerId].address}</Text>
                </View>
            </View>
            
            <View style={styles.buttonsContainer}>
            <Button title="Learn more" onPress={() => console.log('pressed')} />
                    <Button title="Street View" onPress={() => console.log('pressed')} />
            </View>
         </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: WindowDimension.width,
        paddingBottom: 10,
        position:'absolute',
        zIndex: 3,
    },
    heading: {
        flexDirection: 'row',
        marginTop: 4,
    },
    headingImage: {
        width: WindowDimension.width ,
        height: (WindowDimension.width) * 0.5,
    },
    headingTextContainer: {
        flexDirection: 'column',
        width: WindowDimension.width,
    },
    pointOfInterestName: {
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },
    pointOfInteresAddress: {
        fontSize: 18, textAlign: 'center'
    },
    buttonsContainer: {
       width: '90%',
       alignSelf: 'center',
       marginTop: 8,
    },
});

/*
<ScrollView style={{height: 180}}>
                        <Text style={styles.pointOfInterestDesc}>{ALLPLACES[localState.mapMarkerId].description}</Text>
                    </ScrollView>
*/
