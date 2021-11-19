/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the the current thread being viewed by the user

    * VISIBLE WHEN
        After the user tap  "open thread". This thread will regulary update the whole thread and 
        check whether the current thread does exist or not.
*/
import React from 'react';
import { 
    View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { contextProvider, StateAPI } from '../../../StateAPI/State';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI, TReplies, Thread } from '../localstateAPI/interface';
import { setCurrentThread } from '../localstateAPI/actions';

import AvatarIcon from '../functions/AvatarIcon';
import CalculateAgo from '../../../Utility/calculateago';
import AlertBox from '../../../Utility/AlertBox';

//secret apis
import { makecomment, deletecomment, loadsinglethread } from '../../../../secret/key';

export default function Reply() {
    const { state, dispatch } : StateAPI = React.useContext(contextProvider);
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [text ,setText ]          = React.useState('');
    const [isSending, setSendin]    = React.useState(false);
    const [errorDialog, setErr]     = React.useState({text: '', show: false});
    const [delrep, setdelrep]       = React.useState({id: '0', show: false});
    const scrollviewref :any        = React.useRef({});

    function whichStyle(reply :TReplies) {
        if( reply.userid == state.user.uid )
            return styles.replyContainerUser;
        return styles.replyContainer;
    }

    async function handleSendText() {
        if(isSending) return;
        if(text.trim().length <= 0) return;
        setSendin(true);

        try {
            const response = await fetch( makecomment , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    threadid:     localState.currentThread?._id,
                    username:     state.user.name,
                    userid:       state.user.uid,
                    avatar:       state.user.avatar,
                    _token:       state.user.token,
                    text:         text.trim()
                })
            });
            const result = await response.json();
            if(result.err) 
                setErr({text: result.err, show: true});
            else {
                await loadThread();
                setText('');
                scrollviewref.current.scrollToEnd({animated: true});
            }
            setSendin(false);
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSendin(false);
        }
    }

    async function loadThread() {
        if(isSending) return;
        setSendin(true);
        try {
            const response = await fetch( loadsinglethread , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({threadid: localState.currentThread?._id})
            });
            const thethread :Thread = await response.json();
        //@ts-ignore
            if(thethread.err) throw new Error(thethread.err);
            localDispatch( setCurrentThread(thethread) );
            setSendin(false);
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSendin(false);
        }
    }

    async function deleteComment() {
        if(isSending) return;

        console.log("deleting");
        setSendin(true);
        try {
            await fetch( deletecomment , {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    threadid:   localState.currentThread?._id,
                    commentid:  delrep.id,
                    _token:     state.user.token,
                })
            });
            await loadThread();
            setSendin(false);
        }
        catch(err) {
            setErr({text: 'Check your internet connection and try again. \n' + err, show: true});
            setSendin(false);
        }
    }

    return (
        <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView} ref={scrollviewref}>
            <View style={styles.threadContainer}>
                <View style={styles.headingStyle}>
                    <AvatarIcon avatarid={localState.currentThread?.creator.avatar} />
                    <View style={styles.metaContainer}>
                        <View style={styles.UserName}>
                            <Text style={styles.userNameText}>{localState.currentThread?.creator.username}</Text>
                        </View>
                        <Text style={styles.date}>{CalculateAgo(localState.currentThread?.thread.date)}</Text>
                        <Text style={styles.title}>{localState.currentThread?.thread.title}</Text>
                    </View>
                </View>
                <Text style={styles.text}>{localState.currentThread?.thread.text}</Text>
            </View>

            { localState.currentThread?.replies &&
              localState.currentThread.replies.map((reply :TReplies, index :number) => {
                return (
                    <View style={whichStyle(reply)} key={index}>
                        <View style={styles.replyHeading}>
                            <AvatarIcon avatarid={reply.avatar} isAdmin={reply.isAdmin} width={42} height={42} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.replyusername}>{reply.username}</Text>
                                <Text style={styles.replyago}>{CalculateAgo(reply.time)}</Text>
                            </View>
                            {
                                reply.userid == state.user.uid &&
                                <View style={{marginLeft: 16}}>
                                <TouchableOpacity onPress={() => setdelrep({id: '' + reply._id, show: true})}>
                                    <Icon name='delete' size={16} color='red' />
                                </TouchableOpacity>
                                </View>
                            } 
                        </View>
                        <Text style={styles.replyText}>{reply.text}</Text>
                    </View>    
                )
            })}
        </ScrollView>

        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textinput}
                placeholder='reply' value={text}
                onChangeText={e => setText(e)}
                maxLength={240}
            />
            <View style={styles.inputbtn}>
                <Button title='send' onPress={handleSendText} />
            </View>
        </View>

        <View style={{position: 'absolute', bottom: 70, right: 0}}>
            { isSending ?
                <Text style={{
                    padding: 8, backgroundColor: 'lightblue'
                }}>Please wait...</Text> :
            <Button title='refresh' onPress={() => { loadThread(); scrollviewref.current.scrollToEnd({animated: true}) }} />
         }
        </View>
        
        <AlertBox
            title='Delete?'
            text='Delete your reply to this thread?'
            ok={() => {
                setdelrep({id: delrep.id, show: false});
                deleteComment();
            }}
            cancel={() => setdelrep({id: '', show: false})}
            isshow={delrep.show}
        />
        <AlertBox
                title='Error replying'
                text={errorDialog.text}
                ok={() => setErr({text: '', show: false}) }
                isshow={errorDialog.show}
        />
        </View>
    );
}

