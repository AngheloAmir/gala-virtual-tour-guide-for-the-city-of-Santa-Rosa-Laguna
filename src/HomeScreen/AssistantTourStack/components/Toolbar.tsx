import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MapShape } from "expo-leaflet";

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';
import { flipIsMapCenter, flipIsSoundPlay, setSelectTourOpen, setMapMarkers, setMapPolyLines,
        setMapLock, setZoomlevel, setMapCenter, setMapPathIsLoading, setDialogMessage, setFindPlacesOpen} from '../localstateAPI/actions';
import { Responsive, useResponsive } from '../../../Utility/useResponsive';

import { FromToInterface } from '../../../../database/!interfaces/GalaSelfGuidedTour';
import { GalaTours } from '../../../../database/assistantour/tours';
import { getMapDestinationMarkers, getPathWays } from '../functions/Functions';

const ICONSIZE      = 24;
const ICONSIZEBG    = ICONSIZE + 4;

export default function Toolbar() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [notifmsg, setnotifmsg]   = React.useState('');
    const [shownotif, setshow]      = React.useState(false);
    const [timeoutid, settimeoutid] = React.useState();
    const responsive :Responsive = useResponsive();    

    React.useEffect(() => {
        clearTimeout(timeoutid);
        if(notifmsg.length > 1) {
            setshow(true);
            let i = setTimeout(() => {
                setshow(false);
            }, 3000);
            // @ts-ignore
            settimeoutid(i);
        }
        return () => clearTimeout(timeoutid); 
    },[notifmsg]);

    const styles = StyleSheet.create({
        container: {
            zIndex: 10, width: responsive.width, height: 100,
            borderBottomColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 2,
            paddingHorizontal: 8, paddingVertical: 16,
            backgroundColor: 'rgba(230, 240, 250, 1)',
            flexDirection: 'column',
        },
        tourcontainer: {
            flexDirection: 'row', width: '100%',
        },
        text: {
            fontSize: 18, marginRight: 12,
        },
        listOfTours: {
            borderWidth: 2, borderColor: 'rgba(115, 170, 220, 1)', borderRadius: 8,
            width: '60%', alignItems: 'center',
        },
        button: {
            width: '35%', marginLeft: '4%',
        },
        iconsContainer: {
            flexDirection: 'row', justifyContent: 'space-evenly'
            
        },
        iconsItem: {
            marginTop: 12, height: ICONSIZEBG + 4, width: 42,
        },
        messageContainer: {
            marginTop: 12, padding: 4, borderWidth: 1, borderRadius: 4,
            backgroundColor: 'white', borderColor: 'rgba(115, 170, 220, 1)',
        },
        messageText: {
            textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'red',
        },
    });

    async function handleOnNavigate() {
        if(localState.currenttour.index < 0) {
            setnotifmsg('Please select your tour first');
            return;
        };
        const destinationsAndPointOfInterestMarkers = getMapDestinationMarkers(GalaTours[localState.currenttour.index], 1);
        const userPosition = localState.mapmarkers[0].position;
        localDispatch( setMapMarkers(destinationsAndPointOfInterestMarkers) );
        localDispatch( setMapLock(true) );
        localDispatch( setZoomlevel(12) );
        localDispatch( setMapCenter(userPosition));
        localDispatch( setMapPathIsLoading(true) );
        ( async () => {
            try {
              let polylines :Array<MapShape> = [];
              for(let i = 0; i <  GalaTours[localState.currenttour.index].destinations.length; i++ ) {
                const fromTo :FromToInterface = GalaTours[localState.currenttour.index].destinations[i];
                const from  = fromTo.from === 'user' ? userPosition : { lat: fromTo.from.lat, lng: fromTo.from.lng };
                const to    = { lat: fromTo.to.lat, lng: fromTo.to.lng };
                const poly :MapShape | any = await getPathWays(i, from, to);
                polylines.push(poly);
              }
              localDispatch( setMapPolyLines(polylines) );
            } catch(err) {
                localDispatch( setMapLock(false) );
                localDispatch( setDialogMessage('Failed...', 'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n' + err) );           
            }
            localDispatch( setMapPathIsLoading(false) );
            setTimeout(() => {
                localDispatch( setMapLock(false) );
                localDispatch( setZoomlevel(17) );
            }, 3000);
          })();
    }

    function handleInfoIconPress() {
        if(localState.currenttour.index < 0) return;
        let info = `${GalaTours[localState.currenttour.index].name} \n`;
        info    += `${GalaTours[localState.currenttour.index].longdescription}\n\n`;
        info    += GalaTours[localState.currenttour.index].destinations.map((dest) => {
            if(dest.to.commute)
                return `${dest.to.name}\n   ${dest.to.commute}\n\n`;
            return `${dest.to.name}\n\n`;
        });
        localDispatch( setDialogMessage('Tour information', info) );
    }

    function handleFindPlacePress() {
        localDispatch( setFindPlacesOpen(true) );
    }

    return (
        <View style={styles.container}>
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

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={handleFindPlacePress}>
                    <FontAwesome5 name='search-location' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleInfoIconPress}>
                    <FontAwesome5 name='info-circle' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    localDispatch( flipIsMapCenter() );
                    localState.ismapcenter ?
                        setnotifmsg('The map will not center') :
                        setnotifmsg('The map will on center on your position');
                }}>
                {
                    localState.ismapcenter ?
                    <Entypo name='lock' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
                    <Entypo name='lock-open' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                }
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    localDispatch( flipIsSoundPlay() );
                    localState.playsound  ?
                        setnotifmsg('Sounds will not played') :
                        setnotifmsg('Sounds will be played');
                }}>
                {
                    localState.playsound ?
                    <Entypo name='sound' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
                    <Entypo name='sound-mute' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                }
                </TouchableOpacity>
            </View>

            { localState.isnavpathloading &&
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>.....Loading navigation path.....</Text>
                </View>
            }

            { shownotif &&
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{notifmsg}</Text>
                </View>
            }
            
        </View>
    )
}
