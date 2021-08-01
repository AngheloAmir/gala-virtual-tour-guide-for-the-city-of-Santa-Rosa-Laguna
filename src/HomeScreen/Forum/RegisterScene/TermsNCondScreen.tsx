/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        It show the terms and condition for the user and will proceed in registering the user in the server.
    The server will store the user name and current bio and then send the UID.

    * VISIBLE WHEN
        After continuing from the RegisterScreen by the user
*/
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

import { contextProvider } from '../../../StateAPI/State';
import { StateAPI } from '../../../StateAPI/State';
import { updateInfo } from '../../../StateAPI/Actions';

import { ForumInterface, TermsAndCondText } from '../../../../database/!interfaces/ForumInterface';
const forumjson :ForumInterface = require('../../../../database/forum.json');

export default function TermsNCondScreen() {
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);

    function handleRegister() {

        //GET THE SERVER UID

        dispatch(updateInfo( {...state.user, uid: '??', registered: true } ))

        /*
        async function saveUserInfo() {
            try {
                await AsyncStorage.setItem('userinfo', JSON.stringify(state.user) )
            }
            catch(err) {
                console.error('Failed to load user information. ' + err);
            }
        }
        saveUserInfo();
        */
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}>{forumjson.termsAndCondTitle}</Text>
            {
                forumjson.termsAndCondition.map((item :TermsAndCondText, index :number) => {
                    return (
                    <View key={index} style={styles.termsContainer}>
                        <Text style={styles.termsHeading}>{item.heading}</Text>
                        <Text style={styles.termsText}>{item.text}</Text>
                    </View>
                    )
                })
            }

            <View style={styles.aceptBtn}>
                <Button title='i accept and register' onPress={handleRegister} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%', alignSelf: 'center',
    },
    headingText: {
        fontSize: 21, fontWeight: 'bold', textAlign: 'center',
        marginVertical: 12,
    },
    termsContainer: {
        marginBottom: 16,
    },
    termsHeading: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 8,
    },
    termsText: {
        fontSize: 18, lineHeight: 28, textAlign: 'justify',
    },
    aceptBtn: {
        marginTop: 16, marginBottom: 42,
    }
})
