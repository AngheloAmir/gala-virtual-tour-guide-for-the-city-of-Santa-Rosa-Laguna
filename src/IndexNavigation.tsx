/*
  The index component when the current screen is set to home.
  It set up the React Navigation screen drawer
*/

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Responsive, useResponsive } from './Utility/useResponsive';
import HomeScreenIndex from './HomeScreen/Index';
import AccountIndex from './AccountScreen/Index';
import AboutSceenIndex from './AboutScreen/About';

export default function Index() {
  const responsive :Responsive = useResponsive();
  const Drawer = createDrawerNavigator();

  const styles = StyleSheet.create({
      container: {
        flexDirection:    'column',
        height:           responsive.height,
        backgroundColor:  'rgba(230, 240, 250, 1)',
      }, 
      headingContainer: {
        height:         80,
        backgroundColor: 'rgba(115, 170, 220, 1)',
        marginBottom:   24,
      },
      brandText :{
        fontSize:       21,
        marginTop:      24,
        marginLeft:     8,
      },
    });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{activeTintColor: '#004'}}
        drawerContent={props => (
          <View style={styles.container}>
              <View style={styles.headingContainer}>
                <Text style={styles.brandText}>Main Menu</Text>
              </View>

              <DrawerItemList {...props} />
          </View>
          )}>
        <Drawer.Screen name="Home" component={HomeScreenIndex} /> 
        <Drawer.Screen name="View your forum account" component={AccountIndex} />
        
        <Drawer.Screen name="About" component={AboutSceenIndex} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
