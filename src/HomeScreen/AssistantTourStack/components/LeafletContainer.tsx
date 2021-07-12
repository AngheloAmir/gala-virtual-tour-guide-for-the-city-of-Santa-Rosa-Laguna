import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { ExpoLeaflet, LeafletWebViewEvent } from "expo-leaflet";

//Local State API imports 
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setUserPosition, setDialogMessage } from '../localstateAPI/actions';

//Expo leaftlet options
import { mapOptions, mapLayers } from '../functions/options';

export default function LeafletContainer() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    function onMapClicked(event :LeafletWebViewEvent) {
        switch(event.tag) {
            case 'onMapClicked':
                if(Platform.OS == 'web') {
                    localDispatch( setUserPosition(event.location) );
                    console.log(event.location);
                }
                break;
            case 'onMapMarkerClicked':
                for(let i = 0; i < localState.mapmarkers.length; i++) {
                    if(i == 0) continue;
                    if(localState.mapmarkers[i].id == event.mapMarkerId ) {
                    // @ts-ignore
                    //the property name does not exist in the type MapMarker, it was inserted in getMapDestinationMarkers()
                    if(localState.mapmarkers[i].commute )
                        // @ts-ignore
                        localDispatch( setDialogMessage(localState.mapmarkers[i].name, localState.mapmarkers[i].commute) )
                    else
                        // @ts-ignore
                        localDispatch( setDialogMessage('Point of interest', localState.mapmarkers[i].name));
                    }
                }
                break;
            default:
                break;
        }
    }

    return (
        <View style={{flex: 1}}>
            <ExpoLeaflet
                loadingIndicator={() => <ActivityIndicator/>}
                mapCenterPosition={ localState.mapcenter }
                mapMarkers={ localState.mapmarkers }
                mapShapes={ localState.polylines }
                zoom={ localState.zoomlevel }
                mapLayers={mapLayers}
                mapOptions={mapOptions}
                maxZoom={18}
                onMessage={onMapClicked}
            />
        </View>
    );
}
