/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        A component that display the content of a guide (Home Screen > Guides)

    * VISIBLE WHEN
        When the user choose to read a Guide in the Home > Guides Tab
*/
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { contextProvider, StateAPI } from '../../StateAPI/State';
import { GuideContent, GuideParagraphContent } from '../../../database/!interfaces/GuideContent';

import Accordion from './Accordion';
import Paragraph from './Paragraph';

export default function GuideView() {
    const { state }  :StateAPI              = React.useContext(contextProvider);
    const theguide   :GuideContent | any    = state.features.guideInfo;

    const styles = StyleSheet.create({
        guideContainer: {
            paddingBottom: 24,
        },
        textContainer: {
            width: '90%', marginLeft: '5%',
        },
        title: {
            fontSize:    21,
            fontWeight:  '700',
            marginTop:   8,
        },
        paragraphContainer: {
            textAlign: 'justify',
            marginVertical: 12,
        },
        heading: {
            fontSize: 24,
            alignContent: 'stretch',
        },
        datePublish: {
            fontSize: 18,
            fontWeight: '300',
            color: 'gray',
        },
        headingImage: {
            height: 240,
            width:  '100%',
        },
        paragraph: {
            fontSize: 20, lineHeight: 28, marginBottom: 0, marginTop: 4,
        },
        contentImage: {
            height: 180,
            width:  '95%',
            marginLeft: '2.5%',
        },
        link: {
            color: 'blue',
            fontStyle: 'italic',
            textDecorationLine: 'underline'
        },
        listContainer: {

        }
    });

    function paragraph(value :GuideParagraphContent, index :number) {
        if(value.type === 'accordionList')
            return <Accordion key={index} value={value} />
        return <Paragraph key={index} value={value} />
    }

    return (
        <ScrollView style={styles.guideContainer}>
            { theguide.headerImage && <Image source={ theguide.headerImage } style={styles.headingImage} /> }
            <View style={styles.textContainer}>
                <Text style={styles.title}>{theguide.title} </Text>
                <Text style={styles.datePublish}>{theguide.date} </Text>
                {
                    theguide.contents.map((value :GuideParagraphContent, index :number ) => {
                        return paragraph(value, index);
                    })
                }
            </View>
        </ScrollView>
    );
}
