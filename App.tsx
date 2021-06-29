import React from 'react';
import { StatusBar, Text } from 'react-native';
//import { SafeAreaView } from 'react-native-safe-area-context';

//StateAPI imports
import { contextProvider, createDefaultState } from './src/StateAPI/State';
import { RootReducer } from './src/StateAPI/RootReducer';

import SignIn from './src/IntroScreen/SignIn';
import IndexNavigation from './src/IndexNavigation';

export default function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());

  function whichScreen() {
    switch( state.screen.current ) {
      case 'signin':
        return <SignIn />;
      case 'home':
        return <IndexNavigation />
      default:
          return <Text>Unknown screen: { state.screen.current } </Text>
    }
  }

  return (
    <contextProvider.Provider value={{state, dispatch}}>
      <StatusBar barStyle='default'/>
        { whichScreen() }
    </contextProvider.Provider>			
  );
}
