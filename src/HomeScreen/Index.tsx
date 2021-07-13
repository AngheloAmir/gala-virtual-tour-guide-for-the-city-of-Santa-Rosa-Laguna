/*
  The main container for the home screen.
  It set the the "Tab navigation" so it set what are the available 
  in the bottom tabs
*/

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import { Responsive, useResponsive } from '../Utility/useResponsive';
const Tab = createBottomTabNavigator();

export default function HomeIndex(nav :any) {
  const responsive :Responsive = useResponsive();

  const styles = StyleSheet.create({
    tabContainer: {
      height: responsive.isWeb ? responsive.height : responsive.height - 24,
    },
  })

  return (
    <View style={styles.tabContainer}>
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
        tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray', style: { height: 54, paddingBottom: 8}}}>
        <Tab.Screen name="Home"            component={HomeContainer} />
        <Tab.Screen name="Guides"          component={GuidesContainer} />
        <Tab.Screen name="Assistant Tour"  component={AssistantTourContainer} />
        <Tab.Screen name="Forum"           component={ForumContainer} />
      </Tab.Navigator>
    </View>
  );
}

/*
<Tab.Screen name="Map"              component={InteractiveMap} />

  The FF component were created to have a FIXED navbar at the top of the screen
*/

import TopBar           from '../Topbar'
import Overview         from './HomeTab';
import AssistantTour    from './AssistantTourTab';
//import Map              from './MapTab';
import Guides           from './GuidesTab';
import More             from './ForumTab';

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

/*
function InteractiveMap( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Offline Map'/>
      <Map />
    </View>
  );
}
*/

function GuidesContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Guides'/>
      <Guides />
    </View>
  );
}

function ForumContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='More'/>
      <More />
    </View>
  );
}
