import React from 'react';
import { Button, Dimensions, Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { contextProvider, StateAPI } from '../StateAPI/State';
import { setCurrentScreen } from '../StateAPI/Actions';
import { Responsive, useResponsive } from '../Utility/useResponsive';

const backgroundImage = require('../../assets/app/background.jpg');
const galaicon        = require('../../assets/app/icon.png');

export default function SignIn() {
    const { dispatch } :StateAPI = React.useContext(contextProvider);
    const [isRemember, setRemember] = React.useState(true);
    const [input, setInput]         = React.useState({username: '', password: ''});
    const responsive :Responsive    = useResponsive();

    function handleRememberPress() {
        setRemember(!isRemember);
    }

    function handleUsernameInput( value :string ) {
        setInput({...input, username: value});
    }

    function handlePasswordInput( value :string ) {
        setInput({...input, password: value});
    }

    function handleUserLogginIn() {
        console.log('Logging in');
        dispatch(setCurrentScreen('home'));
    }

    function handleSignUp() {
        console.log('Signning Up!');
    }

    function handleForgotPass() {
        console.log('Forgot pass');
    }

    const styles = StyleSheet.create({
        background: {
            height:             responsive.height,
            width:              responsive.width,
        },
        container: {
            alignSelf:          'center',
            position:           'absolute',
        },
        logo: {
            alignSelf:          'center',
            height:             128,
            width:              128,
            marginTop:          responsive.marginHorizontal,
            marginBottom:       responsive.height * 0.025,
        },
        formContainer: {
            alignSelf:          'center',
            width:              responsive.containerWidth,
        },
        textInput: {
            backgroundColor:    'white',
            borderRadius:       8,
            fontSize:           18,
            height:             38,
            marginTop:          21,
            paddingLeft:        12,
        },
        additionalOptionContainer: {
            flexDirection:      'row',
            justifyContent:     'space-between',
            marginTop:          16,
        },
        remember: {
            fontSize:           16,
            paddingLeft:        5,
        },
        forgotPass: {
            color:              'blue',
            fontSize:           12,
        },
        loginBtnContainer: {
            marginTop:          24,
        },
        signupContainer: {
            alignSelf:          'center',
            alignItems:         'center',
            marginTop:          32,
        },
        signupMessage: {
            fontSize:           16,
        },
        signupText: {
            color:              'blue',
            fontWeight:         '600',
            fontSize:           20,
        },
        footerContainer: {
            alignSelf:          'center',
           position:            'absolute',
           top:                 Platform.OS === 'web' ? responsive.height - 20 : responsive.height - 42,
        },
    });

    return (
        <View style={{flex: 1}}>
            <Image style={styles.background} source={backgroundImage} />
            <View style={styles.container}>
                {
                    responsive.orientation === 'portrait' ?
                        <Image style={styles.logo} source={galaicon} />
                    :
                        <View style={{marginTop:responsive.marginHorizontal}} />
                }
                
                <View style={styles.formContainer}>
                    <TextInput style={styles.textInput} placeholder='username' value={input.username} onChangeText={handleUsernameInput} />
                    <TextInput style={styles.textInput} placeholder='password' value={input.password} onChangeText={handlePasswordInput} secureTextEntry={true}/>
                
                    <View style={styles.additionalOptionContainer}>
                        <TouchableOpacity style={{flexDirection: 'row'}} onPress={handleRememberPress}>
                            {
                                isRemember ?
                                    <MaterialCommunityIcons name='checkbox-marked-outline' size={18} color='green' />
                                :
                                    <MaterialCommunityIcons name='checkbox-blank-outline' size={18} color='black' />
                            }
                            <Text style={styles.remember}>Remember</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleForgotPass}>
                            <Text style={styles.forgotPass}>Forgot Password</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.loginBtnContainer}>
                        <Button title='Log in' onPress={handleUserLogginIn} />
                    </View>

                    <View style={styles.loginBtnContainer}>
                        <Button title='skip' onPress={handleUserLogginIn} />
                    </View>

                    <View style={styles.signupContainer}>
                        <Text style={styles.signupMessage}> Dont have an account? </Text>
                        <TouchableOpacity onPress={handleSignUp}>
                            <Text style={styles.signupText}>Sign Up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                    <Text>Gala: Virtual Tour Guide (c) 2021</Text>
            </View>
        </View>
    );
}
