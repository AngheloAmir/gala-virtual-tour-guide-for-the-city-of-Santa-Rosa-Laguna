/*
  The index component when the current screen is set to home.
  It set up the React Navigation screen drawer

*/

import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Responsive, useResponsive } from './Utility/useResponsive';
import HomeScreenIndex from './HomeScreen/Index';
import TopBar from './Topbar';
import Account from './AccountScreen/Account';

const backgroundimg = require('../assets/app/profilebackground.jpg');

export default function Index() {
  const responsive :Responsive = useResponsive();
  const Drawer = createDrawerNavigator();

  const styles = StyleSheet.create({
      container: {
          flexDirection:    'column',
          height:           responsive.height,
          backgroundColor:  'rgba(230, 240, 250, 1)',
      },
      headingBackground: {
          height:           120,
          width:            '100%',
          marginBottom:     24,
          borderWidth:      1,
          borderColor:      '#8ac',
      },
      headingContainer: {
          position:       'absolute',
          top:            0,
          marginLeft:     8,
          marginTop:      12,
      },
      headingBrandContainer: {
          flexDirection: 'row',
      },
      brandText :{
          alignSelf:      'center',
          fontSize:       21,
          marginLeft:     12,
      },
    });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{activeTintColor: '#004'}}
        drawerContent={props => (
          <View style={styles.container}>
              <Image style={styles.headingBackground} source={backgroundimg} />
              <View style={styles.headingContainer}>
                  <View style={styles.headingBrandContainer}>
                      <Text style={styles.brandText}>Main Menu</Text>
                  </View>
              </View>
              <DrawerItemList {...props} />
          </View>
          )}>
        <Drawer.Screen name="Home" component={HomeScreenIndex} />
        <Drawer.Screen name="Your Account" component={AccountContainer} />
        <Drawer.Screen name="Help and Support" component={TEST} />
        <Drawer.Screen name="Settings" component={TEST} />
        <Drawer.Screen name="About" component={TEST} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function AccountContainer( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='Account'/>
      <Account />
    </View>
  );
}

function TEST( props :any) {
  return (
    <View style={{flex: 1}}>
      <TopBar navigation={props.navigation} title='TEST'/>
      <Text style={{fontSize: 32, marginTop: 64, textAlign: 'center'}}>Under Developement.</Text>
    </View>
  );
}