const themestyle = require('../../../../database/styles.json');
import GlobalStyle from '../../../Utility/GloabalStyles';
import { WindowDimension } from '../../../Utility/useResponsive';
const styles = StyleSheet.create({
    container: {

    },
    scrollView: {
        width: WindowDimension.width,
        //height: WindowDimension.height - 100 - 160,
    },
    threadContainer: {
        ...GlobalStyle.shadow,
        ...GlobalStyle.defaultBackground,
        padding:        8,
        marginBottom:   16,
    },
    headingStyle: {
        flexDirection:  'row',
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
    userNameText:   GlobalStyle.textbold,
    date:           GlobalStyle.date,

    title: {
        ...GlobalStyle.defaultfontSize,
        marginBottom:   4,
    },
    text: {
        ...GlobalStyle.text,
        padding:        4,
    },
    openThreadBtn: {
        alignSelf: 'center',
        marginBottom: 8,
    },
    btnText: {
        ...GlobalStyle.defaultfontSize,
        color:          'blue',
        textDecorationLine: 'underline',
    },

    replyContainer: {
        ...GlobalStyle.border,
        ...GlobalStyle.defaultBackground,
        width: '92%',
        borderTopEndRadius: 16,
        borderBottomEndRadius: 16,
        padding: '2.5%',
        marginBottom: 12,
    },
    replyContainerUser: {
        ...GlobalStyle.defaultBackground,
        ...GlobalStyle.border,
        borderTopStartRadius : 16,
        borderBottomStartRadius: 16,
        width: '92%',
        marginLeft: '8%',
        padding: '2.5%',
        marginBottom: 12,

    },
    replyHeading: {
        flexDirection: 'row',
    },
    replyusername: {
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 16,
    },
    replyago: {
        fontSize:       themestyle.defaultfontsize,
        marginLeft: 16,
        fontWeight: '300',
        color: 'gray',
    },
    replyText: GlobalStyle.text,

    inputContainer: {
        flexDirection: 'row',
        padding: 12,
        borderColor:    themestyle.bordercolor,
        borderTopWidth:    1,
        backgroundColor: 'rgba(115, 170, 220, 1)',
    },
    textinput: {
        height: 32,
        fontSize: 16,
        width: '75%',
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'white',
    },
    inputbtn: {
        width: '25%',
        marginLeft: '5%',
    }
});
