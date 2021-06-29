/*
    A component that display an accordion in a guide view
*/

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { GuideParagraphContent } from '../../../database/!interfaces/GuideContent';
import Paragraph from './Paragraph';

interface propsReceive {
    value   :GuideParagraphContent;
}

export default function Accordion(props :propsReceive) {
    const [currentOpenList, setOpenedList] = React.useState(-1);

    const styles = StyleSheet.create({
        accordionItem: {
            textAlign: 'justify',
            marginVertical: 5,
        },
        heading: {
            fontSize: 21,
            alignContent: 'stretch',
            padding: 6,
            paddingLeft: 8,
        },
        headingSelected: {
            fontSize: 21,
            alignContent: 'stretch',
            borderRadius: 8,
            backgroundColor: '#ddd',
            padding: 4,
            paddingLeft: 8,
        }
    });

    return(
        <View>
        {
        props.value.data.map((item :any, itemindex :number) => {
            return (
                <View key={itemindex} style={styles.accordionItem}>
                    <View>
                        <View>
                            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                            <TouchableOpacity style={{width: '90%'}}
                                onPress={() => {
                                if(itemindex === currentOpenList) setOpenedList(-1);
                                else setOpenedList(itemindex);
                            }}>
                                    <Text style={currentOpenList === itemindex ? styles.headingSelected : styles.heading}>{item.headingText}</Text>
                                </TouchableOpacity>
                                <View>
                                    {
                                        currentOpenList === itemindex ?
                                            <MaterialIcons name='arrow-drop-up' size={32} color={'black'} /> :
                                            <MaterialIcons name='arrow-drop-down' size={32} color={'black'} />
                                    }
                                </View>
                            </View>
                        </View>
                        {
                            currentOpenList === itemindex && <Paragraph value={props.value.data[itemindex]} isNotRenderTitle={true} />
                        }
                    </View>
                </View>
            )
        })
    }
    </View>
    )
}