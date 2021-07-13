import React from 'react';
import { View, Text } from 'react-native';

import TopBar from '../Topbar';

export default function IndexSupport( {navigation} :any) {
    return (
        <View>
            <TopBar navigation={navigation} title='About' />
            <Text>You are in the SUPPORT PAGE</Text>
        </View>
    );
}