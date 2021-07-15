/*
    * TYPE
        Index - A component that does not display itself

    * DESCRIPTION
        Show the content of the Home > Forum tab. It show the initial scene in the forum tab which depend if
      the device is already been registered or not. 

    * VISIBLE WHEN
      When the user is in Home Screen and in the Forum Tab
*/
import React from 'react';
import { Text, View } from 'react-native';

export default function Forum() {
  return (
    <View>
      <Text> You are at the FORUM TAB </Text>
    </View>
  );
}
