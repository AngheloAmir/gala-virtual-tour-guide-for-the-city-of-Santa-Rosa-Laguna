/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        Show an Dialog box and will play a sound if possible

    * VISIBLE WHEN
        This dialog box is visible when the user press the book icon (which appear when close to a POI).
    When localState.isPOIBoxOpen is true
*/

import React from 'react';
import { View, Text, Button } from 'react-native';
import { Audio } from 'expo-av';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setPOIBoxOpen }        from '../localstateAPI/actions';
import { GalaTours }            from '../functions/options';
import ASSETS                   from '../../../../database/assets';
import DialogBox                from '../../../Utility/DialogBox';

export default function PointOfInterestInfo() {
    const { localDispatch } :LocalStateAPI= React.useContext(localContextProvider);

    return (
        <DialogBox
            title='Point of Interest' isshow={true}
            dialogContent={DialogContent}
            cancel={ () => localDispatch(setPOIBoxOpen(false)) }
        />
    )
}

function DialogContent() {
    const { localState } :LocalStateAPI= React.useContext(localContextProvider);
    const [sound, setSound] = React.useState();

    async function playSound() {
        try {
            if( !localState.playsound) return;
            //@ts-ignore
            //check if the mp3 is available to close POI found (see NotifyWhenClose component on it find out the nearest POI)
            if( GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].voiceasset) {
                const { sound } = await Audio.Sound.createAsync(
                    ASSETS[
                        //@ts-ignore
                        GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].voiceasset
                    ]
                );
                //@ts-ignore
                setSound(sound);
                await sound.playAsync();
            }
        }
        catch(err) {

        }
    }
  
    React.useEffect(() => {
      return sound
        ? () => {
            //@ts-ignore
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    function PlayTourVoice() {
        try {
            if(GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].voiceasset
                && localState.playsound)
                return (
                    <View style={{marginBottom: 8}}>
                        <Button title='Play Tour Voice' onPress={playSound} />
                    </View>
                )
            return <View></View>
        }
        catch(err) {
            //console.warn(err);
            return <View></View>
        }
    }

    function PointOfInterestName() {
        try {
            if(GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].name)
                return (
                <Text style={{fontSize: 20, fontWeight: '600', lineHeight: 24}}>
                    { GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].name }
                </Text>
                )
            else
                return <View></View>
        }
        catch(err) {
            //console.warn(err);
            return <View></View>
        } 
    }

    function PointOfInterestDescription() {
        try {
            if(GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].description) {
                return (
                    <Text style={{fontSize: 19, marginTop: 8, lineHeight: 28}}>
                    {  '   ' + GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].description }
                    </Text>
                )
            }
            else
                return <View></View>
        }
        catch(err) {
            //console.warn(err);
            return <View></View>
        }
    }

    try {
        console.log('#1: ' + GalaTours[localState.currenttour.index]);
        console.log('#2: ' + GalaTours[localState.currenttour.index].pointOfInterests);
        console.log('#3: ' + GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex]);
        console.log('#4: ' + localState.poiCloseIndex + ', while length: ' + GalaTours[localState.currenttour.index].pointOfInterests.length);
    }
    catch(err) {
        console.error(err);
    }

    return (
        <View style={{paddingHorizontal: 4}}>
            { PlayTourVoice() }
            { PointOfInterestName() }
            { PointOfInterestDescription() }
        </View>
    );
}
