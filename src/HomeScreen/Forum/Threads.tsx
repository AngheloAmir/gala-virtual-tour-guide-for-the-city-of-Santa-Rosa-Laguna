/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
      

    * VISIBLE WHEN
        
*/
import React from 'react';
import { View, Text, Image } from 'react-native';
import { localContextProvider } from './localStateAPI/state';
import { LocalStateAPI, Thread } from './localstateAPI/interface';

import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../../database/assets';

export default function ForumThreads({navigation} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    function getImage(avatarid :number) {
        if(avatarid < AVATARICONS_MALE.length -1 )
            return <Image source={AVATARICONS_MALE[avatarid]} style={{width: 32, height: 32}} resizeMode='cover' />
        const id = avatarid - AVATARICONS_MALE.length;
        return <Image source={AVATARICONS_FEMALE[id]} style={{width: 32, height: 32}} resizeMode='cover' />
    }

    return (
        <View>
            {
                localState.forum.map((item :Thread, index :number) => {
                    return (
                        <View key={index}>
                            <Text>{item.username}</Text>
                            { getImage(item.avatar) }
                            <Text>{item.username}</Text>
                            <Text>{item.username}</Text>
                            <Text>{item.username}</Text>
                        </View>
                    )
                })
            }
        </View>
    );
}
