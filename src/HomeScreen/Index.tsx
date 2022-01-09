/*
    * TYPE
        Index - A component that does not display itself

    * DESCRIPTION
        The main container for the home screen.
      It set the the "Tab navigation" so it set what are the available 
      in the bottom tabs

    * VISIBLE WHEN
      When the user is in Home Screen (see the drawer navigation)
*/
import * as React from 'react';
import { SafeAreaView, View, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator();

import { contextProvider, StateAPI } from '../StateAPI/State';
import { setIsHideBottomTabs } from '../StateAPI/Actions';

export default function HomeIndex() {
  const { state, dispatch } :StateAPI = React.useContext( contextProvider );

  //This use effect is used to hide bottom tab navigation when the user is typing something
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',
      () => {
        dispatch( setIsHideBottomTabs(true) );
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        dispatch( setIsHideBottomTabs(false) );
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({color}) => {
            const size = 26;
            switch(route.name) {
              case 'Home':
                return    <MaterialIcons name='home' size={size} color={color} />
              case 'Guides':
                  return  <MaterialIcons name='book' size={size} color={color} />
              case 'Places':
                return    <MaterialIcons name='place' size={size} color={color} />
              case 'Assistant Tour':
                  return  <MaterialIcons name='assistant-navigation' size={size} color={color} />
              case 'Map':
                  return  <FontistoIcon name='map' size={size} color={color} />
              case 'Forum':
                return    <MaterialIcons name='forum' size={size} color={color} />
              default:
                return    <FontAwesome5Icons name='question' size={size} color={color} />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            height:        state.isHideBottomTabs ? 0  : 54,
            paddingBottom: state.isHideBottomTabs ? 0  : 8,
            marginBottom:  state.isHideBottomTabs ? -2 : 0,
          }
        }}>
        <Tab.Screen name="Home"            component={HomeContainer} />
        <Tab.Screen name="Guides"          component={GuidesContainer} />
        <Tab.Screen name="Assistant Tour"  component={AssistantTourContainer} />
        <Tab.Screen name="Forum"           component={ForumContainer} />
      </Tab.Navigator>
    </SafeAreaView>
  )

}

//The FF component were created to have a FIXED navbar at the top of the screen
import TopBar           from '../Topbar'
import Overview         from './HomeTab';
import AssistantTour    from './AssistantTourTab';
import Guides           from './GuidesTab';
import ForumTab         from './ForumTab';

function HomeContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Home'/>
      <Overview />
    </View>
  );
}

function AssistantTourContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Assistant Tour'/>
      <AssistantTour />
    </View>
  );
}

function GuidesContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Guides'/>
      <Guides navigation={props.navigation} />
    </View>
  );
}

function ForumContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Forum'/>
      <ForumTab />
    </View>
  );
}
