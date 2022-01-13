/*
    Define all of the available function to be used in the GPS Navigation system
*/
import { init } from './init';
import { GetMapDestinationMarkers } from './getMapDestinationMarkers';
import { GetPathWays } from './getPathWays';
import { getDistance } from './getDistance';
import IsClose from './IsClose';
//import { CheckIfGalaBookShow } from './isShowGalaBook';

/**
 * Define what will happen after the map is loaded and draw
 * @param ( localDispatch :any, () => boolean)
 */
export const Init = init;

/**
 * Return an array of MapMarkers (that is used by Expo-Leaftleft) based on the current tour
 * @param (tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> 
 */
export const getMapDestinationMarkers = GetMapDestinationMarkers;

/**
 * return a MapShape (polyline) that draws between two points
 * @param (id :number, current :Geolocation, destination :Geolocation, isRed? :boolean) 
 */
export const getPathWays = GetPathWays;

/**
 * Return true if two points is close to each other by distance howclose
 * @param ( pointA :Position, pointB :Position, howclose :number) :boolean
 */
export const isClose = IsClose;

/**
 * return the distance from one geolocation to another
 * @param (from :Position, to :Position) :Promise<number | null>
 */
export const GetDistance =getDistance;
