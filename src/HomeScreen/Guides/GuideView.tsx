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
import { Responsive, useResponsive } from '../../Utility/useResponsive';
import { GuideContent, GuideParagraphContent } from '../../../database/!interfaces/GuideContent';
import Accordion from './Accordion';
import Paragraph from './Paragraph';

export default function GuideView() {
    const { state }  :StateAPI              = React.useContext(contextProvider);
    const responsize :Responsive            = useResponsive();
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
            width: responsize.width,
            height: responsize.width * 0.7,
        },
    });

    console.log(theguide.accordion);

    return (
        <ScrollView style={styles.guideContainer}>
            { theguide.headerImage &&
                <Image source={ theguide.headerImage } style={styles.headingImage} resizeMode='cover' />
            }
            <View style={styles.textContainer}>
                <Text style={styles.title}>{theguide.title} </Text>
                <Text style={styles.datePublish}>{theguide.date} </Text>
                {
                    theguide.contents.map((value :GuideParagraphContent, index :number ) => {
                        return <Paragraph key={index} value={value} />
                    })
                }
                { theguide.accordion && <Accordion value={theguide.accordion} /> }
            </View>
        </ScrollView>
    );
}
