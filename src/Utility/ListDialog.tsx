import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import DialogBox from './DialogBox';

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

export default function ListBox(props :propsReceive) {
    return (
        <DialogBox
            title={props.title}
            isshow={props.isshow}
            cancel={props.onCancel}
            dialogContent={() => dialogContent(props)}
        />
    )
}

function dialogContent(props :propsReceive) {
    const styles = StyleSheet.create({
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
    });

    return (
        <View>
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
        </View>
    );
}
