/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/components/Toolbar

    * DESCRIPTION
        It show the component that appear in the top of toolbar in the GPS Feature of the APP.
    It handle when the user click the select tour box and when press the "Find Path" button is pressed.

    * VISIBLE WHEN
        It always visible when the GPS Feature of the App is in the screen.
*/
import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { MapShape } from "expo-leaflet";
import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI } from '../../localstateAPI/interface';
import { setSelectTourOpen,
        setMapMarkers,
        setMapPolyLines,
        setMapLock,
        setZoomlevel,
        setMapCenter,
        setMapPathIsLoading,
        setDialogMessage,
        setPoiIndex
} from '../../localstateAPI/actions';
import NetInfo from "@react-native-community/netinfo";
import { getMapDestinationMarkers, getPathWays } from '../../functions';
import { FromToInterface }    from '../../../../../database/!interfaces/GalaSelfGuidedTour';
import { GalaTours }          from '../../functions/options';

interface propsReceive {
    setnotifmsg :(text :string) => void;
}

export default function SelectTourAndNavigate( props :propsReceive) {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    async function handleOnNavigate() {
        if(localState.currenttour.index < 0) {
            props.setnotifmsg('Please select your tour first');
            return;
        };

        //Check internet connection before a request is made
        const networkstatus = await NetInfo.fetch();
        if(!networkstatus.isConnected) {
            props.setnotifmsg('There is no internet connection');
            console.log('There is no internet connection');
            return;
        }

        const destinationsAndPointOfInterestMarkers =
            getMapDestinationMarkers(GalaTours[localState.currenttour.index], 1);

        if(!localState.isGranted) {
            localDispatch( setDialogMessage(
                'Cant create path',
                'Cant create navigational path because location permission is not granted or you are too far from the city.')
            );
            localDispatch( setMapMarkers(destinationsAndPointOfInterestMarkers) );
            localDispatch( setPoiIndex(-1));
            return;
        }

        const userPosition = localState.mapmarkers[0].position;
        localDispatch( setMapMarkers(destinationsAndPointOfInterestMarkers) );
        localDispatch( setMapLock(true) );
        localDispatch( setZoomlevel(12) );
        localDispatch( setMapCenter(userPosition));
        localDispatch( setMapPathIsLoading(true) );
        localDispatch( setPoiIndex(-1)); //this fix a bug that make notifyWhenClose component still appear even when new tour is ask
        localDispatch( setMapPolyLines([
            // @ts-ignore
            { shapeType: 'polyline', id: '0', positions: [{lat: 0, lng: 0}], color: 'blue', }
        ]));
        ( async () => {
            try {
              let polylines :Array<MapShape> = [];
              for(let i = 0; i <  GalaTours[localState.currenttour.index].destinations.length; i++ ) {
                const fromTo :FromToInterface = GalaTours[localState.currenttour.index].destinations[i];
                const from  = fromTo.from === 'user' ? userPosition : { lat: fromTo.from.lat, lng: fromTo.from.lng };
                const to    = { lat: fromTo.to.lat, lng: fromTo.to.lng };
                const poly :MapShape | any = await getPathWays(i, from, to, false);
                polylines.push(poly);
              }
              localDispatch( setMapPolyLines(polylines) );
            } catch(err) {
                localDispatch( setMapLock(false) );
                localDispatch( setDialogMessage(
                    'Failed to create path',
                    'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n\nError details: ' + err)
                );           
            }
            localDispatch( setMapPathIsLoading(false) );
            setTimeout(() => {
                localDispatch( setMapLock(false) );
                localDispatch( setZoomlevel(17) );
            }, 3000);
          })();
    }

    return (
        <View style={styles.tourcontainer}>
            <TouchableOpacity style={styles.listOfTours} activeOpacity={0.7}
                onPress={() => localDispatch( setSelectTourOpen(true) )}
            >
                <Text style={{fontSize: 18}}>{localState.currenttour.name}</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <Button title='Find Path' onPress={handleOnNavigate} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tourcontainer: {
        flexDirection: 'row', width: '100%',
    },

    listOfTours: {
        borderWidth: 2, borderColor: 'rgba(115, 170, 220, 1)', borderRadius: 8,
        width: '60%', alignItems: 'center',
    },
    button: {
        width: '35%', marginLeft: '4%',
    },
});
