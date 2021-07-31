/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        Show the initial content of the Home > Assitant Tour Tab. It also create a stack navigator
      so when the user press the START NAVIGATING button, the AssitantTour/IndexContainer
      will be shown in the screen

    * VISIBLE WHEN
      When the user is in Home Screen and in the Assitant Tour Tab
*/
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useResponsive, Responsive } from '../Utility/useResponsive';
import { createStackNavigator } from '@react-navigation/stack';

import DialogAlert  from '../Utility/AlertBox';
import DialogBox from '../Utility/DialogBox';
import IndexContainer from './AssistantTour/AssistanTourIndex';

const Stack = createStackNavigator();
export default function MyTourIndex() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AssistantTourIndex" component={AssistantTourIndex} options={{headerShown: false}}/>
            <Stack.Screen name="IndexContainer" component={IndexContainer} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}

function AssistantTourIndex( {navigation} :any) {
  const [showDisclaimer, setDisclaimer] = React.useState(false);
  const [isFurtherReading, setFurther] = React.useState(false);
  const resposive :Responsive = useResponsive();

  const styles = StyleSheet.create({
      container: {
          width: '90%',
          marginLeft: '5%'
      },
      headingContainer: {
        marginTop: resposive.marginHorizontal/2,
        flexDirection: 'row',
      },
      title: {
          fontSize: 30,
          fontWeight: '700',
          width: '70%',
          alignSelf: 'center',
          textAlign: 'center',
      },
      description: {
          fontSize: 19,
          fontWeight: '600',
          marginTop:  resposive.marginHorizontal/3,
          textAlign: 'center',
          lineHeight: 26,
      },
      noticeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
      },
      noticeItem: {
        color: 'blue', fontSize: 15,
        textDecorationLine: 'underline',
      },
      btnContainer: {
          marginTop: resposive.marginHorizontal, zIndex: 1,
      },
  });

  return (
      <View>
          <View style={styles.container}> 
            <View style={styles.headingContainer}>
              <Image source={require('../../assets/icons/gala.png')}  resizeMode='contain' style={{width: 100, height: 100}}/>
              <Text style={styles.title}> Welcome To Assistant Tour!</Text>
            </View>
            <Text style={styles.description}> Hi! My name is Gala, your virtual tour guide (assistant tour). I'll help you the best I can amid your travel. This feature requires LOCATION (GPS) enable and MOBILE DATA (internet) connection. Have a great day! </Text>
              
              <View style={styles.noticeContainer}>
               <TouchableOpacity onPress={() => setFurther(true)}>
                  <Text style={styles.noticeItem}>Further Reading</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDisclaimer(true)}>
                  <Text style={styles.noticeItem}>Disclaimer</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btnContainer}>
                  <Button title='start navigating' onPress={ () => navigation.navigate('IndexContainer')} />
                  <Text style={{marginTop: 8, fontSize: 10}}>© router.project-osrm.org, © www.overpass-api</Text>
              </View>
          </View>

          <DialogAlert
              title='Disclaimer'
              text={DisclaimerText}
              isshow={showDisclaimer} ok={() => setDisclaimer(false)}
          /> 
          <DialogBox
              title='Further Reading'
              isshow={isFurtherReading}
              ok={() => setFurther(false)}
              dialogContent={furtherReadingDialogContent}
          />
      </View>
  );
}

//===================
const assistanttourjson = require('../../database/assistantour.json');
const DisclaimerText :string = assistanttourjson.disclaimerText;

function furtherReadingDialogContent() {
  const styles = StyleSheet.create({
    bold: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
    text: { fontSize: 20, lineHeight: 30, marginBottom: 24 }
  });
  
  return (
    <View style={{paddingHorizontal: 8}}>
      { assistanttourjson.furtherReading.map((item :any, index :number) => {
        return (
          <View key={index}>
            <Text style={styles.bold}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        )
      })}
    </View>
  );
}
