/*
  Overview
    Show the content of the:
      Home > Overview tab

    It also prepare a screen  of stack for in use in "Plaza" and "Arch" Multiview features
*/

import * as React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive, useResponsive } from '../Utility/useResponsive';

import { contextProvider, StateAPI } from '../StateAPI/State';
import { setMultiviewJson } from '../StateAPI/Actions';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import MapViewIndex   from './OverviewStack/MapViewIndex';
import PerpectiveView from './OverviewStack/PerpectiveView';
import overviewdata, { featuredMultiviewInterface, paragraphsInterface}  from '../../src-data/overview';

export default function HomeIndex() {
  return (
    <View>
      <Text>You are at home</Text>
    </View>
  )
}

/*
export default function OverviewIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Overview"       component={Overview} options={{headerShown: false}}/>
            <Stack.Screen name="MapViewIndex"   component={MapViewIndex} options={{headerShown: false}}/>
            <Stack.Screen name="PerpectiveView" component={PerpectiveView} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

function Overview({navigation} :any) {
  const { dispatch } :StateAPI = React.useContext(contextProvider);

  const responsive :Responsive = useResponsive();
  const styles = StyleSheet.create({
    content: {
      alignSelf: 'center',
      marginBottom: 24,
      marginTop: 8,
      width: responsive.width * 0.95,
    },
    headingText: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 8,
    },
    headingCardsContainer: {
      alignSelf: 'center',
      flexDirection: 'row',
    },
    headingCards: {
      marginHorizontal: 4,
      padding: 4,
      borderColor: 'rgba(115, 170, 220, .5)',
      borderRadius: 4,
      borderWidth: 1,
    },
    lookformoreContainer: {
      marginTop: 16,
      marginBottom: 16,
    },
    overviewContainer: {
      alignSelf: 'center',
      width: responsive.width * 0.9
    },
    overviewHeadingText: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 16,
      marginTop: 24,
    },
    overviewText: {
      fontSize: 20, lineHeight: 30,
    }
  });

  function handleOverviewCardsClick(jsonmap :any) {
    dispatch( setMultiviewJson(jsonmap) );
    navigation.navigate('MapViewIndex');
  }

  return (
    <ScrollView>
      <Image source={overviewdata.headingImage} style={{width: '100%', height: 280}}/>
    
      <View style={styles.content}>
        <Text style={styles.headingText}> { overviewdata.featuredMultiviewText } </Text>

        <View style={styles.headingCardsContainer}>
        {
          overviewdata.featureMultiView.map( (info :featuredMultiviewInterface, index :number) => {
            return (
              <TouchableOpacity key={index} style={styles.headingCards} onPress={ () => handleOverviewCardsClick(info.jsonmap)}>
                <Image source={info.image} style={{width: 160, height: 96}}/>
                <Text> { info.title } </Text>
            </TouchableOpacity>
            );
          })
        }
        </View> 

        <View style={styles.lookformoreContainer}>
          <Button title='look for more' onPress={() => console.log('showing more')} />
        </View>
        
        <View style={styles.overviewContainer}>
          {
            overviewdata.paragraphs.map( (info :paragraphsInterface, index :number) => {
              return (
                <View key={index}>
                  <Text style={styles.overviewHeadingText}> { info.title } </Text>
                  <Text style={styles.overviewText}>        { info.text }  </Text>
                </View>
              );
            })
          }
        </View>
        
      </View>
    </ScrollView>
  );
}
*/
