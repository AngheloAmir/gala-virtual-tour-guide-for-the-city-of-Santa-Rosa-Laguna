/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
      

    * VISIBLE WHEN
        
*/
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
//@ts-ignore
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { localContextProvider } from './localstateAPI/state';
import { LocalStateAPI, Thread } from './localstateAPI/interface';

import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../../database/assets';

export default function ForumThreads({navigation} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    function getImage(avatarid :number) {
        if(avatarid < AVATARICONS_MALE.length -1 )
            return <Image source={AVATARICONS_MALE[avatarid]} style={styles.iconStyle} resizeMode='contain' />
        const id = avatarid - AVATARICONS_MALE.length;
        return <Image source={AVATARICONS_FEMALE[id]} style={styles.iconStyle} resizeMode='contain' />
    }

    function calculateAgo(threadms :number) :string {
        const ago = Date.now() - threadms;
    //check if less than a hour
        if(ago <= (60*60*1000)) {
            let mins = Math.round(ago / (60*1000));
            return mins + ' mins ago';
        }
    //check if less than a day
        else if(ago <= (24*60*60*1000)) {
            let hour = Math.round(ago / (60*60*1000));
            return hour + ' hours ago';
        }
        const day = Math.round(ago / (24*60*60*1000));
        return day + ' days ago';
    }

    function handleOpenThread(threadId :number) {
        console.log('opening a thread with id: ' + threadId);
    }

    return (
        <ScrollView style={styles.container}>
        { localState.forum.map((item :Thread, index :number) => {
        return (
            <View key={index} style={styles.threadContainer}>
                <View style={styles.headingStyle}>
                    { getImage(item.avatar) }

                    <View style={styles.metaContainer}>
                        <View style={styles.UserName}>
                            <Text style={styles.userNameText}>{item.username}</Text>
                            <TouchableOpacity onPress={() => console.log('thread option')}>
                                <EntypoIcon name='dots-three-horizontal' size={16} color='black' />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.date}>{calculateAgo(item.threaddate)}</Text>
                        <Text style={styles.title}>{item.threadtitle}</Text>
                    </View>
                </View>
                <Text style={styles.text}>{item.threadtext}</Text>

                <TouchableOpacity style={styles.openThreadBtn} onPress={() => handleOpenThread(item.threadid)}>
                    <Text style={styles.btnText}>  Open Thread  </Text>
                </TouchableOpacity>
            </View>
        )
        })}
        </ScrollView>
    );
}

const themestyle = require('../../../database/styles.json');
import { WindowDimension } from '../../Utility/useResponsive';
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
    iconStyle: {
        width: 72, height: 72
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
