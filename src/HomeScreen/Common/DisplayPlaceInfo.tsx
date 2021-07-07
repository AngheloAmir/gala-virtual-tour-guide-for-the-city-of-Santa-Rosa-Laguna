/*
    Display the place information (like a web page) in the screen
    based on the current value of the app state.

    * This compoent is displayed on the screen after the user clicks "more info"
    in the virtual map tour (TourInteractive).
*/

import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { contextProvider, StateAPI } from '../../StateAPI/State';
//import { Responsive, useResponsive } from '../../Utility/useResponsive';

interface propsReceive {
    pageback    : () => void;
}

export default function PlaceInformation(props :propsReceive) {
    const { state } :StateAPI =     React.useContext(contextProvider);
    //const responsive :Responsive =  useResponsive();
    
    const styles = StyleSheet.create({
        container: {
            paddingBottom: 24,
        },
        textContainer: {
            width: '95%', marginLeft: '5%',
        },
        headingImage: {
            height: 240,
            width:  '100%',
        },
        title: {
            fontSize:    21,
            fontWeight:  '600',
            marginTop:   8,
        },
        placeinfo: {
            fontSize: 18,
            fontWeight: '300',
            marginTop: 4,
        },
        placeinfoLink: {
            fontSize: 18,
            fontWeight: '300',
            color: 'blue', marginTop: 4,
            textDecorationLine: 'underline'
        },
        contentInfoContainer: {
            marginTop: 4,
        },
        paragraphContainer: {
            marginTop: 12, marginBottom: 21,
            width: '90%', marginLeft: '5%',
        },
        paragraphHeading: {
            fontSize: 21, marginBottom: 4,
            textAlign: 'left',
        },
        paragrapImage: {
            height: 240,
            width:  '100%',
        },
        paragraph: {
            fontSize: 18, lineHeight: 28, marginBottom: 0, marginTop: 4,
            textAlign: 'justify',
        },
    });

    function visitTheLink() {

    }

    return (
        <ScrollView style={styles.container}>
            { state.map.markerdescription && <Image source={ state.map.markerdescription.getImage() } style={styles.headingImage} /> }
            <View style={styles.textContainer}>
                <Text style={styles.title}>{state.map.markerdescription.name} </Text>
                <Text style={styles.placeinfo}>{state.map.markerdescription.address}</Text>
                {
                    state.map.markerdescription.website &&
                    <TouchableOpacity onPress={visitTheLink}>
                        <Text style={styles.placeinfoLink}>{state.map.markerdescription.website}</Text> 
                    </TouchableOpacity>
                }
            </View>

            <View style={styles.contentInfoContainer}>
                {
                    state.map.markerdescription.getDescriptipn().map((item, index) => {
                        return (
                            <View key={index} style={styles.paragraphContainer}>
                                { item.title && <Text style={styles.paragraphHeading}>{item.title}</Text> }
                                { item.image && <Image style={styles.paragrapImage} source={item.image} /> }
                                { item.paragraph && <Text style={styles.paragraph}>{item.paragraph}</Text> }
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
