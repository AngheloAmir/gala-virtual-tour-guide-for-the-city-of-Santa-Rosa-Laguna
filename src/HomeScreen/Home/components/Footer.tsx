/*
    * TYPE
        Fragment of src/HomeScreen/Home/HomeIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the content of the footer part of the home screen

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab
*/
import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Footer( {navigation} :any) {
    const iconColor = 'rgba(40, 100, 160, 1)';
    const iconSize  = 32;
    
    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>OUR OFFICIAL LINKS</Text>
            <View style={styles.siteContainer}>
                <TouchableOpacity>
                    <MaterialIcons name='facebook'size={iconSize} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='web'size={iconSize} color={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name='github'size={iconSize} color={iconColor} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingTop: 12,
        paddingBottom: 18,
        backgroundColor: 'rgba(230, 240, 250, 1)',
        borderTopColor: 'rgba(115, 170, 220, 1)',
        borderTopWidth: 1,
    },
    headingText: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 12,
    },
    siteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

