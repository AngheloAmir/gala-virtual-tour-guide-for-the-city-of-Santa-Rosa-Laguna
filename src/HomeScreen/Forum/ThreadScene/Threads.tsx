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
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI, Thread } from '../localstateAPI/interface';

import AvatarIcon from '../functions/AvatarIcon';
import CalculateAgo from '../functions/calculateago';
import AlertBox from '../../../Utility/AlertBox';

export default function ForumThreads({navigation, deletecd} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const [deletedialog, setDelete] = React.useState(false);

    function handleOpenThread(threadId :string) {
        console.log('opening a thread with id: ' + threadId);
    }

    return (
        <View>
            <ScrollView style={styles.container}>
            { localState.forum.map((item :Thread, index :number) => {
            return (
                <View key={index} style={styles.threadContainer}>
                    <View style={styles.headingStyle}>
                        <AvatarIcon avatarid={item.creator.avatar} />
                        <View style={styles.metaContainer}>
                            <View style={styles.UserName}>
                                <Text style={styles.userNameText}>{item.creator.username}</Text>
                                <TouchableOpacity onPress={() => setDelete(true)}>
                                    <EntypoIcon name='dots-three-horizontal' size={16} color='black' />
                                </TouchableOpacity>
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
            <AlertBox
                title='Delete the thread?'
                text='Delete the thread (if you own the thread)'
                ok={() =>       { setDelete(false); console.log('deleting')}}
                cancel={() =>   { setDelete(false); console.log('canceled')}}
                isshow={deletedialog}
            />
        </View>
    );
}

const themestyle = require('../../../../database/styles.json');
import { WindowDimension } from '../../../Utility/useResponsive';
const styles = StyleSheet.create({
    container: {
        width:          '95%',
        alignSelf:      'center',
        marginVertical: 12,
    },
    threadContainer: {
        borderColor:    themestyle.bordercolor,
        borderRadius:   themestyle.borderradius,
        borderWidth:    1,
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
    }
});
