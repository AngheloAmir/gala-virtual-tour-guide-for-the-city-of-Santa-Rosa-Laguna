import React from 'react';
import { Image } from 'react-native';

const male1 = require('../../assets/icons/male1.png');
const male2 = require('../../assets/icons/male2.png');
const male3 = require('../../assets/icons/male3.png');
const male4 = require('../../assets/icons/male4.png');
const female1 = require('../../assets/icons/female1.png');
const female2 = require('../../assets/icons/female2.png');
const female3 = require('../../assets/icons/female3.png');
const female4 = require('../../assets/icons/female4.png');

interface propsReceive {
    avatar  :number;
    width   :number;
    height  :number;
}

export default function AvatarIcon( props :propsReceive) {
    
    function whichIcon() {
        switch(props.avatar) {
            case 0:
                return male1;
            case 1:
                return male2;
            case 2:
                return male3;
            case 3:
                return male4;
            case 4:
                return female1;
            case 5:
                return female2;
            case 6:
                return female3;
            case 7:
                return female4;
            default:
                return male1;
        }
    }

    return (
        <Image source={whichIcon()} style={{height: props.height, width: props.width}}/>
    )
}