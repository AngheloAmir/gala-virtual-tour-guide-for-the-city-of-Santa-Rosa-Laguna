import React from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Responsive, useResponsive } from './useResponsive';

export interface propsReceive {
    title    :string;
    isshow   :boolean;
    items    :Array<{
        name         :string;
        description? :string;
    }>;
    onSelect :(item :string, index :number) => void;
    onCancel :() => void;
}

export default function ListDialog(props :propsReceive) {
    if(!props.isshow) return <View></View>;
    const responsive :Responsive = useResponsive();    
    const WIDTH      = 320;
    const HEIGHT     = 380;
    const CONTHEIGHT = 310;

    const styles = StyleSheet.create({
        container: {
            position: 'absolute', width: WIDTH, height: HEIGHT,
            top:  ((responsive.height - HEIGHT ) / 2) - 50,
            left: ((responsive.width - WIDTH) /2),
            backgroundColor: 'white', borderWidth: 1,
            borderRadius: 8, padding: 8, zIndex: 100,
        },
        title: {
            fontSize: 21, fontWeight: '500', textAlign: 'center',
        },
        borderline :{
            borderWidth: 1, height: 1,
            borderColor: 'rgba(115, 170, 220, 1)', marginVertical: 8,
        },
        itemsContainer: {
            width: '95%', marginLeft: '2.5%'
        },
        item: {
            borderColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 1, 
            marginBottom: 8,  paddingLeft: 12,
        },
        itemLast: {
            marginBottom: 8, paddingLeft: 12,
        },
        text: {
            color: 'rgba(60, 80, 160, 1)',
            fontSize: 20, fontWeight: '500', 
        },
        textDescription: {
            fontSize: 18, lineHeight: 28, paddingLeft: 20, padding: 8
        },
        buttonsContainer: {
            borderTopWidth: 2, borderColor: 'rgba(115, 170, 220, 1)',
            marginTop: 12, flexDirection: 'row',
        },
        buttonOkOnly: {
            width: 280, paddingTop: 4,
        },
        buttonText: {
            fontSize: 21, textAlign: 'center', color: '#338',
        }
    });

    return (
        <View style={styles.container}>
            <View style={{height: CONTHEIGHT}}>
                <Text style={styles.title}>{props.title}</Text>
                <View style={styles.borderline}></View>
                <ScrollView style={styles.itemsContainer}>
                    {
                        props.items.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={index == props.items.length -1 ? styles.itemLast :styles.item }
                                    onPress={() => props.onSelect(item.name, index)}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    { item.description &&
                                        <Text style={styles.textDescription}>{item.description}</Text>
                                    }
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </View>
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={ styles.buttonOkOnly } onPress={props.onCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}