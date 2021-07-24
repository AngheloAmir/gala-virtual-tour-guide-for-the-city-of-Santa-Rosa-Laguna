/*
    Predefined (const object) options used by the LeaftletContainer
*/

import { MapLayer } from "expo-leaflet";
const map = require('../../../../../database/map.json');

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
];
