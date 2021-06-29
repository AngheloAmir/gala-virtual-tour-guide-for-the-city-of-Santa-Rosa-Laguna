/*
    Display the place information (like a web page) in the screen
    based on the current value of the app state.

    * This compoent is displayed on the screen after the user clicks "more info"
    in the virtual map tour (TourInteractive).
*/

import React from 'react';
import { Button, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { contextProvider, StateAPI } from '../../StateAPI/State';
import { Responsive, useResponsive } from '../../Utility/useResponsive';

interface propsReceive {
    pageback    : () => void;
}

export default function PlaceInformation(props :propsReceive) {
    const { state } :StateAPI =     React.useContext(contextProvider);
    const responsive :Responsive =  useResponsive();
    
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
            //borderColor: 'red', borderWidth: 1
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

 /*
<Text style={{flexDirection: 'row'}}>
                    <Text style={styles.placeinfobold}>Longitude: 
                        <Text style={styles.placeinfoLat}> {state.map.markerdescription.longitude}</Text>
                    </Text>
                    <Text style={styles.placeinfobold}>Latitude: 
                        <Text style={styles.placeinfo}> {state.map.markerdescription.latitude}</Text>
                    </Text>
                </Text>





        <ScrollView style={styles.container}>
            <Text style={styles.placename}>
                { place ? place.name : 'undefined name of the place' }
            </Text>

            { place.headerimage &&
                <View style={{marginVertical: 8}}>
                    <Image source={place.headerimage} style={styles.placeimage} resizeMode='cover'/>
                </View>
            }
            
            { place.address &&
                <View style={styles.item}>
                    <Text style={styles.bold}>Address: </Text>
                    <Text style={styles.itemText}>{place.address}</Text>
                </View>
            }

            { place.latitude && place.latitude &&
                <View style={styles.item}>
                    <Text style={styles.bold}>Geolocation: </Text>
                    <Text style={styles.itemText}>{place.latitude} / {place.longitude}</Text>
                </View>
            }

            { place.website &&
                <View style={styles.item}>
                    <Text style={styles.bold}>Website: </Text>
                    <TouchableOpacity onPress={handleWebsiteVisit}>
                        <Text style={styles.link}>{place.website}</Text>
                    </TouchableOpacity>
                </View>
            }

            { place.contents && place.contents.map((content, index) => {
                 return (
                    <View style={styles.contentContainer} key={index}>
                        { content.headingText &&  <Text style={styles.headingText}>{content.headingText}</Text>}
                        { content.image &&        <Image source={content.image} style={styles.contentImage} />}
                        { content.paragraph &&    <Text style={styles.contentParagraph}>    {content.paragraph}</Text>}
                    </View>
                 )
            })
            }

            { responsive.isWeb && <Button title='back' onPress={handlePageBack} /> }

            <Dialog title='Open Link?' text={dialogmsg} isshow={dialogshow}
                ok={handleOKVisit} cancel={handleCancel}
            />
        </ScrollView>



const [dialogshow, setshow] =   React.useState(false);
    const [dialogmsg, setmsg]  =    React.useState('');

    const place :PlaceInformationInterface = state.features.placeInfo();

    function handlePageBack() {
        props.pageback();
    }

    function handleWebsiteVisit() {
        setmsg('Open the link: ' + place.website + ' using your default browser?');
        setTimeout(() => setshow(!dialogshow), 0);
    }

    function handleOKVisit() {
        Linking.canOpenURL(place.website).then(supported => {
            if (supported) {
              Linking.openURL(place.website);
            }
        });
        handleCancel();
    }

    function handleCancel() {
        setshow(false);
    }

    const styles = StyleSheet.create({
        container: {
            width: '90%', marginLeft: '5%',
            flexDirection: 'column',
        },
        placename: {
            alignSelf: 'center', fontSize: 26, fontWeight: '700', marginVertical: 10,
        },
        placeimage: {
            width: responsive.width - 35, height: (responsive.width - 35),
        },
        contentContainer: {
            marginTop: 8, marginBottom: 4,
        },
        headingText: {
            fontSize: 24, fontWeight: '700', marginVertical: 20,
        },
        contentImage: {
            width: 128, height: 128, alignSelf: 'center',
        },
        contentParagraph: {
            fontSize: 20, textAlign: 'justify', lineHeight: 30,
        },
        item: {
            flexDirection: 'row',
        },
        bold: {
            fontSize: 20, fontWeight: '700',
        },
        itemText: {
            fontSize: 20,
        },
        link :{
            color: 'blue', fontStyle: 'italic', textDecorationLine: 'underline',
            fontSize: 20,
        }
    });

    return (
       <View>
           <Text>This is the place information</Text>
       </View>
    );

        */