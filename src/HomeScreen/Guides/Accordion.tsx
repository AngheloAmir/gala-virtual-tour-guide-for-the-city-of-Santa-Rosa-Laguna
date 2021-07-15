/*
    * TYPE
        Fragment of src/HomeScreen/Guides/GuideView - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        This component will display a list of item when that item is pressed, it additional content will
    be shown (draw). This component is well known as an Accordion (see Google for)

    * VISIBLE WHEN
        This component is part of src/HomeScreen/Guides/GuideView and will display if the guide that user
    is current being read has: "{ type: 'accordionList', data: [ ... ] }" attribure in it.
    Take a look in the database/guides to see if a guide will show an accordion list
*/
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
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
            <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                <TouchableOpacity style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}
                    onPress={() => {
                        if(itemindex === currentOpenList) setOpenedList(-1);
                        else setOpenedList(itemindex);
                }}>
                    <View style={{width: '90%'}}>
                        <Text style={currentOpenList === itemindex ? styles.headingSelected : styles.heading}>{item.headingText}</Text>
                    </View>
                    <View>
                    { currentOpenList === itemindex ?
                        <MaterialIcons name='arrow-drop-up' size={32} color={'black'} /> :
                        <MaterialIcons name='arrow-drop-down' size={32} color={'black'} />
                    }
                    </View>
                </TouchableOpacity>
            </View>
            {
                currentOpenList === itemindex && <Paragraph value={props.value.data[itemindex]} isNotRenderTitle={true} />
            }
        </View>
        )})
    }
    </View>
    )
}
