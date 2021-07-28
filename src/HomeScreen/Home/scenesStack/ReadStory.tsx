/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Display an article in the screen

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "Learn more about the city" button.
        It also show when the user is reading an article from "top stories"
*/
import React from 'react';
import { Text } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { StoryContent }         from '../../../../database/!interfaces/StoryContent';
import StoryViewer              from '../../../Utility/StoryViewer';

export default function ReadStory( {navigation} :any) {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    if(!localState.storyToRead) return <Text>Error: No story to read</Text>;
    const story :StoryContent = localState.storyToRead;

    return (
        <StoryViewer story={story} />
    )
}
