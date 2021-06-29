/*
    Define what is the map size when the virtual guide map is opened and 
    where are the point of interest
*/

import { ImageSourcePropType } from 'react-native';
import { PlaceInformationInterface } from  '../placeinfo/!PlaceInfoInterface';

interface virtualmapdata {
    map :{
        image    :ImageSourcePropType;
        height   :number;
        width    :number;
    },
    pointOfInterest  :Array<pointOfInterestInterface>;
}
export interface pointOfInterestInterface {
    x               :number;    //do note that, the postion is tied with the map size so therefore
    y               :number;    //when there is changes in the map size, especially in size; these point may point incorrectly.
    type            : 'spot' | 'mall' | 'resto' | 'gas' | 'hotel' | 'hospital' | 'police' | 'bus' | 'info' | 'line';
    image           :ImageSourcePropType | any;
    name            :string; 
    description     :string;
    address         :string;
    longitude       :number;
    latitude        :number;
    streetviewlink  :string;
    webviewlink     :string;
    information     :() => PlaceInformationInterface | any; //It return a JSON, the reason is than this json will be loaded if needed only
}

import info from './pointInterest/info';
import place from './pointInterest/place';

const virtualmap :virtualmapdata = {
    map: {
        image: require('../../assets/santarosa/santarosamap.png'),
        height: 1680,
        width:  1200,
    },
    pointOfInterest: [
        ...place, ...info,
    ],
}
export default virtualmap;
