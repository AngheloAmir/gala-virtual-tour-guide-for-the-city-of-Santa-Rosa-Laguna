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
  
    React.useEffect(() => {
      return sound
        ? () => {
            //@ts-ignore
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);

    return (
    <View style={{paddingHorizontal: 4}}>
        { /* @ts-ignore */
            GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].voiceasset &&
            localState.playsound &&
            <View style={{marginBottom: 8}}>
                <Button title='Play Tour Voice' onPress={playSound} />
            </View>
        }
        { /* @ts-ignore */
            GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].name &&
            <Text style={{fontSize: 20, fontWeight: '600', lineHeight: 24}}>
            { /* @ts-ignore */
                GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].name
            }
            </Text>
        }
        { /* @ts-ignore */
            GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].description &&
            <Text style={{fontSize: 19, marginTop: 8, lineHeight: 28}}>
            { /* @ts-ignore */
                '   ' + GalaTours[localState.currenttour.index].pointOfInterests[localState.poiCloseIndex].description
            }
            </Text>
        }
    </View>
    );
}
