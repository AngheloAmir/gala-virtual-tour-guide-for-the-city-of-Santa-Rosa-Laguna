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
import { ActivityIndicator, View, Linking } from 'react-native';
import { ExpoLeaflet, LeafletWebViewEvent, MapMarker } from "expo-leaflet";
import { mapOptions, mapLayers} from './ViewCityMap/options';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setMapMarkerId, offSearchBar,
        setPlaceInfoShow,
        setInstantSVCreadit }   from '../localstateAPI/actions';
import { loadAllMapMarkers }    from './ViewCityMap/functions';
import SearchButton             from './ViewCityMap/SearchButton';
import Attribution              from './ViewCityMap/Attribution';
import AttributionInfo          from './ViewCityMap/AttributionInfo';
import PlaceInfo                from './ViewCityMap/PlaceInfo';
import AlertBox                 from '../../../Utility/AlertBox';

const mapmakers     :Array<MapMarker> = loadAllMapMarkers();
const emptymarker   :Array<MapMarker> = [{ id: '0', position: {lat: 0, lng: 0}, icon: '', size: [0, 0] }];

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
                localDispatch( offSearchBar() );
            default:
                break;
        }
    }

    function openStreetViewLink() {
        localDispatch(setPlaceInfoShow(false));
        //if( Platform.OS == 'web') {
            localState.webviewlink && Linking.canOpenURL(localState.webviewlink).then(supported => {
                if (supported) {
                Linking.openURL(localState.webviewlink);
                }
            });
        //}
        //else {
           //navigation.navigate('WebView');
        //}
    }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ExpoLeaflet
                    loadingIndicator={() => <ActivityIndicator/>}
                    mapCenterPosition={ localState.mapCenterPosition }
                    zoom={ localState.zoomlevel }
                    mapMarkers={ localState.isMarkerShow ? mapmakers : emptymarker}
                    mapLayers={mapLayers}
                    mapOptions={mapOptions}
                    maxZoom={18}
                    onMessage={onMapClicked}
                />
            </View>
            <SearchButton />
            <Attribution />

            { localState.attributionDialogShow &&   <AttributionInfo /> }
            { localState.placeInfoShow &&           <PlaceInfo navigation={navigation} /> }

            <AlertBox
                title='Notice'
                isshow={localState.isInstantSVCreadit == 1}
                ok={() => { localDispatch(setInstantSVCreadit()); openStreetViewLink(); }}
                text='You are visiting www.instantstreetview.com to look the street view. '
            />
        </View>
    );       
}
