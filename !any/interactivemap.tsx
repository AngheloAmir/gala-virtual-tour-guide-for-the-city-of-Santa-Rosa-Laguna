/*
    Defines the map that appear in the InteractiveMap Tab.
    The image is divided into parts since displaying a large single images
    cause it to be blurred.

    Note this file is not optional
*/
import InteractiveMap from '../database/!interfaces/Map';

const interactivemapdata :InteractiveMap = {
    geolocation: {
        x:      121.041694,  endy: 14.21141, //041406
        endx:   121.135533,  y: 14.339070,   //339077

        //https://www.instantstreetview.com/@14.339077,121.041694,150.95h,-21.17p,1z,4mhi6UAWlDuADL38i_RpGg
        //https://www.instantstreetview.com/@14.211493,121.135498,145.98h,2.88p,1z,qYL8T89Z3C630CeMPQHTcw

        //https://www.instantstreetview.com/@14.338802,121.041406,351.6h,7.17p,1z,ilawfSqFiZVSjyfV7r3dgA
        //https://www.instantstreetview.com/@14.211404,121.135533,173.25h,-9.48p,1z,Cf_Vd4MGD-1BYmfKYFtY5Q
    },
    images: [
        require('../assets/map/santarosamap-0-0.jpg'),
        require('../assets/map/santarosamap-1-0.jpg'),
        require('../assets/map/santarosamap-2-0.jpg'),
        require('../assets/map/santarosamap-3-0.jpg'),
        require('../assets/map/santarosamap-0-1.jpg'),
        require('../assets/map/santarosamap-1-1.jpg'),
        require('../assets/map/santarosamap-2-1.jpg'),
        require('../assets/map/santarosamap-3-1.jpg'),
        require('../assets/map/santarosamap-0-2.jpg'),
        require('../assets/map/santarosamap-1-2.jpg'),
        require('../assets/map/santarosamap-2-2.jpg'),
        require('../assets/map/santarosamap-3-2.jpg'),
        require('../assets/map/santarosamap-0-3.jpg'),
        require('../assets/map/santarosamap-1-3.jpg'),
        require('../assets/map/santarosamap-2-3.jpg'),
        require('../assets/map/santarosamap-3-3.jpg')
    ],
    tilecolumn:     4,
    tilerow:        4,
    tileheight:     875,
    tilewidth:      625,
    width:          2500,
    height:         3499,
    zoomlevels:     [0.25, 0.35, 0.5, 0.75, 1, 1.5],
};
export default interactivemapdata;