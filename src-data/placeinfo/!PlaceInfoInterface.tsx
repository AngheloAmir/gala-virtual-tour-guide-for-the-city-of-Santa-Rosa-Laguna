/*
    Define the structure of the Place Information (when the user choose like more info in the TourInteractive map)
*/

import { ImageSourcePropType } from 'react-native';

export interface PlaceInformationInterface {
    name        :string | any;
    address     :string | any;
    website     :string | any;
    latitude    :number | any;
    longitude   :number | any;
    headerimage :ImageSourcePropType | any;
    contents    :Array<PlaceInfoContentInterface>;
}

export interface PlaceInfoContentInterface {
    headingText?   :string;
    paragraph?     :string;
    image?         :ImageSourcePropType | any;
}