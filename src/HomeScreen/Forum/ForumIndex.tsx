/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen


    * DESCRIPTION


    * VISIBLE WHEN
        
*/
import React from 'react';
import Threads from './Threads';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { localContextProvider, createDefaultState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';

export default function ForumIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, createDefaultState());

    return (
        <localContextProvider.Provider value={{localState, localDispatch}} >
            <Stack.Navigator>
                <Stack.Screen name="Threads" component={Threads} options={{headerShown: false}}/>
            </Stack.Navigator>
        </localContextProvider.Provider>
    );
}
