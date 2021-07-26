/*
    * TYPE
        Fragment of src/HomeScreen/Home/HomeIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the content of the bottom part of the home screen, where there were a lot of buttons

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab
*/
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//@ts-ignore
import FoundationIcon from 'react-native-vector-icons/Foundation';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//@ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { WindowDimension } from '../../../Utility/useResponsive';
import { buttonstext } from '../functions/homejson';

const iconColor = 'rgba(40, 100, 160, 1)';
const iconSize  = 36;

export default function ButtonsItems( {navigation} :any ) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('ViewCityMap')}>
                <View style={styles.icon}>
                    <FoundationIcon name='map'size={iconSize} color={iconColor} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingtext}>Online city map with street view</Text>
                    <Text style={styles.text}>    {buttonstext.cityMapText}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('LearnMore')}>
                <View style={styles.icon}>
                    <MaterialIcons name='history-edu'size={iconSize} color={iconColor} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingtext}>Learn more about the city</Text>
                    <Text style={styles.text}>   {buttonstext.aboutcity}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('ExternalLinks')}>
                <View style={styles.icon}>
                    <FontAwesome5 name='external-link-alt'size={iconSize} color={iconColor} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingtext}>External links</Text>
                    <Text style={styles.text}>   {buttonstext.externalLinkText}</Text>
                </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles.menuItemContainer} onPress={() => navigation.navigate('CovidNews')}>
                <View style={styles.icon}>
                    <FontAwesome5 name='exclamation-triangle'size={iconSize} color={iconColor} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingtext}>Latest news about Covid-19</Text>
                    <Text style={styles.text}>   {buttonstext.cityCovidNews}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%', alignSelf: 'center',
        marginTop: 8,
    },
    menuItemContainer: {
        borderWidth: 1, borderRadius: 16,
        marginTop: 24, flexDirection: 'row',
        borderColor: 'rgba(115, 170, 220, 1)',
        padding: 4,
        textAlign: 'justify',
    },
    icon: {
        marginRight: 16,
        marginLeft: 8,
        marginTop: 16,
    },
    textContainer: {
        flexDirection: 'column',
        width: WindowDimension.width * 0.7,
    },
    headingtext: {
        fontSize: 20,
        color: 'darkblue' 
    },
    text: {
        fontSize: 18,
    }
});
  