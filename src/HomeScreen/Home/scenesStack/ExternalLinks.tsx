/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the content of the External lists

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "External List" button.
*/
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import ASSETS from '../../../../database/assets';
import { homejson } from '../functions/homejson';
import { ExternalLinks,
         ExternalLinksContents
        } from '../../../../database/!interfaces/ExternalLinks';

export default function ExternalLinksView( {navigation} :any) {
    //@ts-ignore
    const externallinksjson :ExternalLinks = ASSETS[ homejson.externalinksjson ];

    return (
        <View style={styles.container}>
            <Text>{externallinksjson.title}</Text>            
            {
                externallinksjson.contents.map( (item :ExternalLinksContents, index :number) => {
                return (
                    <View key={index}>
                        <Text>{item.linkname}</Text>
                        <Text>{item.description}</Text>
                        <TouchableOpacity>
                            <Text>{item.link}</Text>
                        </TouchableOpacity>
                    </View>
                )})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },

})
