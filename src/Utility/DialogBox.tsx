/*
    The parent dialog box. This component must be extend by providing a component to
    the props.dialogContent.

    Example usage:
        <DialogBoxWindow
            title='My Title'
            isshow={true}
            ok={() => console.log('You pressed OK')}
            cancel={() => console.log('You pressed Cancel')}
            dialogContent={() => return { (<Text>This the content of the dialog box</Text>) }}
        />
*/
import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Responsive, useResponsive } from './useResponsive';

export interface propsReceive {
    title         :string;
    isshow        :boolean;
    ok?           :() => void;
    cancel?       :() => void;
    dialogContent :any;
}

export default function DialogBox(props :propsReceive, children :any) {
    if(!props.isshow) return <View style={{position: 'absolute'}}></View>;
    const responsive :Responsive = useResponsive();    
    const WIDTH     = 320;
    const HEIGHT    = 380;

    const styles = StyleSheet.create({
        container: {
            width: WIDTH, height: HEIGHT,
            position: 'absolute',
            top:  ((responsive.height - HEIGHT) / 2) - 60,
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
        buttonsContainer: {
            borderTopWidth: 2, borderColor: 'rgba(115, 170, 220, 1)',
            marginTop: 12, flexDirection: 'row',
            paddingTop: 5,
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

    //find out what are the button appear in the bottom based if that button is available or not
    function getBtnOptions() {
        if(props.ok) {
            if(props.cancel) 
                return (
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonCancel} onPress={props.cancel}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <View style={styles.borderHorizontal}></View>
                        <TouchableOpacity style={styles.buttonOK} onPress={props.ok}>
                            <Text style={styles.buttonText}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                );
            return (
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={ styles.buttonOkOnly } onPress={props.ok}>
                        <Text style={styles.buttonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={ styles.buttonOkOnly } onPress={props.cancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={{position: 'absolute', zIndex: 90}}>
            <View style={{
                width: responsive.width, height: responsive.height,
                top: 0, backgroundColor: 'rgba(0,0,0,.5)'}}>
            </View>
            <View style={styles.container}>
                <View style={{height: 310}}>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.borderline}></View>
                    <ScrollView >
                        { props.dialogContent() }
                    </ScrollView>
                </View>
                {
                    getBtnOptions()
                }
            </View>
        </View>
        
    );
}
