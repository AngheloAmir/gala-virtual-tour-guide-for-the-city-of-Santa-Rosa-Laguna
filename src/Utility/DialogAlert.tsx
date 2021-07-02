import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Responsive, useResponsive } from './useResponsive';

export interface propsReceive {
    title    :string;
    text     :string;
    isshow   :boolean;
    ok       :() => void;
    cancel?  :() => void;
}

export default function VisitSiteDialog(props :propsReceive) {
    if(!props.isshow) return <View></View>;
    const responsive :Responsive = useResponsive();    
    const WIDTH = 300;

    const styles = StyleSheet.create({
        container: {
            position: 'absolute', width: WIDTH, height: 300,
            top:  ((responsive.height - 280) / 2) - 80,
            left: ((responsive.width - WIDTH) /2),
            backgroundColor: 'white', borderWidth: 1,
            borderRadius: 8, padding: 8, zIndex: 100,
        },
        title: {
            fontSize: 21, fontWeight: '500',
        },
        borderline :{
            borderWidth: 1, height: 1,
            borderColor: 'rgba(115, 170, 220, 1)', marginVertical: 8,
        },
        borderHorizontal: {
            borderColor: 'rgba(115, 170, 220, 1)', borderRightWidth: 2,
            marginTop: 6, height: 24,
        },
        text: {
            fontSize: 20, lineHeight: 30,
        },
        buttonsContainer: {
            borderTopWidth: 2, borderColor: 'rgba(115, 170, 220, 1)',
            marginTop: 12, flexDirection: 'row',
        },
        buttonCancel: {
            width: 280/2, 
        },
        buttonOK: {
            width: 280/2, 
        },
        buttonOkOnly: {
            width: 280,
        },
        buttonText: {
            fontSize: 21, textAlign: 'center', color: '#338',
        }
    });

    return (
        <View style={styles.container}>
            <View style={{height: 240}}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.borderline}></View>
                <ScrollView >
                    <Text style={styles.text}>{props.text}</Text>
                </ScrollView>
            </View>
            
            <View style={styles.buttonsContainer}>
                { props.cancel &&
                <TouchableOpacity style={styles.buttonCancel} onPress={props.cancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                }

                { props.cancel && <View style={styles.borderHorizontal}></View> }

                <TouchableOpacity style={ props.cancel ? styles.buttonOK : styles.buttonOkOnly } onPress={props.ok}>
                    <Text style={styles.buttonText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}