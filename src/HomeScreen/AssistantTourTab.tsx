import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { useResponsive, Responsive } from '../Utility/useResponsive';
import { createStackNavigator } from '@react-navigation/stack';

import DialogAlert  from '../Utility/DialogAlert';
import IndexContainer from './AssistantTour/IndexContainer';

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
  const [showPolicy, setPolicy]         = React.useState(false);

  const resposive = useResponsive();

  const styles = StyleSheet.create({
      backgroundImage: {
          height: resposive.height,
          width: resposive.width,
      },
      container: {
          width: '90%',
          marginLeft: '5%'
      },
      headingContainer: {
        marginTop: resposive.marginHorizontal/2,
        flexDirection: 'row',
        //borderWidth: 1,
      },
      title: {
          fontSize: 30,
          fontWeight: '700',
          width: '70%',
          //borderWidth: 1,
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
        color: 'blue', fontSize: 14,
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
                <TouchableOpacity onPress={() => setDisclaimer(true)}>
                  <Text style={styles.noticeItem}>Disclaimer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPolicy(true)}>
                  <Text style={styles.noticeItem}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.btnContainer}>
                  <Button title='start navigating' onPress={ () => navigation.navigate('IndexContainer')} />
                  <Text style={{marginTop: 8, fontSize: 10}}>*openstreetmap.org, router.project-osrm.org and www.overpass-api</Text>
              </View>
          </View>

          { showDisclaimer || showPolicy ?
            <View style={{width: 1200, height: 1200, position: 'absolute', top: 0, zIndex: 10, backgroundColor: 'rgba(0,0,0,.5)'}}>
            </View>
            :
            <View></View>
          }

          <DialogAlert
                title='Disclaimer'
                text='The GPS Navigation system used in the program may not be reliable in some cases. We do still recommend that you should use a third-party navigation system such as Google Maps and Waze. The software is provided without any warranty. Use the software in moderation and at your own risk.'
                isshow={showDisclaimer} ok={() => setDisclaimer(false)}
          />
          <DialogAlert
                title='Privacy Policy'
                text='The assistant tour feature (virtual tour guide) does not store nor retrieve your current geolocation. Also, while using this feature, it does not collect any information about you.'
                isshow={showPolicy} ok={() => setPolicy(false)}
          />
      </View>
  );
}