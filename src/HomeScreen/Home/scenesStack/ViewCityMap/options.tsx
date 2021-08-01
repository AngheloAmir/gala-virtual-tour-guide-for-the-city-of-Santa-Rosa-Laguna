/*
    Predefined (const object) options used by the LeaftletContainer
*/

import { MapLayer } from "expo-leaflet";
const mapsjson = require('../../../../../database/map.json');

export const mapOptions = {
    attributionControl: mapsjson.mapOptions.attributionControl,
    zoomControl:        mapsjson.mapOptions.zoomControl
}

const layer = mapsjson.layers[ mapsjson.whichLayerToUse ];
export const mapLayers: Array<MapLayer> = [ layer ];
