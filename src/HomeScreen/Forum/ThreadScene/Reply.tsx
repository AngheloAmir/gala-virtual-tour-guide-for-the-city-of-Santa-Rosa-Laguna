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
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import { contextProvider, StateAPI } from '../../../StateAPI/State';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI, TReplies } from '../localstateAPI/interface';
//import { setCurrentThread } from '../localstateAPI/actions';

import AvatarIcon from '../functions/AvatarIcon';
import CalculateAgo from '../functions/calculateago';

export default function Reply({navigation} :any) {
    const { state } : StateAPI = React.useContext(contextProvider);
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const [text ,setText ] = React.useState('');

    function whichStyle(reply :TReplies) {
        if( reply.userid == state.user.uid )
            return styles.replyContainerUser;
        return styles.replyContainer;
    }

    function handleSendText() {
        
    }

    return (
        <View style={{flex: 1}}>
        <ScrollView style={styles.scrollView}>
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
                            <AvatarIcon avatarid={reply.avatar} width={42} height={42} />
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.replyusername}>{reply.username}</Text>
                                <Text style={styles.replyago}>{CalculateAgo(reply.time)}</Text>
                            </View>
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
            />
            <View style={styles.inputbtn}>
                <Button title='send' onPress={() => console.log('pressed')} />
            </View>
        </View>

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
        height: WindowDimension.height - 100 - 120,
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
        ...GlobalStyle.shadow,
        ...GlobalStyle.defaultBackground,
        width: '92%',
        borderTopEndRadius: 16,
        borderBottomEndRadius: 16,
        padding: '2.5%',
        marginBottom: 12,
    },
    replyContainerUser: {
        ...GlobalStyle.shadow,
        ...GlobalStyle.defaultBackground,
        width: '92%',
        marginLeft: '7%',
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
        flex: 1,
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
        border: '1px solid black',
        borderRadius: 8,
        padding: 8,
        backgroundColor: 'white',
    },
    inputbtn: {
        width: '25%',
        marginLeft: '5%',
    }
});
