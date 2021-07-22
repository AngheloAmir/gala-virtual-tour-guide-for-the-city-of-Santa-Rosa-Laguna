import React from 'react';
import { StatusBar } from 'react-native';

//StateAPI imports
import { contextProvider, createDefaultState } from './src/StateAPI/State';
import { RootReducer } from './src/StateAPI/RootReducer';

import IndexNavigation from './src/IndexNavigation';

export default function App() {
  const [state, dispatch] = React.useReducer(RootReducer, createDefaultState());

  return (
    <contextProvider.Provider value={{state, dispatch}}>
      <StatusBar barStyle='default'/>
        <IndexNavigation />
    </contextProvider.Provider>			
  );
}
