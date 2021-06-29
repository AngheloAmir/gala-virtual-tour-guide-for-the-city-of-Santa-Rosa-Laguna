/*
    Define the structure of a Map object.
    It contains camera position and its image
*/

export interface Map {
    mapimage    :any;
    cameras     :Array<{
        x   :number;        //the max value should be 45, to precisely draw the camera icon in the map as screen size varies from phone
        y   :number;        //the max value should be 80
        image :any;
    }>; 
}