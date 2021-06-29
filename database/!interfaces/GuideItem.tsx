/*
    The single item that appear in the Home Screen > Guide (Screen).
    A single item list
*/

import { ImageSourcePropType } from 'react-native';
import { GuideContent } from './GuideContent';

export interface GuideItem {
    title       :string;
    description :string;
    icon        :ImageSourcePropType;
    guidedata   :() => GuideContent;
}