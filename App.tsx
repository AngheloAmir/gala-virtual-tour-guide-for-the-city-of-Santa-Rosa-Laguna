import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';

//StateAPI imports
import { contextProvider, createDefaultState } from './src/StateAPI/State';
import { RootReducer } from './src/StateAPI/RootReducer';

import { ALLASSETS } from './database/assets';
import IndexNavigation from './src/IndexNavigation';

export default function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());
  const [isReady, setReady] = React.useState(false);

  async function cacheResourcesAsync() {
    const i = await Asset.loadAsync([...ALLASSETS]);
    //console.log(i)
  }

  if(!isReady) {
    return (
      <AppLoading
          startAsync={() => cacheResourcesAsync()}
          onFinish={() => setReady(true)}
          onError={console.warn}
      />
    );
  }

  return (
    <contextProvider.Provider value={{state, dispatch}}>
      <StatusBar barStyle='default'/>
        <IndexNavigation />
    </contextProvider.Provider>			
  );
}
