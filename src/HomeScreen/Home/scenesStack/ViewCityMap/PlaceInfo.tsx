/*
    * TYPE
        Fragment of src/HomeScreen/Home/sceneStack/ViewCityMap - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION

    * VISIBLE WHEN
*/
import React from 'react';
import { Animated, View, Text, StyleSheet, Button, Image, Linking, Platform } from 'react-native';
import { WindowDimension } from '../../../../Utility/useResponsive';

import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI }        from '../../localstateAPI/interface';
import { setStreetViewLink,
    setPlaceInfoShow }          from '../../localstateAPI/actions';
import { allplaces }            from "../../functions/homejson";
import ASSETS                   from '../../../../../database/assets';

export default function PlaceInfo({navigation} :any) {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [isClickable, setClikable] = React.useState(false);

    const animvalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.timing(animvalue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(() => setClikable(true));
    }, []);

    const link :string | undefined = allplaces[localState.mapMarkerId].streetviewlink;
    const des  :string | undefined = allplaces[localState.mapMarkerId].description;
    //@ts-ignore
    const image = ASSETS[ allplaces[localState.mapMarkerId].image ];

    function handleOpenStreetViewLink() {
        if(!link || !isClickable) return;

        localDispatch(setPlaceInfoShow(false));
        if( Platform.OS == 'web') {
            link && Linking.canOpenURL(link).then(supported => {
                if (supported) {
                Linking.openURL(link);
                }
            });
        }
        else {
            localDispatch(setStreetViewLink(link));
            navigation.navigate('StreetView');
        }
    }

    function handleLearnMore() {
        if(!des || !isClickable) return;
        localDispatch(setPlaceInfoShow(false));
        navigation.navigate('ReadPlaceInfo');
    }

    //{transform: [{translateY: animvalue}]}
    return (
        <Animated.View style={[styles.container, {opacity: animvalue}]}>
        {
            image && <Image style={styles.headingImage} source={image} resizeMode='cover' /> 
        }
            <View style={styles.heading}>
                <View style={styles.headingTextContainer}>
                    <Text style={styles.pointOfInterestName}>{allplaces[localState.mapMarkerId].name}</Text>
                    <Text style={styles.pointOfInteresAddress}>{allplaces[localState.mapMarkerId].address}</Text>
                </View>
            </View>
            
            <View style={styles.buttonsContainer}>
                { des  && <Button title="       Learn more       " onPress={handleLearnMore} /> }
                { link && <Button title="      Street View       " onPress={handleOpenStreetViewLink} /> }
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
