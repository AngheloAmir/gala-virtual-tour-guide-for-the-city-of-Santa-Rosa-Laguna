/*
    The index container for Account Screen
*/
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Topbar from '../Topbar';
export default function AccountIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AccountMain" component={AccountContainer} options={{headerShown: false}}/>
            <Stack.Screen name="Edit" component={EditDetailsContainer} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

import Account from './Account';
import EditDetails from './EditDetails';

function AccountContainer({navigation} :any) {
    return (
        <SafeAreaView>
            <Topbar navigation={navigation} title='Forum Account' />
            <Account navigation={navigation} />
        </SafeAreaView>
    )
}

function EditDetailsContainer({navigation} :any) {
    return (
        <SafeAreaView>
            <Topbar navigation={navigation} title='Edit Details' />
            <EditDetails navigation={navigation} />
        </SafeAreaView>
    )
}
