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
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI, Thread } from '../localstateAPI/interface';
import { setCurrentThread } from '../localstateAPI/actions';

import AvatarIcon from '../functions/AvatarIcon';
import CalculateAgo from '../functions/calculateago';

export default function Reply({navigation} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    return (
        <ScrollView>
            <View style={styles.threadContainer}>
                <View style={styles.headingStyle}>
                    <AvatarIcon avatarid={localState.currentThread?.creator.avatar} />
                    <View style={styles.metaContainer}>
                        <View style={styles.UserName}>
                            <Text style={styles.userNameText}>{localState.currentThread?.creator.username}</Text>
                        </View>
                        <Text style={styles.date}>Created: {CalculateAgo(localState.currentThread?.thread.date)}</Text>
                        <Text style={styles.title}>{localState.currentThread?.thread.title}</Text>
                    </View>
                </View>
                <Text style={styles.text}>{localState.currentThread?.thread.text}</Text>
            </View>



        </ScrollView>
    );
}


const themestyle = require('../../../../database/styles.json');
import { WindowDimension } from '../../../Utility/useResponsive';
const styles = StyleSheet.create({
    container: {

    },
    threadContainer: {
        backgroundColor: 'rgba(230, 240, 250, 1)',
        borderColor:    themestyle.bordercolor,
        borderWidth:    1,
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