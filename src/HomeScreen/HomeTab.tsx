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

import { localContextProvider, createDefaultState } from './Home/localstateAPI/state';
import { rootreducer } from './Home/localstateAPI/reducer';

import HomeInitialScreen  from './Home/HomeIndex';
import ReadStory          from './Home/scenesStack/ReadStory';
import ExternalLinks      from './Home/scenesStack/ExternalLinks';
import ViewCityMap        from './Home/scenesStack/ViewCityMap';
import WebView            from './Home/scenesStack/Webview';
import ReadPlaceInfo      from './Home/scenesStack/ReadPlaceInfo';

export default function HomeIndex() {
  const [localState, localDispatch] = React.useReducer(rootreducer, createDefaultState());
  
  return (
    <localContextProvider.Provider value={{localState, localDispatch}}>
      <Stack.Navigator>
        <Stack.Screen name="Home"           component={HomeInitialScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ReadStory"      component={ReadStory} options={{headerShown: false}}/>
        <Stack.Screen name="ExternalLinks"  component={ExternalLinks} options={{headerShown: false}}/>
        <Stack.Screen name="ViewCityMap"    component={ViewCityMap} options={{headerShown: false}}/>
        <Stack.Screen name="WebView"        component={WebView} options={{headerShown: false}}/>
        <Stack.Screen name="ReadPlaceInfo"  component={ReadPlaceInfo} options={{headerShown: false}}/>
      </Stack.Navigator>
    </localContextProvider.Provider>
  );
}
