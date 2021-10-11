/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the create new threads 

    * VISIBLE WHEN
        When the user press create new thread
*/
import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import { contextProvider, StateAPI } from '../../../StateAPI/State';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setThreads } from '../localstateAPI/actions';

import AlertBox from '../../../Utility/AlertBox';

//secret
import { addthread, loadthread } from '../../../../secret/key';

export default function NewThread({navigation} :any) {
    const { state } :StateAPI = React.useContext(contextProvider); 
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    const [title, settitle] = React.useState('');
    const [description, setdes] = React.useState('');
    const [isSending, setSending] = React.useState(false);
    const [errorDialog, setErr] = React.useState({text: '', show: false});

    async function createNewThread() {
        if(title.length < 1 || description.length < 1 ) {
            setErr({text: 'Please fill up thread title and description', show: true});
            return;
        }
        if(isSending) return;
        setSending(true);

        try {
            const response = await fetch( addthread , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    creator: {
                        username:   state.user.name,
                        avatar:     state.user.avatar,
                        uid:        state.user.uid
                    },
                    thread: {
                        title:      title,
                        text:       description,
                    },
                    _token:         state.user.token
                })
            });
            const result = await response.json();
            if(result.err) {
                setErr({text: '' + result.err, show: true});
                setSending(false);
                return;
            }
            await loadThreads();
            setSending(false);
            navigation.navigate('Threads');
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSending(false);
        }
    }

    async function loadThreads() {
        const response = await fetch(loadthread);
        const threads = await response.json();
        if(!threads.err) {
            localDispatch( setThreads(threads) );
        }
        else
            setErr({text: 'Error: ' + threads.err, show: true});
    }

    return (
        <View>
        <View style={styles.container}>
            <View>
                <Text style={styles.headingText}>Create new thread</Text>
            </View>
           
            <View style={styles.form}>
                <Text style={styles.formText}>Thread Title</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='thread title'
                    value={title}
                    onChangeText={e => settitle(e)}
                    maxLength={64}
                />
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>Description</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='description'
                    value={description}
                    onChangeText={e => setdes(e)}
                    maxLength={256}
                />
            </View>

            <View style={styles.createBtnContainer}>
                <Button title='  Cancel  ' onPress={() => navigation.navigate('Threads')} />
                <Button title=' Create new thread ' onPress={() => createNewThread()} />
            </View>

            <View>
                <Text style={{fontSize: 12, textAlign: 'center'}}>
                    Please dont make any reply for 5 mins to create a new thread!
                </Text>
            </View>

            </View>
            <AlertBox
                title='Error creating a thread'
                text={errorDialog.text}
                ok={() => setErr({text: '', show: false}) }
                isshow={errorDialog.show}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
    },
    headingText: {
        borderColor: 'rgba(115, 170, 220, 1)',
        borderWidth: 2,
        justifyContent: 'center',
        fontSize: 21,    
        textAlign: 'center',
        marginVertical: 8, borderRadius: 16,
    },
    form: {
        flexDirection: 'column',
        paddingHorizontal: 4,
        width: '100%',
    },
    formText: {
        fontSize: 16,
        paddingVertical: 8,
    },
    formTextEmpty: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 8,
        color: 'red',
    },
    formInput: {
        backgroundColor:    'white',
        borderRadius:       8,
        fontSize:           16,
        height:             32,
        paddingLeft:        16,
    },
    createBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 32,
        marginBottom: 8
    }
});
