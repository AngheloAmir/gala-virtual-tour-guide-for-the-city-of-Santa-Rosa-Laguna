/*
    * TYPE
        Index - A component that does not display itself but display a component depending on the
        current state.

    * DESCRIPTION
        Show the content of the Home > Forum tab. It show the initial scene in the forum tab which depend if
      the device is already been registered or not. 

    * VISIBLE WHEN
      When the user is in Home Screen and in the Forum Tab

    * HOW IT WORKS
      Checking whether the was registered or not is by checking the async storage
      instead of looking in the server for its registration. This reduce the call to the server since
      user information is not critical information.
*/
import React from 'react';
import { Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { contextProvider } from '../StateAPI/State';
import { StateAPI } from '../StateAPI/State';
import { updateInfo } from '../StateAPI/Actions';

import RegisterScreenIndex from './Forum/RegisterScene/RegisterScreen';
import ForumIndex from './Forum/ForumIndex';

export default function Forum() {
  const { state, dispatch } :StateAPI = React.useContext(contextProvider);
  const [isInfoLoaded, setLoaded]     = React.useState(false);

  React.useEffect( () => {
    async function loadUserInformation() {
      try {
        const userinfo = await AsyncStorage.getItem('userinfo');
        if(userinfo == null) 
            await AsyncStorage.setItem('userinfo', JSON.stringify(state.user) )
        else 
            dispatch(updateInfo( JSON.parse(userinfo) ));
        setLoaded(true);
      }
      catch(err) {
        console.error('Failed to load user information. ' + err);
      }
    }
    loadUserInformation();
  }, []);

  //This effect is called after the user was registered
  React.useEffect(() => {
    async function saveuserinfo() {
        await AsyncStorage.setItem('userinfo', JSON.stringify(state.user) );
    }
    saveuserinfo();
  }, [state.user.registered]);

  if(!isInfoLoaded) 
    return (
      <View>
        <Text style={{fontSize: 21}}>...Loading your information...</Text>
      </View>
  );

  return (
    <View style={{flex: 1}}>
      {
      !state.user.registered ?
        <RegisterScreenIndex /> : <ForumIndex />
      }
    </View>
  );
}
