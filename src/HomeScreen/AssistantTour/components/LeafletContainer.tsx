/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/IndexContainer - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the Expo Leaflet Map in the current scene

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown.
*/
import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { ExpoLeaflet, LeafletWebViewEvent } from "expo-leaflet";

//Local State API imports 
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setUserPosition, setDialogMessage } from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';

//Expo leaftlet options
import { mapOptions, mapLayers } from '../functions/options';

export default function LeafletContainer() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const responsive :Responsive = useResponsive();
    
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

    const styles = {
        //the value 100 is the height of the toolbar
        //the value 108 is the height of the topbar + bottom tab navigatior
        height: responsive.height - 100 - 108,
        width: responsive.width
    }

    return (
        <View style={styles}>
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
