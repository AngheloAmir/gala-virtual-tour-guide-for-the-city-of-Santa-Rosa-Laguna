/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Display the initial register screen

    * VISIBLE WHEN
        When the user goes into the Forum tab but the user account (device account) is not receive an
        registration id from the server
*/
import React from 'react';
import { View, Text, TextInput, ScrollView,
        StyleSheet, TouchableOpacity, ImageSourcePropType,
        Image, Button }
        from 'react-native';
import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../../../database/assets';

import { contextProvider }  from '../../../StateAPI/State';
import { StateAPI }         from '../../../StateAPI/State';
import { updateInfo }       from '../../../StateAPI/Actions';
import TermsNCondScreen     from './TermsNCondScreen';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function RegisterScreenIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name="TermsNCondScreen" component={TermsNCondScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

function RegisterScreen({navigation} :any) {
    const { dispatch } :StateAPI = React.useContext(contextProvider);

    const [userName, setName]   = React.useState('');
    const [descrp, setDesc]     = React.useState('');
    const [avid, setav]         = React.useState(0);
    const [isError, setError]   = React.useState(false);

    function avatarIconStyle(id :number) {
        if(id === avid)
            return styles.avatarActive;
        return styles.avatarNonActive;
    };

    function handleRegister() {
        if(userName.length < 1 ) {
            setError(true);
            return;
        }
        dispatch(updateInfo({
            name:           userName,
            description:    descrp.length == 0 ? 'happy' : descrp,
            avatar:         avid,
            uid:            'secret token',
            token:          'secret token',
            registered:     false,
            joined:         0,
        }));
        navigation.navigate('TermsNCondScreen');
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headingText}> Create an account</Text>
            <View style={styles.informationContainer}>
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

            <View style={{marginBottom: 24}}>
                <Button title='Continue' onPress={handleRegister} />
            </View>
        </ScrollView>
    );
}

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
    informationContainer: {

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
});
