/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the threads available (loaded from the user)

    * VISIBLE WHEN
        This is show when the user was already registered and threads has been loaded in the server - the user taps
        refresh in the forum tab (after registration)
*/
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//@ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//@ts-ignore
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';

import { contextProvider, StateAPI } from '../../../StateAPI/State';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI, Thread } from '../localstateAPI/interface';
import { setCurrentThread, setThreads } from '../localstateAPI/actions';

import AvatarIcon from '../functions/AvatarIcon';
import CalculateAgo from '../../../Utility/calculateago';
import AlertBox from '../../../Utility/AlertBox';

//secret
import { loadsinglethread, loadthread, deletethread, viewuser} from '../../../../secret/key';

export default function ForumThreads({navigation} :any) {
    const { state } : StateAPI = React.useContext(contextProvider);
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [deletedialog, setDelete] = React.useState({show: false, threadid: '0'});
    const [errorDialog, setErr] = React.useState({text: '', show: false});
    const [isSending, setSending] = React.useState(false);
    const [vuser, setviewuser] = React.useState({username: '0', description: '0', last: 0, joined: 0, show: false});
    const [sendingMessage, setSendingMessage] = React.useState('Please wait...');

    async function handleOpenThread(threadId :string) {
        if(isSending) return;
        setSending(true);
        setSendingMessage('Loading...');
        try {
            const response = await fetch( loadsinglethread , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({threadid: threadId})
            });
            const thethread :Thread = await response.json();
        //@ts-ignore
            if(thethread.err) throw new Error(thethread.err);
            localDispatch( setCurrentThread(thethread) );
            setSending(false);
            navigation.navigate('Reply');
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSending(false);
        }
    }

    async function handleDeleteThread() {
        if(isSending) return;
        setSending(true);
        setDelete({show: false, threadid: '0'});
        setSendingMessage('Deleting...');
        try {
            const response = await fetch( deletethread , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    threadid:       deletedialog.threadid,
                    usertoken:      state.user.token
                })
            });
            const result = await response.json();
        //@ts-ignore
            if(result.err) throw new Error(result.err);
            await loadThreads();
            setSending(false);
        }
        catch(err) {
            setDelete({show: false, threadid: '0'});
            setErr({text: '' + err, show: true});
            setSending(false);
        }
    }

    async function handleRefesh() {
        if(isSending) return;
        setSending(true);
        setSendingMessage('Refreshing...');
        await loadThreads();
        setSending(false);
    }

    async function loadThreads() {
        const response = await fetch(loadthread);
        const threads = await response.json();
        if(!threads.err) 
            localDispatch( setThreads(threads) );
        else
            setErr({text: 'Error: ' + threads.err, show: true});
    }

    async function handleViewUser(userid :string | any) {
        if(isSending) return;
        setSending(true);
        setSendingMessage('Please wait...');
        try {
            const response = await fetch( viewuser , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({userid: userid})
            });
            const result = await response.json();
            if(result.err) throw new Error('' + result.err);
            setviewuser({
                username: result.username,
                description: result.description,
                last: result.lastreply,
                joined: result.joined,
                show: true
            });
            setSending(false);
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSending(false);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
            { localState.forum.map((item :Thread, index :number) => {
            return (
                <View key={index} style={styles.threadContainer}>
                    <View style={styles.headingStyle}>
                        <AvatarIcon avatarid={item.creator.avatar} />
                        <View style={styles.metaContainer}>
                            <View style={styles.UserName}>
                                <TouchableOpacity onPress={() => handleViewUser(item.creator.uid)}>
                                    <Text style={styles.userNameText}>{item.creator.username}</Text>
                                </TouchableOpacity>
                            {
                            state.user.uid == item.creator.uid &&
                                <TouchableOpacity onPress={() => setDelete({show: true, threadid: '' + item._id})}>
                                    <AntDesign name='delete' size={16} color='red' />
                                </TouchableOpacity>
                            }    
                            </View>
                            <Text style={styles.date}>{CalculateAgo(item.thread.date)}</Text>
                            <Text style={styles.title}>{item.thread.title}</Text>
                        </View>
                    </View>
                    <Text style={styles.text}>{item.thread.text}</Text>

                    <TouchableOpacity style={styles.openThreadBtn} onPress={() => handleOpenThread(item._id)}>
                        <Text style={styles.btnText}>  Open Thread  </Text>
                    </TouchableOpacity>
                </View>
            )
            })}
            </ScrollView>

            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.btninput} onPress={() => navigation.navigate('NewThread')}>
                    <FontAwesome5 name='newspaper' size={16} color='white' />
                    <Text style={styles.btntext}>New thread</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btninput} onPress={() => handleRefesh()}>
                    <FontAwesome name='refresh' size={16} color='white' />
                    <Text  style={styles.btntext}>Refresh</Text>
                </TouchableOpacity>
            </View>

            <AlertBox
                title='Viewed User'
                text={`${vuser.username}\n"${vuser.description}"\n\nLast replied: ${CalculateAgo(vuser.last)}\nJoined: ${CalculateAgo(vuser.joined)}`}
                ok={() => setviewuser({username: '', description: '', last: 0, joined: 0, show: false}) }
                isshow={vuser.show}
            />
            <AlertBox
                title='Delete?'
                text='Delete the thread you made?'
                ok={() => handleDeleteThread()}
                cancel={() => setDelete({show: false, threadid: '0'})}
                isshow={deletedialog.show}
            />
            <AlertBox
                title='Error opening a thread'
                text={errorDialog.text}
                ok={() => setErr({text: '', show: false}) }
                isshow={errorDialog.show}
            />

            { isSending &&
                <View style={styles.sending}>
                    <Text style={styles.sendingText}> { sendingMessage } </Text>
                </View>
            }
        </View>
    );
}

