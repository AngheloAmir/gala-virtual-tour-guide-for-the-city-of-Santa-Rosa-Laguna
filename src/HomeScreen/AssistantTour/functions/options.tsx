/*
    Predefined (const object) options used by the LeaftletContainer and this assistant tour features

    EMOJI: 👇 🧍 👣 🚶 💡 🏁 🏃 🚩 🏨
*/
//@ts-nocheck
import { MapLayer } from "expo-leaflet";
const map = require('../../../../database/map.json');

export const NAVCOLORS :Array<any> = [
  'blue', 'darkgreen', 'darkorange', 'darkyellow'
];

export const mapOptions = {
    attributionControl: map.mapOptions.attributionControl,
    zoomControl:        map.mapOptions.zoomControl
}

export const mapLayers: Array<MapLayer> = [
    {
      attribution:         map.maplayer.attribution,
      baseLayerIsChecked:  map.maplayer.baseLayerIsChecked,
      baseLayerName:       map.maplayer.baseLayerName,
      layerType:           map.maplayer.layerType,
      url:                 map.maplayer.url,
    }
    /*
    {
      attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      baseLayerIsChecked: true,
      baseLayerName: 'OpenStreetMap',
      layerType: 'TileLayer',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
   }
   */
];

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
    const tourdata :GalaSelfGuidedTour = ASSETS[item];
    const poijson = tourdata.pointOfInterests;
    let poi :Array<DestinationLocation>;
    
    if( poijson && poijson.length > 0) {
      poi = poijson.map((item :string | any ) => {
        if(item.lat)
          return { ...item };
        else {
          const itemjson :DestinationLocation = ASSETS[item];
          return itemjson;
        }
      })
    }
    else
      poi = {
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
