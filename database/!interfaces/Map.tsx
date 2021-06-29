import { ImageSourcePropType } from 'react-native';

export default interface InteractiveMap {
    geolocation :{
        x :number; y :number; endx :number; endy: number;
    }
    images      :Array<ImageSourcePropType>;
    tilerow     :number;    //the number of tile of images
    tilecolumn  :number;    //since displaying a large image map makes it blurred, the map image is divided into parts
    tilewidth   :number;
    tileheight  :number;
    width       :number;    //total width and height of image map
    height      :number;
    zoomlevels  :Array<number>;
}