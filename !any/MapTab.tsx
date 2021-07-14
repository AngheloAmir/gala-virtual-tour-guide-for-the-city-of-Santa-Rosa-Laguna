import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { contextProvider, StateAPI } from '../StateAPI/State';
import { Responsive, useResponsive } from '../Utility/useResponsive';

import TheActualMap     from './Map/TheActualMap';
import PlaceInformation from './Common/DisplayPlaceInfo';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function Map() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MapIndex"         component={MapIndex} options={{headerShown: false}}/>
            <Stack.Screen name="TheActualMap"     component={TheActualMap} options={{headerShown: false}}/>
            <Stack.Screen name="DisplayPlaceInfo" component={DisplayPlaceInfo} options={{headerShown: false}}/>
            <Stack.Screen name="StreetView"       component={WebViewContainer} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

function DisplayPlaceInfo({navigation} :any) {
    function handlePageBack() {
        navigation.navigate('TheActualMap');
    }

    return (
        <PlaceInformation pageback={handlePageBack} />
    );
}

function WebViewContainer() {
    const { state }     :StateAPI   = React.useContext(contextProvider);
    const responsive    :Responsive = useResponsive();
    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            <WebView source={{uri: state.map.streetviewlink}}
                style={{flex: 1, width: responsive.width, height: '100%'}} />
        </View>
    );
}

function MapIndex( {navigation} :any) {
    const resposive = useResponsive();

    const styles = StyleSheet.create({
        backgroundImage: {
            height: resposive.height,
            width: resposive.width,
        },
        container: {
            alignSelf: 'center',
            position: 'absolute',
            width: resposive.containerWidth,
        },
        title: {
            fontSize: 30,
            fontWeight: '700',
            marginTop: resposive.marginHorizontal/2,
            textAlign: 'center',
        },
        description: {
            fontSize: 19,
            fontWeight: '600',
            marginTop:  resposive.marginHorizontal/2,
            textAlign: 'center',
        },
        btnContainer: {
            marginTop: resposive.marginHorizontal * 2,
        },
    });
    //<Image source={bg} style={styles.backgroundImage} resizeMode='cover' />
    return (
        <View>
            
            <View style={styles.container}> 
                <Text style={styles.title}> Welcome user!</Text>
                <Text style={styles.description}> The interactive map let's you view the map of the city, learn the different tourist spot, and their location. Have fun viewing! </Text>

                <View style={styles.btnContainer}>
                    <Button title='Open the offline map' onPress={ () => navigation.navigate('TheActualMap')} />
                    <Text style={{marginTop: 8, fontSize: 12}}>Image map is from: openstreetmap.org</Text>
                </View>
            </View>
        </View>
    );
}