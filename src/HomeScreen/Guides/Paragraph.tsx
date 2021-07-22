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

import { Responsive, useResponsive } from '../../Utility/useResponsive';
import { GuideParagraphContent } from '../../../database/!interfaces/GuideContent';

interface propsReceive {
    value                :GuideParagraphContent;
    isNotRenderTitle?    :boolean;
}

export default function Paragraph( props :propsReceive) {
    const responsize :Responsive = useResponsive();

    const styles = StyleSheet.create({
        paragraphContainer: {
            textAlign: 'justify',
            marginVertical: 12,
        },
        heading: {
            fontSize: 21,
            textAlign: 'left',
        },
        paragraph: {
            fontSize: 18, lineHeight: 28, marginBottom: 0, marginTop: 4,
        },
        contentImage: {
            width:      responsize.width * 0.85,
            height:     (responsize.width * 0.85) * 0.7,
            alignSelf: 'center',
        },
        attributionContainer: {

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
            { props.value.image       && <ParagraphImage value={props.value} />
                
            }

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

function ParagraphImage(props :propsReceive) {
    const responsize :Responsive = useResponsive();

    const styles = StyleSheet.create({
        contentImage: {
            width:      responsize.width * 0.85,
            height:     (responsize.width * 0.85) * 0.7,
            alignSelf: 'center',
        },
        attributionContainer: {
            position: 'absolute', bottom: 1, left: 8,
            width: '100%',
            
        },
        link: {
            color: 'blue', fontSize: 12,
            textDecorationLine: 'underline',
        },
    });

    function handleLinkView() {
        //@ts-ignore
        Linking.openURL(props.value.links?.link).catch(err => console.error("Couldn't load page", err));
    }

    return (
        <View>
            { /* @ts-ignore */ }
            <Image source={ props.value.image } style={styles.contentImage} resizeMode='cover' />
                <View style={styles.attributionContainer}>
                {
                    props.value.links &&
                    <TouchableOpacity style={styles.attributionContainer} onPress={handleLinkView}>
                        <Text style={styles.link}>{props.value.links.text}</Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}