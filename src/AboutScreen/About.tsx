/*
    The about page
*/
import React from 'react';
import { View }             from 'react-native';
import { StoryContent }     from '../../database/!interfaces/StoryContent';
import galaabout            from '../../database/galaabout.json';
import StoryViewer          from '../Utility/StoryViewer';
import Topbar               from '../Topbar';
import ASSETS               from '../../database/assets';

export default function GuideView({navigation} :any) {
    const theguide   :StoryContent | any    = {
        ...galaabout,
        headerImage: ASSETS['about.png']
    };
    
    return (
        <View style={{flex: 1}}>
            <Topbar title='about' navigation={navigation} />
            <StoryViewer story={theguide} />
        </View>
    );
}
