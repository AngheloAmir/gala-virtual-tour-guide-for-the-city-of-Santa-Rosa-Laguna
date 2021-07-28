/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        A component that display the content of a guide (Home Screen > Guides)

    * VISIBLE WHEN
        When the user choose to read a Guide in the Home > Guides Tab
*/
import React from 'react';
import { contextProvider, StateAPI } from '../../StateAPI/State';
import { StoryContent } from '../../../database/!interfaces/StoryContent';
import StoryViewer from '../../Utility/StoryViewer';

export default function GuideView() {
    const { state }  :StateAPI              = React.useContext(contextProvider);
    const theguide   :StoryContent | any    = state.features.guideInfo;

    return (
        <StoryViewer story={theguide} />
    )
}
