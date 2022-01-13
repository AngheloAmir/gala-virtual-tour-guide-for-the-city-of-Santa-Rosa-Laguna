/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the Expo Leaflet Map in the current scene

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown.
*/
import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { ExpoLeaflet, LeafletWebViewEvent } from "expo-leaflet";
import { StateAPI, contextProvider } from '../../../StateAPI/State';

//Local State API imports 
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { setUserPosition, setDialogMessage } from '../localstateAPI/actions';
//import { WindowDimension } from '../../../Utility/useResponsive';

import { mapOptions, mapLayers } from '../functions/options';
import { CheckIfGalaBookShow }   from '../functions/isShowGalaBook';

export default function LeafletContainer() {
    const { state } :StateAPI = React.useContext(contextProvider);
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    
    function onMapClicked(event :LeafletWebViewEvent) {
        switch(event.tag) {
            case 'onMapClicked':
                if(state.devmode ) {
                    localDispatch( setUserPosition(event.location) );
                    CheckIfGalaBookShow({localState, localDispatch}, event.location);
                    if(Platform.OS == 'web') {
                        console.log(event.location);
                    }
                }
                break;
            case 'onMapMarkerClicked':
                //if(Platform.OS == 'web') break;
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
        //height: responsive.height - 100 - 108,
        //width:  responsive.width,
        //flex: 1,
        height: '100%'
        //width:  WindowDimension.width,
        //transform: [{ rotate: '180deg' }],
        //flex: 1,
        //height: WindowDimension.height - 100,
        //width:  WindowDimension.width,
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
