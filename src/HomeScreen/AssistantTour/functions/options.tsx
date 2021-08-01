/*
    Predefined (const object) options used by the LeaftletContainer and this assistant tour features
*/

import { MapLayer } from "expo-leaflet";
const mapsjson = require('../../../../database/map.json');

export const NAVCOLORS :Array<any> = [
  'blue', 'darkgreen', 'darkorange', 'darkyellow'
];

export const mapOptions = {
    attributionControl: mapsjson.mapOptions.attributionControl,
    zoomControl:        mapsjson.mapOptions.zoomControl
}

const layer = mapsjson.layers[ mapsjson.whichLayerToUse ];
export const mapLayers: Array<MapLayer> = [ layer ];



/*
  Generate the Gala Tours from the JSON file (assistanttour.json).
  This method is required because json cannot contain an require() function that
  loads an assets and it cannot be done dynamically.
  Which means json only loads string and numbers.
  This load assets in the GalaTours
*/
import ASSETS                  from "../../../../database/assets";
import { GalaSelfGuidedTour,
         DestinationLocation } from '../../../../database/!interfaces/GalaSelfGuidedTour';
export const tourjson          = require('../../../../database/assistantour.json');
export const GalaTours :Array<GalaSelfGuidedTour> = tourjson.tours.map((item :string) => {
  //@ts-ignore
    const tourdata :GalaSelfGuidedTour = ASSETS[item];
    const poijson = tourdata.pointOfInterests;
    let poi :Array<DestinationLocation>;
    
    if( poijson && poijson.length > 0) {
      poi = poijson.map((item :string | any ) => {
        if(item.lat)
          return { ...item };
        else {
          //@ts-ignore
          const itemjson :DestinationLocation = ASSETS[item];
          return itemjson;
        }
      })
    }
    else
      poi = {
        //@ts-ignore
        lat: 0,
        lng: 0,
        name: 'empty',
        description: 'current tour has empty poi',
        voiceasset: "sample.mp3"
    };
    return {
      ...tourdata,
      pointOfInterests: poi
    }
})

export function getTours() {
  let TOURS :any = [];
  GalaTours.map((item :GalaSelfGuidedTour) => {
    TOURS.push({ name: item.name, description: item.description });
  })
  return TOURS;
}
