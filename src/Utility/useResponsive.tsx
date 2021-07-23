/*
    Utility that detects screen changes and adjust value, it is like a
    "Media Querry" in CSS since react native does not support it.

    * marginHorizontal
        used in setting margin or padding in style that changes based on the screen height
    * containerWidth
        used in container component such as view. 

*/

import React from 'react';
import { Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('screen');
export const WindowDimension = { height, width };

export interface Responsive {
    height              :number;
    width               :number;
    marginHorizontal    :number;
    containerWidth      :number;
    orientation         :string;

    isWeb               :boolean;
}

function setResponsiveData() :Responsive {
    const { height, width } = Dimensions.get('screen');

    let marginHorizontal :number = 0;
    if( height > 1000 )      marginHorizontal = height * 0.2;
    else if( height > 800 )  marginHorizontal = height * 0.15;
    else                     marginHorizontal = height * 0.1;

    let containerWidth :number = 0;
    if( width > 1200)      containerWidth = width * 0.4;
    else if( width > 1000) containerWidth = width * 0.5;
    else if( width > 800)  containerWidth = width * 0.6;
    else if( width > 500)  containerWidth = width * 0.7;
    else                   containerWidth = width * 0.8;

    let orientation :string = '';
    if(height > width) orientation = 'portrait';
    else               orientation = 'landscape'; 

    const isWeb =  Platform.OS === 'web';

    return {
        height, width, marginHorizontal, containerWidth, orientation, isWeb
    }
}

export function useResponsive() :Responsive {
    const [screen, setscreen] = React.useState(setResponsiveData());
    
    React.useEffect( () => {
        Dimensions.addEventListener('change', () => {
            setscreen(setResponsiveData());
        })
    }, []);

    return screen;
}