/*
    Return an array of MapMarkers (that is used by Expo-Leaftleft) based on the current tour
*/
import { MapMarker } from "expo-leaflet";
import { GalaSelfGuidedTour, FromToInterface } from '../../../../database/!interfaces/GalaSelfGuidedTour';

export function GetMapDestinationMarkers(tours :GalaSelfGuidedTour, startingIndex :number) :Array<MapMarker> {
    const destinations :Array<MapMarker> = tours.destinations.map((item :FromToInterface, i :number) => {
        return {
          id: i + startingIndex + '' ,
          position: { lat: item.to.lat, lng: item.to.lng },
          icon: '<div style="margin-top: -28px; margin-left: 32px">🏁</div>', size: [32, 32],
          name:     item.to.name,
          commute:  item.to.commute,
        };
    });
    if(tours.pointOfInterests) {
        const prevLastIndex = destinations.length + startingIndex;
        const poi :Array<MapMarker> = tours.pointOfInterests?.map((item, i) => {
            return {
              id: i + prevLastIndex + '' ,
              position: { lat: item.lat, lng: item.lng },
              icon: '<div style="margin-top: -28px; margin-left: 26px">🚩</div>', size: [24, 24],
              name: item.name,
            };
          });
        return [...destinations, ...poi];
    }
    return destinations;
}
