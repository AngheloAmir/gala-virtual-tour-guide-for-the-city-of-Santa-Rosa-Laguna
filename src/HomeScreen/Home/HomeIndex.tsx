/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        Show the intial content of the Home > Home tab

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab
*/

import * as React from 'react';
import { ScrollView } from 'react-native';

import HomeHeading    from './components/HomeHeading';
import OfflineStories from './components/OfflineStories';
import ButtonsItems   from './components/ButtonsItems';
import Footer         from './components/Footer';

export default function Home( {navigation} :any) {
    return (
      <ScrollView style={{marginBottom: 24}}>
        <HomeHeading />
        <OfflineStories navigation={navigation} />
        <ButtonsItems   navigation={navigation} />
        <Footer         navigation={navigation} />
      </ScrollView>
    );
}
