/*
    Predefined (const object) options used by the LeaftletContainer

    EMOJI: 👇 🧍 👣 🚶 💡 🏁 🏃 🚩 🏨
*/
import { Platform } from 'react-native';
import { MapLayer, MapMarker, MapShape } from "expo-leaflet";

const ACESSTOKEN = 'pk.eyJ1IjoiYW5naGVsb2FtaXIiLCJhIjoiY2txZG0zZm5oMDI5NjJ1bXdqMXhocG95OSJ9.g6HfwWZcXrYKzntSrWiVzw';

export const NAVCOLORS :Array<any> = [
  'blue', 'darkgreen', 'darkorange', 'darkyellow'
];

export const mapOptions = {
    attributionControl: false,
    zoomControl: Platform.OS === 'web',
}

export const mapLayers: Array<MapLayer> = [
    {
      attribution:
        '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      baseLayerIsChecked: true,
      baseLayerName: 'Mapbox',
      layerType: 'TileLayer',
      url: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${ACESSTOKEN}`
    },
    /*
    {
      attribution:
        '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      baseLayerIsChecked: true,
      baseLayerName: 'OpenStreetMap',
      layerType: 'TileLayer',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    }
    */
];

export const IntroPosition = {lat: 14.296238, lng: 121.105799};

export const EmptyPolyline :MapShape = {
  // @ts-ignore
  //color: 'blue' attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
  shapeType: 'polyline', id: '0', positions: [{lat: 0, lng: 0}], color: NAVCOLORS[0], 
}

export function EmptyMarker(id :number) :MapMarker {
  return {
    id: id + '', position: {lat: 0, lng: 0}, icon: '<div style="margin-top: -16px">🏁</div>', size: [32, 32]
  }
}

import { GalaTours } from '../../../database/assistantour/tours';
import { GalaSelfGuidedTour } from '../../../database/!interfaces/GalaSelfGuidedTour';
export function getTours() {
  let TOURS :any = [];
  GalaTours.map((item :GalaSelfGuidedTour) => {
    TOURS.push({ name: item.name, description: item.description });
  });
  return TOURS;
}
