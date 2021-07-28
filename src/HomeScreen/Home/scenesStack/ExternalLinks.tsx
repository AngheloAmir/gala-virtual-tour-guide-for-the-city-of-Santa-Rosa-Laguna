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
import { View, ScrollView, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';

import ASSETS from '../../../../database/assets';
import { homejson } from '../functions/homejson';
import { ExternalLinks,
         ExternalLinksContents
        } from '../../../../database/!interfaces/ExternalLinks';

export default function ExternalLinksView( {navigation} :any) {
    //@ts-ignore
    const externallinksjson :ExternalLinks = ASSETS[ homejson.externalinksjson ];

    function openlink(link :string) {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
        }});
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}>{externallinksjson.title}</Text>            
            {
                externallinksjson.contents.map( (item :ExternalLinksContents, index :number) => {
                return (
                    <View style={styles.linkItem} key={index}>
                        <View style={styles.content}>
                            <Text style={styles.linkname}>{item.linkname}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <TouchableOpacity style={styles.linkContainer} onPress={() => openlink(item.link)}>
                                <Text style={styles.visitthelink}> {item.linkShort} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )})
            }
            <View style={styles.footer}>
                <Text style={styles.footerText}>{externallinksjson.notice}</Text>
            </View>
        </ScrollView>
    )
}
 //https://web.facebook.com/citygovernmentofsantarosa/about/?ref=page_internal
const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    headingText: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 8,
    },
    linkItem: {
        flexDirection: 'row',
        padding: 4,
        marginTop: 16,
        borderColor:  'rgba(115, 170, 220, 0.4)',
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'justify',
    },
    content: {
        flex: 1, paddingHorizontal: 8, paddingVertical: 4,
    },
    linkname: {
        fontSize: 20, color: 'darkblue' 
    },
    description: {
        alignSelf: 'stretch',
        fontSize: 18,
        paddingLeft: 16,
    },
    linkContainer: {
        alignSelf: 'center',
        marginTop: 4,
    },
    visitthelink: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    footer: {
        marginVertical: 18,
    },
    footerText: {
        fontSize: 14, fontStyle: 'italic',
    }
})
