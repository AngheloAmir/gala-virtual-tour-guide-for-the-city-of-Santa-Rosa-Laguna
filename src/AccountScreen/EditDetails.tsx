/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Display the edit screen

    * VISIBLE WHEN
        When the user is editing its account

*/
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, ScrollView,
        StyleSheet, TouchableOpacity, ImageSourcePropType,
        Image, Button }
        from 'react-native';
import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../database/assets';

import { contextProvider }  from '../StateAPI/State';
import { StateAPI }         from '../StateAPI/State';
import { updateInfo }       from '../StateAPI/Actions';

import AlertBox from '../Utility/AlertBox';

//Secret API
import { updateuser } from '../../secret/key';

export default function RegisterScreen({navigation} :any) {
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);

    const [userName, setName]   = React.useState(state.user.name);
    const [descrp, setDesc]     = React.useState(state.user.description);
    const [avid, setav]         = React.useState(state.user.avatar);
    const [isError, setError]   = React.useState(false);
    const [isSending, setSendin]= React.useState(false);
    const [errorDialog, setErr]     = React.useState({text: '', show: false});

    function avatarIconStyle(id :number) {
        if(id === avid)
            return styles.avatarActive;
        return styles.avatarNonActive;
    };

    //update the user info that is stored in the Async storage of the app
    function saveuserinfo() {
        setTimeout( async () => {
            await AsyncStorage.setItem('userinfo', JSON.stringify(state.user) );
        }, 100)
    }

    async function handleRegister() {
        if(isSending) return;
        setSendin(true);
        if(userName.length < 1 ) {
            setError(true);
            return;
        }
        try {
            await fetch( updateuser , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username:   userName,
                    _id:        state.user.uid,
                    _token:     state.user.token,
                    avatar:     avid,
                    description: descrp
                })
            });
            dispatch(updateInfo({
                name:       userName,
                uid:        state.user.uid,
                token:      state.user.token,
                avatar:     avid,
                description: descrp,
                registered:     true,
                joined: state.user.joined
            }));
            setSendin(false);
            navigation.navigate('AccountMain');
            saveuserinfo();
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSendin(false);
        }
    }

    return (
        <View style={{paddingBottom: 32}}>
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}> Edit account</Text>
            <View>
                <View style={styles.form}>
                    <Text style={ !isError ? styles.formText : styles.formTextEmpty}>Nickname:</Text>
                    <TextInput  style={styles.formInput}
                        placeholder='Nickname (required)'
                        value={userName}
                        maxLength={24}
                        onChangeText={ str => setName(str)}
                    />
                </View>

                <View style={styles.form}>
                    <Text style={styles.formText}>Your Bio (Optional):</Text>
                    <TextInput  style={styles.formInput}
                        placeholder='Bio (description)'
                        value={descrp}
                        maxLength={128}
                        onChangeText={ str => setDesc(str)}
                    />
                </View>
            </View>

            <Text style={styles.formTextAvatar}> Choose Profile Avatar </Text>
            <View style={styles.avatarContainer}>
                {
                    AVATARICONS_MALE.map((icon :ImageSourcePropType, index :number) => {
                        return (
                            <TouchableOpacity key={index}
                                style={avatarIconStyle(index)}
                                onPress={() => setav(index)}>
                                <Image source={icon}
                                    style={{height: 48, width: 48}}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={styles.avatarContainer}>
                {
                    AVATARICONS_FEMALE.map((icon :ImageSourcePropType, index :number) => {
                        return (
                            <TouchableOpacity key={index}
                                style={avatarIconStyle(index + AVATARICONS_MALE.length)}
                                onPress={() => setav(index + AVATARICONS_MALE.length)}>
                                <Image source={icon}
                                    style={{height: 48, width: 48}}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <View style={{flexDirection:'row', justifyContent: 'space-evenly', marginBottom: 24}}>
                <View style={{width: '40%'}}>
                    <Button title='Cancel' onPress={() => navigation.navigate('AccountMain')} />
                </View>
                <View style={{width: '40%'}}>
                    <Button title='Continue' onPress={handleRegister} />
                </View>
            </View>
        </ScrollView>

            <AlertBox
                title='Error your information'
                text={errorDialog.text}
                ok={() => setErr({text: '', show: false}) }
                isshow={errorDialog.show}
            />

            { isSending &&
                <View style={styles.sending}>
                    <Text style={styles.sendingText}>Updating your information...</Text>
                </View>
            } 
        </View>

    );
}

import { WindowDimension } from '../Utility/useResponsive';
const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    headingText: {
        borderColor: 'rgba(115, 170, 220, 1)', borderWidth: 2,
        justifyContent: 'center',
        fontSize: 21,    
        textAlign: 'center',
        marginVertical: 8, borderRadius: 16,
    },
    form: {
        flexDirection: 'column',
        paddingHorizontal: 4,
        width: '100%',
    },
    formText: {
        fontSize: 18,
        paddingVertical: 8,
    },
    formTextEmpty: {
        fontSize: 21, fontWeight: 'bold',
        paddingVertical: 8,
        color: 'red',
    },
    formInput: {
        backgroundColor:    'white',
        borderRadius:       8,
        fontSize:           18,
        height:             32,
        paddingLeft:        16,
    },
    formTextAvatar: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        marginTop: 16,
        marginBottom: 16,
    },
    avatarContainer: {
        width: '90%', alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16, marginBottom: 32,
    },
    avatarActive: {
        borderColor: 'blue',
        borderRadius: 16,
        borderWidth: 2,
        padding: 10,
    },
    avatarNonActive: {
        padding: 12,
    },
    sending: {
        position: 'absolute',
        top: 0, left: 0,
        width: WindowDimension.width,
        height: WindowDimension.height,
        zIndex: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    sendingText: {
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
});
