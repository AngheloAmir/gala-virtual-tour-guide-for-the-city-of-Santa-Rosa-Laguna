/*
    Return an avatar icon
*/
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { AVATARICONS_MALE, AVATARICONS_FEMALE } from '../../../../database/assets';

interface propsReceive {
    avatarid :number | any;
    width?   :number;
    height?  :number;
}

export default function AvatarIcon(props :propsReceive) {
    const styles = StyleSheet.create({
        iconStyle: {
            width:  props.width  ? props.width  : 64,
            height: props.height ? props.height : 64,
        }
    });

    if(props.avatarid < AVATARICONS_MALE.length -1 )
            return <Image source={AVATARICONS_MALE[props.avatarid]} style={styles.iconStyle} resizeMode='contain' />
        const id = props.avatarid - AVATARICONS_MALE.length;
        return <Image source={AVATARICONS_FEMALE[id]} style={styles.iconStyle} resizeMode='contain' />
}
