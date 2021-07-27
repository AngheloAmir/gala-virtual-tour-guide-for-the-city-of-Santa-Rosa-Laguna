/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "" button.
*/
import React from 'react';
import { View, Text, Button } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { StoryContent } from '../../../../database/!interfaces/StoryContent';

export default function ReadStory( {navigation} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    if(!localState.storyToRead) return <Text>Error: No story to read</Text>;
    const story :StoryContent = localState.storyToRead;

    return (
        <View>
            <Text style={{fontSize: 18}}>
                {story.title}
            </Text>

            <Button title='BACK' onPress={() => navigation.navigate('Home')} />
        </View>
    )
}
