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
import { WindowDimension } from '../../../Utility/useResponsive';
import AlertBox from '../../../Utility/AlertBox';

//SECRET API
import registerAUser from '../../../../secret/addUser';

import { ForumInterface, TermsAndCondText } from '../../../../database/!interfaces/ForumInterface';
const forumjson :ForumInterface = require('../../../../database/forum.json');

export default function TermsNCondScreen({navigation} :any) {
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);
    const [isRegistering, setRegistering] = React.useState(false);
    const [error, seterr] = React.useState({text: '?', ishow: false});

    async function handleRegister() {
        try {
            if(isRegistering) return;
            setRegistering(true);
            const result = await registerAUser(state.user.name, state.user.avatar, state.user.description );
            if(result.err) 
                seterr({text: 'Registration failed. Try again. \nError: ' + result.err, ishow: true});

            dispatch(updateInfo( {...state.user, uid: result._id, token: result._token, joined: result.joined, registered: true } ))
        }
        catch(err) {
            seterr({text: err + '', ishow: true});
        }
    }

    return (
        <View style={{flex: 1}}>
        <ScrollView>
            <View style={styles.container}>
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
            </View>
        </ScrollView>

        { isRegistering &&
            <View style={styles.registering}>
                <Text style={styles.registeringText}>REGISTERING</Text>
            </View>
        }

        <AlertBox title='Error on registering'
            text={error.text}
            isshow={error.ishow}
            ok={() => {
                seterr({text: '?', ishow: false});
                navigation.navigate('RegisterScreen');
            }}
        />
        </View>
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
    },
    registering: {
        position: 'absolute',
        top: 0, left: 0,
        width: WindowDimension.width,
        height: WindowDimension.height,
        zIndex: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    registeringText: {
        marginTop: (WindowDimension.height / 2) - 100,
        width: WindowDimension.width,
        color: 'white',
        backgroundColor: 'orange',
        padding: 12,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute'
    }
})
