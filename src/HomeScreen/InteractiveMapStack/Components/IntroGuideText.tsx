/*
    This component show the introductory guide text during the 
    initial open of TourVirtual by the user

    * a fragment of TourInteractive component
*/

import React from 'react';
import {Animated, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import { Audio } from 'expo-av';
import { Responsive, useResponsive } from '../../../Utility/useResponsive'

const tourguideimage = require('../../../../assets/guide/steward.png');
import introtext from '../../../../src-data/mytour/introtext';

interface propsReceive {
    okcallback :any;
};

export default function IntroGuideText(props :propsReceive) {
    const temp :any = 0;
    const [audio, setaudio] = React.useState(temp);
    const responsive :Responsive = useResponsive();

    const animvalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();

        //Play sound text
        async function playSoundText1() {
            const { sound } = await Audio.Sound.createAsync(
                require('../../../../assets/guide/intro speech.mp3'));
            setaudio(sound);
            sound.setVolumeAsync(0.4);
            await sound.playAsync();
        }
        setTimeout(playSoundText1, 500);
    }, []);

    const styles = StyleSheet.create({
        textContainer: {
            width: getTextContainerWidth(), height: 400,
            position:'absolute', bottom: 50, right: getCenterPositionOfTextContainer(),
            backgroundColor: 'white',
            borderRadius: 24, borderWidth: 1,
            padding: 10, paddingBottom: 25
        }
    });

    function getTextContainerWidth() :number {
        if(responsive.width >= 700)
            return 630;
        return responsive.width - 70;
    }

    function getCenterPositionOfTextContainer() :number{
        return (responsive.width - getTextContainerWidth()) / 2;
    }

    function handleOK() {
        audio.stopAsync();
        props.okcallback();
    }
    return (
        <View>
            <Animated.View style={[{opacity: animvalue}]}>
                <View style={styles.textContainer}>
                    <ScrollView style={{paddingBottom: 40}}>
                        <Text style={{fontSize: 18}}> {introtext} </Text>
                    </ScrollView>

                    <View style={{width: '60%'}}>
                        <Button title='ok' onPress={handleOK} />
                    </View>
                    
                </View>

                <Image source={tourguideimage} resizeMode='contain' style={{width: 150, height: 150}} /> 
            </Animated.View>
        </View>
    );
}