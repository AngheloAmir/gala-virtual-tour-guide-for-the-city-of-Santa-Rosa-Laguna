/*
    * TYPE
        Fragment of src/HomeScreen/Guides/GuideView - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        This component display a text w/o an image and/or heading text. 

    * VISIBLE WHEN
        This component is part of src/HomeScreen/Guides/GuideView and will display if the guide
    has paragaraph. See database/guides if a guide will show a paragraph component
*/
import React from 'react';
import { Image, Linking,StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GuideParagraphContent } from '../../../database/!interfaces/GuideContent';

interface propsReceive {
    value                :GuideParagraphContent;
    isNotRenderTitle?    :boolean;
}

export default function Paragraph( props :propsReceive) {
    const styles = StyleSheet.create({
        paragraphContainer: {
            textAlign: 'justify',
            marginVertical: 12,
        },
        heading: {
            fontSize: 21,
            textAlign: 'left',
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
            fontSize: 18, lineHeight: 28, marginBottom: 0, marginTop: 4,
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
    });

    function handleVisitLink(link :string | any) {
        Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    }

    return (
        <View style={styles.paragraphContainer}>
            { props.value.headingText && !props.isNotRenderTitle && <Text style={styles.heading}> {props.value.headingText} </Text> }
            { props.value.image       && <Image source={ props.value.image } style={styles.contentImage} /> }

            {
                props.value.paragraph &&
                <Text style={styles.paragraph}>{props.value.paragraph}
                    { props.value.link && props.value.linkText &&
                        <TouchableOpacity onPress={() => handleVisitLink(props.value.link)}>
                            <Text style={styles.link}> { props.value.linkText } </Text>
                        </TouchableOpacity>
                    }
                </Text>
            }
        </View>
    );
}
