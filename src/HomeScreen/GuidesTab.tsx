import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import guidedata        from '../../database/guides';
import { GuideItem }    from '../../database/!interfaces/GuideItem';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { contextProvider, StateAPI } from '../StateAPI/State';
import { setGuideInfo } from '../StateAPI/Actions';

import GuideView from './Guides/GuideView';

export default function GuidesIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Guides"    component={Guides}    options={{headerShown: false}}/>
            <Stack.Screen name="GuideInfo" component={GuideView} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

function Guides( {navigation} :any) {
    const { dispatch } :StateAPI = React.useContext(contextProvider);

    function handleGuidePress({guidedata} :any) {
        dispatch(setGuideInfo(guidedata()));
        navigation.navigate('GuideInfo');
    }

    const styles = StyleSheet.create({
        container: {
            marginLeft: '2.5%',
            width: '95%',
            marginTop: 8,
        },
        guideContainer: {
            flexDirection: 'row',
            marginBottom: 12,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: '#ccc',
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
            color: 'blue',
            fontSize: 18,
            fontWeight: '600',
            paddingLeft: 0,
        },
        guideDescription: {
            alignSelf: 'stretch',
            fontSize: 16,
            paddingLeft: 12,
        }

    });

    return (
        <ScrollView style={styles.container}>
        {
            guidedata.guidelist.map( (guide :GuideItem, index :number) => {
                return (
                    <TouchableOpacity key={index} style={styles.guideContainer} onPress={() => handleGuidePress(guide)}>
                        <View style={styles.iconContainer}>
                            <Image source={guide.icon} style={styles.icon} />
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