const themestyle = require('../../../../database/styles.json');
import { WindowDimension } from '../../../Utility/useResponsive';
import GlobalStyle from '../../../Utility/GloabalStyles';

const styles = StyleSheet.create({
    container: {
        height: WindowDimension.height - 110,
        paddingBottom: 12,
    },
    scrollview: {
        width:          '95%',
        alignSelf:      'center',
        height: WindowDimension.height - 100 - 50,
        paddingTop: 18,
    },
    threadContainer: {
        ...GlobalStyle.defaultBackground,
        ...GlobalStyle.border,
        borderRadius:   16,
        padding:        8,
        marginBottom:   16,
    },
    headingStyle: {
        flexDirection:  'row',
        borderBottomColor: themestyle.bordercolor,
        borderBottomWidth: 1,
    },
    metaContainer: {
        flexDirection: 'column',
        width:         (WindowDimension.width * 0.95) - 110,
        marginLeft:    16,
    },
    UserName: {
        flexDirection:   'row',
        justifyContent:  'space-between',
    },
    userNameText: {
        fontSize:       themestyle.defaultfontsize,
        fontWeight:     'bold',
        color:          'blue',
        textDecorationLine: 'underline',
    },
    date: {
        fontSize:       themestyle.defaultfontsize,
        fontWeight: '300',
        color: 'gray',
    },
    title: {
        fontSize:       themestyle.defaultfontsize,
        marginBottom:   4,
    },
    text: {
        fontSize:       themestyle.defaultfontsize,
        lineHeight:     themestyle.lineHeight,
        padding:        4,
    },
    openThreadBtn: {
        alignSelf: 'center',
        marginBottom: 8,
    },
    btnText: {
        fontSize:       themestyle.defaultfontsize,
        color:          'blue',
        textDecorationLine: 'underline',
    },

    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(115, 170, 220, 1)',
        paddingTop: 8,
        paddingVertical: 16,
    },
    btninput: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(33, 150, 243)',
        paddingVertical: 6,


    },
    btntext: {
        ...GlobalStyle.textbold,
        fontWeight: '500',
        color: 'white',
    },
    sending: {
        position: 'absolute',
        top: 0, left: 0,
        width: WindowDimension.width,
        height: WindowDimension.height,
        zIndex: 20,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    sendingText: {
        marginTop: (WindowDimension.height / 2) - 100,
        width: WindowDimension.width,
        color: 'white',
        backgroundColor: 'orange',
        padding: 12,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute'
    }
});
