/*
    Define all of the available function to be used in the GPS Navigation system
*/
import { init } from './init';
import { GetMapDestinationMarkers } from './getMapDestinationMarkers';
import { GetPathWays } from './getPathWays';
import IsClose from './IsClose';
import { CheckIfGalaBookShow } from './isShowGalaBook';

// Define what will happen after the map is loaded and draw
//( localDispatch :any, () => boolean)
export const Init = init;

//Return an array of MapMarkers (that is used by Expo-Leaftleft) based on the current tour
//(tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> 
export const getMapDestinationMarkers = GetMapDestinationMarkers;

//return a MapShape (polyline) that draws between two points
//(id :number, current :Geolocation, destination :Geolocation, isRed? :boolean) 
export const getPathWays = GetPathWays;

//Return true if two points is close to each other by distance howclose
//( pointA :Position, pointB :Position, howclose :number) :boolean
export const isClose = IsClose;

//A void function that set the gala book if show
export const checkIfGalaBookShow = CheckIfGalaBookShow;
