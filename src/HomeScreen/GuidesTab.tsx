/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        Show the content of the Home > Guide tab. It also create a stack navigator so when the user 
    choose to read a guide, that guide will be show as a scene.

    * VISIBLE WHEN
      When the user is in Home Screen and in the Guide Tab
*/
//@ts-nocheck
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function GuidesIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Guides"    component={Guides}    options={{headerShown: false}}/>
            <Stack.Screen name="GuideInfo" component={GuideView} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

import { contextProvider, StateAPI } from '../StateAPI/State';
import { setGuideInfo } from '../StateAPI/Actions';

import { GuideItem }    from '../../database/!interfaces/GuideItem';
import { GuideData }    from '../../database/!interfaces/GuideData';
import { GuideParagraphContent,
         GuideContent } from '../../database/!interfaces/GuideContent';
import ASSETS from '../../database/assets';
import GuideView from './Guides/GuideView';
const guidejson :GuideData = require('../../database/guides.json'); 

function Guides( {navigation} :any) {
    const { dispatch } :StateAPI = React.useContext(contextProvider);

    function handleGuidePress(guidecontent :string) {
        const jsondata = ASSETS[guidecontent];
        const guideContent :GuideContent = {
            title:       jsondata.title,
            date:        jsondata.date,
            headerImage: ASSETS[ jsondata.headerImage ],
            contents:    jsondata.contents && jsondata.contents.map((item :GuideParagraphContent) => {
                return {
                ...item, image: ASSETS[item.image],
            }}),
            accordion: jsondata.accordion && jsondata.accordion.map((item :GuideParagraphContent) => {
                return {
                ...item, image: ASSETS[item.image],
            }}),
        }
        dispatch(setGuideInfo( guideContent ));
        navigation.navigate('GuideInfo');
    }

    return (
    <ScrollView style={styles.container}>
        {
        guidejson.guidelist.map( (guide :GuideItem, index :number) => {
            return (
                <TouchableOpacity key={index} style={styles.guideContainer} onPress={() => handleGuidePress(guide.guidedata)}>
                    <View style={styles.iconContainer}>
                        {/*@ts-ignore*/}
                        <Image source={ASSETS[guide.icon]} style={styles.icon} />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.guideTitle}>{guide.title}</Text>
                        <Text style={styles.guideDescription}>{guide.description} </Text>
                    </View>
                </TouchableOpacity>
            );
        })
        }
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: '5%',
        width: '90%',
        marginTop: 8,
    },
    guideContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: 'rgba(115, 170, 220, 1)',
        padding: 4,
    },
    icon: {
        width: 64, height: 64,
        marginTop: 8, marginLeft: 8,
    },
    iconContainer: {
        width: 80,
    },
    descriptionContainer: {
        flex: 1,
    },
    guideTitle: {
        color: 'darkblue',
        fontSize: 20,
        paddingLeft: 0,
    },
    guideDescription: {
        alignSelf: 'stretch',
        fontSize: 18,
        paddingLeft: 12,
    }
});
