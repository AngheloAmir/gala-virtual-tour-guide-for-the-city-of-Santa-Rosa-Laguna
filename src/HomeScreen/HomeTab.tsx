/*
    * TYPE
        Index - A component that does not display itself

    * DESCRIPTION
        Show the content of the Home tab based on the current Navigator values.
        This component does not directly display anything.

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab
*/

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeInitialScreen from './Home/HomeIndex';
import ExternalLinks from './Home/SceneStack/ExternalLinks';
import ViewCityMap   from './Home/SceneStack/ViewCityMap';
import LearnMore from './Home/SceneStack/LearnMore';
import CovidNews from './Home/SceneStack/CovidNews';
import ReadStory from './Home/SceneStack/ReadStory';
import MoreArticles from './Home/SceneStack/MoreArticles';

export default function HomeIndex() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home"           component={HomeInitialScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ReadStory"      component={ReadStory} options={{headerShown: false}}/>
        <Stack.Screen name="MoreArticles"   component={MoreArticles} options={{headerShown: false}}/>
        <Stack.Screen name="ExternalLinks"  component={ExternalLinks} options={{headerShown: false}}/>
        <Stack.Screen name="ViewCityMap"    component={ViewCityMap} options={{headerShown: false}}/>
        <Stack.Screen name="LearnMore"      component={LearnMore} options={{headerShown: false}}/>
        <Stack.Screen name="CovidNews"      component={CovidNews} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
