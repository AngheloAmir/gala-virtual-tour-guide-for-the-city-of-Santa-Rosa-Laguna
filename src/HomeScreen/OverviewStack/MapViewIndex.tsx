import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {contextProvider, StateAPI} from '../../StateAPI/State';
import { setCameraIndex } from '../../StateAPI/Actions';
import { Responsive, useResponsive } from '../../Utility/useResponsive';
import { Map } from '../../../src-data/map/!MapInterface'

export default function MapViewIndex({navigation} :any) {
    const responsive :Responsive = useResponsive();
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);
    const map :Map = state.features.multiview;

    //calculate the map width and height based on the screen
    //to make sure that cameras are placed correctly
    const mapHeight   = responsive.height - 150;
    const mapWidth    = mapHeight * (9 / 16);               //which create a 16:9 ratio image
    const marginLeft  = (responsive.width - mapWidth)/2;    //which center the image

    function handleBackPress() {
        navigation.navigate('Overview');
    }

    function cameraXPosition(posx :number) :number {
       return marginLeft + ( mapWidth * (posx / 45) );
    }

    function cameraYPosition(posy :number) :number {
        return mapHeight * (posy / 80);
    }

    function handleCameraPress(index :number) {
        dispatch( setCameraIndex(index) );
        navigation.navigate('PerpectiveView');
    }

    const styles = StyleSheet.create({
        mapImage: {
            height: mapHeight,
            width:  mapWidth,
            marginLeft: marginLeft,
        }
    });

    return (
        <View>
            <Image source={map.mapimage} style={styles.mapImage}  resizeMode='contain' />
            
            {
                map.cameras.map( (camera :any, index :number) => {
                    return (
                        <TouchableOpacity
                            style={{position: 'absolute', top: cameraYPosition(camera.y), left: cameraXPosition(camera.x)}}
                            onPress={() => handleCameraPress(index) }
                            key={index}
                        >
                           <MaterialIcons  name='camera-alt' size={32} color='black' />
                        </TouchableOpacity>
                    );
                })
            }

            <Button title='Back' onPress={handleBackPress} />
        </View>
    )
}