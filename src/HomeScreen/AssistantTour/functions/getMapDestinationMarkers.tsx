/*
    Return an array of MapMarkers (that is used by Expo-Leaftleft) based on the current tour
*/
import { MapMarker } from "expo-leaflet";
import { GalaSelfGuidedTour, FromToInterface } from '../../../../database/!interfaces/GalaSelfGuidedTour';
const mapjson = require('../../../../database/map.json');

export function GetMapDestinationMarkers(tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> {
    const destinations :Array<MapMarker> = tours.destinations.map((item :FromToInterface, i :number) => {
        return {
          id: i + startingIndex + '' ,
          position: {
            lat: item.to.lat + mapjson.mapdestinationadjustlat,
            lng: item.to.lng + mapjson.mapdestinationadjustlng
          },
          icon:     mapjson.mapdestinationicon,
          size:     mapjson.mapdestinationiconSize,
          name:     item.to.name,
          commute:  item.to.commute,
        };
    });
    if(tours.pointOfInterests) {
        const prevLastIndex = destinations.length + startingIndex;
        const poi :Array<MapMarker> = tours.pointOfInterests?.map((item, i) => {
            return {
              id:       i + prevLastIndex + '' ,
              position: {
                lat: item.lat + mapjson.mappointofinterestadjustlat,
                lng: item.lng + mapjson.mappointofinterestadjustlng
              },
              icon:     mapjson.mappointofinteresticon,
              size:     mapjson.mappointofinteresticonSize,
              name:     item.name,
            };
          });
        return [...destinations, ...poi];
    }
    return destinations;
}
