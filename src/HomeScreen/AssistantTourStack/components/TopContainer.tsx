import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Responsive, useResponsive } from '../../../Utility/useResponsive';

interface propsReceive {
    currenttour :string;
    setcurrent  :(tour :string) => void;
    sound       :boolean;
    setsound    :() => void;
    zoomin      :() => void;
    zoomout     :() => void;
}

export default function TopContainer(props :propsReceive) {
    const responsive :Responsive = useResponsive();
    
    const styles = StyleSheet.create({
        container: {
            zIndex: 10, width: responsive.width, height: 110,
            borderBottomColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 2,
            paddingHorizontal: 8, paddingVertical: 16,
            backgroundColor: 'rgba(230, 240, 250, 1)',
            flexDirection: 'column',
        },
        tourcontainer: {
            flexDirection: 'row', width: '100%',
        },
        text: {
            fontSize: 18, marginRight: 12,
        },
        listOfTours: {
            borderWidth: 2, borderColor: 'rgba(115, 170, 220, 1)', borderRadius: 8,
            width: '60%', alignItems: 'center',
        },
        button: {
            width: '35%', marginLeft: '4%',
        },
        iconsContainer: {
            flexDirection: 'row', justifyContent: 'space-evenly'
            
        },
        iconsItem: {
            marginTop: 16, height: 42, width: 42,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.tourcontainer}>
                <TouchableOpacity style={styles.listOfTours} activeOpacity={0.7}>
                    <Text>{props.currenttour}</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Button title='Navigate' onPress={() => console.log('navigating')} />
                </View>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={props.zoomin}>
                    <MaterialIcons name='zoom-in' size={36} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.zoomout}>
                    <MaterialIcons name='zoom-out' size={36} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name='notifications' size={32} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name='place' size={32} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.setsound}>
                    {
                        props.sound ?
                        <Entypo name='sound' size={32} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
                        <Entypo name='sound-mute' size={32} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}