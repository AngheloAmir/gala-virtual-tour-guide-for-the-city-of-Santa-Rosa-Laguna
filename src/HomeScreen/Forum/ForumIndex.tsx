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
import { Text, Button, View } from 'react-native';
import Threads from './ThreadScene/Threads';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { localContextProvider, createDefaultState } from './localstateAPI/state';
import { rootReducer } from './localstateAPI/reducer';

export default function ForumIndex() {
    const [localState, localDispatch] = React.useReducer(rootReducer, createDefaultState());

    return (
        <localContextProvider.Provider value={{localState, localDispatch}} >
            <Stack.Navigator>
                <Stack.Screen name="Threads" component={ThreadsContainer} options={{headerShown: false}}/>
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
    const [isThreadsLoaded, setLoaded] = React.useState(false);
    const [err, seterr] = React.useState({text: '?', show: false});
    const [intervalid, setid] = React.useState();

    async function loadThreads() {
        const response = await fetch(loadthread);
        const threads = await response.json();
        if(!threads.err) {
            localDispatch( setThreads(threads) );
            setLoaded(true);
        }
        else
            seterr({text: 'Error: ' + threads.err, show: true});
    }

    function handleLoadThreads() {
        try {
            loadThreads();
            //@ts-ignore
            setid( setTimeout(() => loadThreads(), 15000));
        }
        catch(err) {
            seterr({text: 'Error: ' + err, show: true});
        }
    }

    React.useEffect(() => {
        return clearTimeout(intervalid);
    })

    return (
        <View>
        {
            !isThreadsLoaded ?
                <View>
                    <Text style={{fontSize: 18, textAlign: 'center', marginVertical: 24}}>Load threads</Text>
                    <Button title='refresh' onPress={() => handleLoadThreads() } />
                </View>
            :
            <Threads navigation={navigation} />  
        }
            <AlertBox title='Error loading threads'
                text={err.text}
                isshow={err.show}
                ok={() => seterr({text: '?', show: false})}
            />
        </View>
    )
}
