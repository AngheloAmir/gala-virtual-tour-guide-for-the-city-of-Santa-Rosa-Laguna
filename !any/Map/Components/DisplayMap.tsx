/*
    A component that display the map. The map is big so it has to be divided into different parts.

    For OPTIMAZATION purpose, this is HARD CODED.
*/

import React from 'react';
import { Image, TouchableOpacity, View} from 'react-native';

import data from '../../../../database/interactivemap';

interface propsReceive {
    touchCallback   :() => void;
    zoomLevel       :number;
}

export default function displayMap(props :propsReceive) {
    const styles = {
        map: {
            width:      data.tilewidth  * props.zoomLevel,
            height:     data.tileheight * props.zoomLevel,
            margin:     -0.35,
        }
    }

    return (
        <TouchableOpacity style={{flexDirection: 'column'}} activeOpacity={1} onPress={props.touchCallback}>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.images[0]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[1]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[2]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[3]} resizeMode='cover' style={styles.map} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.images[4]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[5]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[6]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[7]} resizeMode='cover' style={styles.map} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.images[8]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[9]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[10]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[11]} resizeMode='cover' style={styles.map} />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.images[12]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[13]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[14]} resizeMode='cover' style={styles.map} />
                <Image source={data.images[15]} resizeMode='cover' style={styles.map} />
            </View>
        </TouchableOpacity>
    );
}