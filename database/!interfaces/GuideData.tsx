/*
    Define the interface that will be the structure of an object for
    the HomeScreen > Guide List
*/

import { GuideItem } from './GuideItem';

export interface GuideData {
    title       :string;
    guidelist   :Array<GuideItem>;
}

