/*
    Predefined (const object) options used by the LeaftletContainer

    EMOJI: 👇 🧍 👣 🚶 💡 🏁 🏃 🚩 🏨
*/
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

import { GalaTours } from '../../../../database/assistantour/tours';
import { GalaSelfGuidedTour } from '../../../../database/!interfaces/GalaSelfGuidedTour';
export function getTours() {
  let TOURS :any = [];
  GalaTours.map((item :GalaSelfGuidedTour) => {
    TOURS.push({ name: item.name, description: item.description });
  });
  return TOURS;
}
