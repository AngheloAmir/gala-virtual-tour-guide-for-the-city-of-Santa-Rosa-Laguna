/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the usr account

    * VISIBLE WHEN
        When the user taps the main menu hambuger and choose account
*/
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import {contextProvider, StateAPI} from '../StateAPI/State';
import AvatarIcon from '../HomeScreen/Forum/functions/AvatarIcon';
import CalculateAgo from '../Utility/calculateago';

export default function Account( {navigation} :any ) {
    const { state } :StateAPI = React.useContext(contextProvider);

    if(!state.user.registered) {
        return (
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 20
                    }}
                >You are not yet registered.</Text>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                >Please go to Forum Tab.</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/app/background.jpg')} style={{width: '100%', height: 160}} />
                <View style={styles.headingContainer}>
                    <AvatarIcon avatarid={state.user.avatar} width={128} height={128} />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.userName}> {state.user.name} </Text>
                    <Text style={styles.status}> {state.user.description} </Text>
                    <Text style={styles.joined}>You joined at: {CalculateAgo(state.user.joined)} </Text>
                </View>
            </View>
            
            <View style={styles.editAndPolicyContainer}>
                <Button title='Edit your details' onPress={() => navigation.navigate('Edit')} />
            </View>
            
        </ScrollView>
    );
}

import { WindowDimension } from '../Utility/useResponsive';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    contentContainer: {
        //borderWidth: 1,
        //borderColor: 'red',
        height: WindowDimension.height - 318,
    },
    headingContainer: {
        alignSelf: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top: 160 - 128,
    },
    infoContainer: {
        alignSelf: 'center',
        width: '90%',
    },
    userName: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: '700',
        marginTop: 12,
    },
    status: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 8,
    },
    joined: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 24,
        fontWeight: '300',
    },
    editAndPolicyContainer: {
        alignSelf: 'center',
        width: '90%'
    },
});
