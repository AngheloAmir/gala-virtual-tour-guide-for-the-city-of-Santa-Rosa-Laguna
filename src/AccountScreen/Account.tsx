import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {contextProvider, StateAPI} from '../StateAPI/State';
import { setCurrentScreen } from '../StateAPI/Actions';
import { Responsive, useResponsive } from '../Utility/useResponsive';

import { createStackNavigator } from '@react-navigation/stack';

import EditDetails from './EditDetails';
import PrivacyPolicy from './PrivacyPolicy';
import AvatarIcon from '../Utility/AvatarIcon';

const Stack = createStackNavigator();
export default function AccountIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Account} options={{headerShown: false}}/>
            <Stack.Screen name="EditDetails" component={EditDetails} options={{headerShown: false}}/>
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

function Account( {navigation} :any ) {
    const { dispatch,state } :StateAPI = React.useContext(contextProvider);
    const responsive :Responsive = useResponsive();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
        },
        contentContainer: {
            //borderWidth: 1,
            //borderColor: 'red',
            height: responsive.height - 220,
        },
        headingContainer: {
            alignSelf: 'center',
            flexDirection: 'column',
            position: 'absolute',
            top: 160 - 128,
        },
        infoContainer: {
            alignSelf: 'center',
            width: responsive.containerWidth,
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
            fontWeight: '600',
            marginTop: 4,
        },
        about: {
            textAlign: 'center',
            fontSize: 16,
            marginTop: 12,
        },
        editAndPolicyContainer: {
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: responsive.containerWidth,
        },
        editAndPolicyText: {
            color: 'blue',
            fontSize: 16,
        },
        LogoutContainer: {
            alignSelf: 'center',
            marginTop: 56,
            width: responsive.width * 0.8,       
        },
    });

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/app/profilebackground.jpg')} style={{width: '100%', height: 160}} />
                <View style={styles.headingContainer}>
                    <AvatarIcon avatar={state.user.avatar} width={128} height={128} />
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.userName}> {state.user.name} </Text>
                    <Text style={styles.status}> {state.user.status} </Text>
                    <Text style={styles.about}> {state.user.about} </Text>
                </View>
            </View>
            
            <View style={styles.editAndPolicyContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('EditDetails')}> 
                    <Text style={styles.editAndPolicyText}>Edit your details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
                    <Text style={styles.editAndPolicyText}>Policy</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.LogoutContainer}>
                <Button title='Log Out' onPress={() => dispatch(setCurrentScreen('signin'))} />
            </View> 
        </ScrollView>
    );
}
