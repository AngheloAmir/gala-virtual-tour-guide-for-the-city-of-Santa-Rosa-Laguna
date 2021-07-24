/*
    * loadAllMapMarkers() :Array<MapMarker>
        Return all of the map markers which is places. Will used by expo-leaflet directly
*/
import { MapMarker } from "expo-leaflet";
import { ALLPLACES } from '../../../../../database/places/allplaces';

export function loadAllMapMarkers() :Array<MapMarker>{
    const mapmakers :Array<MapMarker> = ALLPLACES.map((item :any, i :number) => {
        if(item.type && item.type == 'info')
            return {
                id: i + '',
                position: { lat: item.lat, lng: item.lng },
                icon: '<div>❓</div>', size: [24, 24],
                name:           item.name,
                description:    item.description,
            };
        else
            return {
                id: i + '',
                position: { lat: item.lat, lng: item.lng },
                icon: '<div style="margin-top: -25px; margin-left: 25px">🚩</div>', size: [24, 24],
                name:           item.name,
                description:    item.description,
            };
    });
    return mapmakers;
}