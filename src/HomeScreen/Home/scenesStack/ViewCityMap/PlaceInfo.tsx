/*
    * TYPE
        Fragment of src/HomeScreen/Home/sceneStack/ViewCityMap - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION

    * VISIBLE WHEN
*/
import React from 'react';
import { Animated, View, Text, StyleSheet, Button, Image, Linking, Platform, TouchableOpacity } from 'react-native';
import { WindowDimension } from '../../../../Utility/useResponsive';

import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI }        from '../../localstateAPI/interface';
import { setWebviewLink,
         setInstantSVCreadit,
         setPlaceInfoShow }     from '../../localstateAPI/actions';
import { allplaces }            from "../../functions/homejson";
import ASSETS                   from '../../../../../database/assets';

export default function PlaceInfo({navigation} :any) {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [isClickable, setClikable] = React.useState(false);

    const animvalue = React.useRef(new Animated.ValueXY({x: 0, y: .9})).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: {x: 1, y: 1},
            duration: 300,
            useNativeDriver: true,
        }).start(() => setClikable(true));
    }, []);

    const link :string | undefined = allplaces[localState.mapMarkerId].streetviewlink;
    const des  :string | undefined = allplaces[localState.mapMarkerId].description;
    //@ts-ignore
    const image = ASSETS[ allplaces[localState.mapMarkerId].image ];

    //this function ensure that, instant street view credit dialog is showed only once
    function streetview() {
        if(localState.isInstantSVCreadit == 0 ) {
            localDispatch(setInstantSVCreadit());
            link && localDispatch(setWebviewLink(link));
        }
        else openStreetViewLink();
    }

    function openStreetViewLink() {
        if(!link || !isClickable) return;

        localDispatch(setPlaceInfoShow(false));
        //if( Platform.OS == 'web') {
            link && Linking.canOpenURL(link).then(supported => {
                if (supported) {
                    Linking.openURL(link);
                }
            });
        //}
        //else {
            //localDispatch(setWebviewLink(link));
           //navigation.navigate('WebView');
        //}
    }

    function handleLearnMore() {
        if(!des || !isClickable) return;
        localDispatch(setPlaceInfoShow(false));
        navigation.navigate('ReadPlaceInfo');
    }

    function handleImageTap() {
        if(!isClickable) return;
        localDispatch(setPlaceInfoShow(false));
    }

    return (
        <Animated.View style={[styles.container, {opacity: animvalue.x, transform: [{scale: animvalue.y }]}]}>
        {
            image &&
            <TouchableOpacity onPress={handleImageTap} activeOpacity={0.8}>
                <Image style={styles.headingImage} source={image} resizeMode='cover' />
            </TouchableOpacity>  
        }
            <View style={styles.heading}>
                <View style={styles.headingTextContainer}>
                    <Text style={styles.pointOfInterestName}>{allplaces[localState.mapMarkerId].name}</Text>
                    <Text style={styles.pointOfInteresAddress}>{allplaces[localState.mapMarkerId].address}</Text>
                </View>
            </View>
            
            <View style={styles.buttonsContainer}>
                { des  && <Button title="       Learn more       " onPress={handleLearnMore} /> }
                { link && <Button title="      Street View       " onPress={streetview} /> }
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
        height: (WindowDimension.width) * 0.72,
    },
    headingTextContainer: {
        flexDirection: 'column',
        width: '90%',
        marginLeft: '5%',
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
       flexDirection: 'row',
       justifyContent: 'space-evenly',
       alignSelf: 'center',
       marginTop: 16,
    },
});
