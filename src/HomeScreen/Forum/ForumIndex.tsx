/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        The main container that is show if the user has been registered (something has been store to its Async Storage).
        The determination if the user has stored credentials is found at src/ForumTab.tsx

    * VISIBLE WHEN
        If the user has been registered (something has been store to its Async Storage)
*/
import React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import Threads from './ThreadScene/Threads';
import Reply from './ThreadScene/Reply';
import NewThread from './ThreadScene/NewThread';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { localContextProvider, createDefaultState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';

export default function ForumIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, createDefaultState());

    return (
        <localContextProvider.Provider value={{localState, localDispatch}} >
            <Stack.Navigator>
                <Stack.Screen name="Index"   component={ThreadsContainer} options={{headerShown: false}}/>
                <Stack.Screen name="Threads" component={Threads} options={{headerShown: false}}/>
                <Stack.Screen name="Reply"  component={Reply} options={{headerShown: false}}/>
                <Stack.Screen name="NewThread"  component={NewThread} options={{headerShown: false}}/>
            </Stack.Navigator>
        </localContextProvider.Provider>
    );
}

//###################################################################################################
//###################################################################################################
import { LocalStateAPI }    from './localstateAPI/interface';
import { setThreads }       from './localstateAPI/actions';
import { loadthread }       from '../../../secret/key';
import AlertBox             from '../../Utility/AlertBox';

function ThreadsContainer({navigation} :any) {
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [err, seterr] = React.useState({text: '?', show: false});

    async function loadThreads() {
        const response = await fetch(loadthread);
        const threads = await response.json();
        if(!threads.err) {
            localDispatch( setThreads(threads) );
            navigation.navigate('Threads')
        }
        else
            seterr({text: 'Error: ' + threads.err, show: true});
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Tap to load current topic by the community</Text>
                <View style={styles.btn}>
                    <Button title='refresh' onPress={() => loadThreads() } />
                </View>
            </View>
            <AlertBox title='Error loading threads'
                text={err.text}
                isshow={err.show}
                ok={() => seterr({text: '?', show: false})}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: '10%'
    },
    welcomeText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 32
    },
    btn: {
        marginTop: 12,
    }
});
