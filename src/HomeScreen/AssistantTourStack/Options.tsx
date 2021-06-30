/*
    Options and other functionality used by the LeaftletContainer

    EMOJI: 👇 🧍 👣 🚶 💡 🏁 🏃
*/
import { Platform } from 'react-native';
import { MapLayer, MapMarker, MapShape } from "expo-leaflet";

export const mapOptions = {
    attributionControl: false,
    zoomControl: Platform.OS === 'web',
}

export const mapLayers: Array<MapLayer> = [
    {
      attribution:
        '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      baseLayerIsChecked: true,
      baseLayerName: 'OpenStreetMap',
      layerType: 'TileLayer',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
];

export const mapShapes: Array<MapShape | any> = [
    {
      shapeType: 'circle',
      color: '#123123',
      id: '1',
      center: {lat: 14.314090, lng: 121.112111,},
      radius: 30,
    },
    {
        shapeType: 'polyline',
        color: 'purple',
        id: '2',
        positions: [
          { lat: 14.314090, lng: 121.112111 },
          { lat: 14.314300, lng: 121.112321 },
          { lat: 14.314520, lng: 121.115251 },
        ],
        radius: 50,
    },
    {
      shapeType: 'polyline',
        color: 'blue',
        id: '3',
        positions: [
          { lat: 14.2943612, lng: 121.1015836 },
          {lat: 14.2915617, lng: 121.0985412},
          //{lat: 14.2942535, lng: 121.1014455}
      

          //{lat: lng: }
        ],
    }
];

