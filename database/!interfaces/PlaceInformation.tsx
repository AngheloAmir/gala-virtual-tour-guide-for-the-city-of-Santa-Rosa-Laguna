import { ImageSourcePropType } from 'react-native';
import { PlaceInfoContent } from './PlaceInfoContent';

export interface PlaceInformation {
    name            :string;
    description     :string;
    address         :string;
    type            : 'spot' | 'mall' | 'resto' | 'gas' | 'hotel' | 'hospital' | 'police' | 'bus' | 'info' | 'line';
    longitude       :number;
    latitude        :number;
    website?        :string;
    streetviewlink? :string;

    //return an image. It it a function so, image is not loaded unless needed
    getImage       :() => ImageSourcePropType;  
    getIcon        :() => ImageSourcePropType;
    getDescriptipn :() => Array<PlaceInfoContent>;
}