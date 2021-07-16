/*
    Define all of the available function to be used in the GPS Navigation system
*/
import { init } from './init';
import { UpdateUserLocation } from './updateUserLocation';
import { GetMapDestinationMarkers } from './getMapDestinationMarkers';
import { GetPathWays } from './getPathWays';
import IsClose from './IsClose';

// Define what will happen after the map is loaded and draw
//( localDispatch :any)
export const Init = init;

//Set the user postion by calling an localReducer
//( localDispatch: any) - localDispatch is a function
export const updateUserLocation = UpdateUserLocation;

//Return an array of MapMarkers (that is used by Expo-Leaftleft) based on the current tour
//(tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> 
export const getMapDestinationMarkers = GetMapDestinationMarkers;

//return a MapShape (polyline) that draws between two points
//(id :number, current :Geolocation, destination :Geolocation, isRed? :boolean) 
export const getPathWays = GetPathWays;

//Return true if two points is close to each other by distance howclose
//( pointA :Position, pointB :Position, howclose :number) :boolean
export const isClose = IsClose;
