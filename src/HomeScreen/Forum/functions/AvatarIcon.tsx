/*
    Return an avatar icon
*/
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../../../database/assets';

export default function AvatarIcon({avatarid} :any) {
    if(avatarid < AVATARICONS_MALE.length -1 )
            return <Image source={AVATARICONS_MALE[avatarid]} style={styles.iconStyle} resizeMode='contain' />
        const id = avatarid - AVATARICONS_MALE.length;
        return <Image source={AVATARICONS_FEMALE[id]} style={styles.iconStyle} resizeMode='contain' />
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 72, height: 72
    }
});
