/*
    * TYPE
        Scene - A screen is a component that occupies a large part of the screen

    * DESCRIPTION
        Show the Expo-leaflet map in the scene

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab, then pressed
        "view the city map" button.
*/
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ExpoLeaflet, LeafletWebViewEvent, MapMarker } from "expo-leaflet";
import { WindowDimension } from '../../../Utility/useResponsive';
import { mapOptions, mapLayers} from './ViewCityMap/options';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setMapMarkerId,
        setPlaceInfoShow }      from '../localstateAPI/actions';

import { loadAllMapMarkers }    from './ViewCityMap/functions';
import Attribution              from './ViewCityMap/Attribution';
import AttributionInfo          from './ViewCityMap/AttributionInfo';
import PlaceInfo                from './ViewCityMap/PlaceInfo';

const mapmakers     :Array<MapMarker> = loadAllMapMarkers();
const emptymarker   :Array<MapMarker> = [{ id: '0', position: {lat: 0, lng: 0}, icon: '', size: [0, 0] }];
const styles = {
    height: WindowDimension.height - 100 ,
    width:  WindowDimension.width,
}

export default function MapIndex({navigation} :any) {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    function onMapClicked(event :LeafletWebViewEvent) {
        switch(event.tag) {
            case 'onMapMarkerClicked':
                localDispatch( setPlaceInfoShow(false) );
                setTimeout(() => {
                    localDispatch(setMapMarkerId( parseInt(event.mapMarkerId) ));
                    localDispatch( setPlaceInfoShow(true) );
                }, 10);
                break;
            case 'onMapClicked':
                localDispatch( setPlaceInfoShow(false) );
            default:
                break;
        }
    }

    return (
        <View>
            <View style={styles}>
                <ExpoLeaflet
                    loadingIndicator={() => <ActivityIndicator/>}
                    mapCenterPosition={ {lat: 14.296238, lng: 121.105799} }
                    zoom={12}
                    mapMarkers={ localState.isMarkerShow ? mapmakers : emptymarker}
                    mapLayers={mapLayers}
                    mapOptions={mapOptions}
                    maxZoom={18}
                    onMessage={onMapClicked}
                />
            </View>
            <Attribution />
            { localState.attributionDialogShow &&   <AttributionInfo /> }
            { localState.placeInfoShow &&           <PlaceInfo navigation={navigation} /> }
        </View>
    );       
}
