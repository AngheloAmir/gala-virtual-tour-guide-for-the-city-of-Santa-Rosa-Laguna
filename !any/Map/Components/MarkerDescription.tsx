/*


    * a fragment of TourInteractive component
*/

import React from 'react';
import { Animated, Button, Image, StyleSheet, Text, View } from 'react-native';

import { Responsive, useResponsive } from '../../../Utility/useResponsive'
import { PlaceInformation } from '../../../../database/!interfaces/PlaceInformation'; 

interface propsReceive {
    place        :PlaceInformation;
    moreinfocb   :() => void;
    streetviewcb :() => void;
}

export default function MarkerDescription(props :propsReceive) {
    const responsive :Responsive = useResponsive();

    //ANIMATION CODE=================================
    const animvalue = React.useRef(new Animated.Value(-100)).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
        }).start();
    }, []);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: 'white',
            width: responsive.width,
            padding: 5, paddingBottom: 10,
            position:'absolute',
            zIndex: 3,
        },
        heading: {
            flexDirection: 'row',
        },
        headingImage: {
            width: 120, height: 120,
            marginRight: 10,
        },
        headingTextContainer: {
            flexDirection: 'column',
            width: responsive.width - 96 - 25,
        },
        pointOfInterestName: {
            fontSize: 21,
            fontWeight: '700',
        },
        pointOfInterestDesc: {
            fontSize: 20,
            paddingLeft: 5, paddingTop: 5,
        },
        infoContainer: {
            flexDirection: 'row',
        },
        infoItem: {
            fontSize: 20, paddingLeft: 5,
        },
        bold: {
            fontSize: 20, fontWeight: '700',
        },
        buttonsContainer: {
            flexDirection: 'row', marginTop: 10,
            width: '90%', marginLeft: '5%'
        },
    });
    
    return (
        <Animated.View style={[styles.container, {transform: [{translateY: animvalue}]} ]}>
            <View style={styles.heading}>
                <Image style={styles.headingImage} source={props.place.getImage()} resizeMode='contain' />
                <View style={styles.headingTextContainer}>
                    <Text style={styles.pointOfInterestName}>{props.place.name} </Text>
                    <Text style={styles.pointOfInterestDesc}>{props.place.description}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.infoItem}>{props.place.address}</Text>
            </View>
            
            <View style={styles.buttonsContainer}>
                <View style={{width: '47%', marginRight: '5%'}}>
                    <Button title="More Info" onPress={() => props.moreinfocb()} />
                </View>
                <View style={{width: '47%'}}>
                    <Button title="Street View" onPress={() => props.streetviewcb()} />
                </View>
            </View>
        </Animated.View>
    );
}
