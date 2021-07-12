import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { MapShape } from "expo-leaflet";

import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI } from '../../localstateAPI/interface';
import { setFindPlacesOpen, setMapMarkers, setMapLock, setZoomlevel, setMapCenter, setMapPathIsLoading, setMapPolyLines, setDialogMessage } from '../../localstateAPI/actions';
import { getPathWays } from '../../functions';
import { Responsive, useResponsive } from '../../../../Utility/useResponsive';

import { establishments } from '../../../../../database/assistantour/establishments';

export default function FindPlaceContent() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [openedItem, setOpenedItem] = React.useState('');
    const responsive :Responsive = useResponsive();
    const WIDTH  = 300;
    const HEIGHT = 360;

    const styles = StyleSheet.create({
        container: {
            position: 'absolute', width: WIDTH, height: HEIGHT,
            top:  ((responsive.height - HEIGHT) / 2) - 40,
            left: ((responsive.width - WIDTH) /2),
            backgroundColor: 'white', borderWidth: 1,
            borderRadius: 8, padding: 8, zIndex: 100,
        },
        headingContainer: {
            height: 36, borderBottomColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 2,
        },
        title: {
            fontSize: 21, fontWeight: '500',
        },
        item: {
            marginTop: 8,
        },
        itemHeading: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 8,
        },
        itemSelected: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 8,
            borderRadius: 8,
            backgroundColor: '#ddd',
        },
        itemText: {
            fontSize: 18,
        },
        itemsList: {
            marginLeft: 16, borderLeftWidth: 1,
            paddingLeft: 12, borderLeftColor: 'rgba(115, 170, 220, 1)'
        },
        anitem: {
            padding: 4,
        },
        buttonsContainer: {
            borderTopWidth: 2,
            borderColor: 'rgba(115, 170, 220, 1)',
            marginTop: 12, 
        },
        buttonCancel: {
            alignSelf: 'center',
        },
        buttonText: {
            fontSize: 21, textAlign: 'center', color: '#338',
        }
    });
    
    function handleFindNearby(index :number) {
        localDispatch(setFindPlacesOpen(false));

        //The user position is always stored at mapmarkers[0]
        const userLocation :{lat: number, lng: number} = localState.mapmarkers[0].position;
        let   closestEst   :{lat: number, lng: number} = {lat: 0, lng: 0};
        let   closestGradeLat = 999, closestGradeLng = 999, estaGradeLat = 0, estaGradeLng = 0;
        let   establishmentIndex: number = -1;
        for(let i = 0; i < establishments[index].items.length; i++ ) {
            const temp = {
                lat: establishments[index].items[i].lat,
                lng: establishments[index].items[i].lng,
            }
            //get the establishment current grade
            if(userLocation.lat > temp.lat)
                estaGradeLat = userLocation.lat - temp.lat;
            else  
                estaGradeLat = temp.lat - userLocation.lat;
            if(userLocation.lng > temp.lng)
                estaGradeLng = userLocation.lng - temp.lng;
            else
                estaGradeLng = temp.lng - userLocation.lng;
            //compare the grade
            if(estaGradeLng < closestGradeLng || estaGradeLng < closestGradeLng) {
                establishmentIndex = i;
                closestGradeLat = estaGradeLat; closestGradeLng = estaGradeLng;
                closestEst = {lng: temp.lng, lat: temp.lat}
            }
        }
        const userPosition = localState.mapmarkers[0].position;
        const mapmarkers = localState.mapmarkers.filter((marker, index) => index !== 0);
        localDispatch( setMapMarkers([...mapmarkers, {
              id: localState.mapmarkers.length + '' ,
              position: closestEst,
              icon: '<div style="margin-top: -28px; margin-left: 26px">🏨</div>', size: [24, 24],
              //@ts-ignore
              name: establishments[index].items[establishmentIndex].name,
              commute: 'Establishment'
        }]) );
        localDispatch( setDialogMessage('Found Establishment', 'Nearest ' + establishments[index].category + ' is ' + establishments[index].items[establishmentIndex].name) );           
        localDispatch( setMapLock(true) );
        localDispatch( setZoomlevel(12) );
        localDispatch( setMapCenter(userPosition));
        localDispatch( setMapPathIsLoading(true) );

        ( async () => {
            try {
              //let polylines :Array<MapShape> = [];
                const id   :number = localState.mapmarkers.length;
                const poly :MapShape | any = await getPathWays(id, userPosition, closestEst, true);
                //polylines.push(poly);
                localDispatch( setMapPolyLines([...localState.polylines, poly]) );
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

    async function handleFindThePlace(index :number, estaIndex :number) {
        localDispatch(setFindPlacesOpen(false));

        const userPosition = localState.mapmarkers[0].position;
        const establishmentPos = {
            lat: establishments[index].items[estaIndex].lat,
            lng: establishments[index].items[estaIndex].lng
        };
        const mapmarkers = localState.mapmarkers.filter((marker, index) => index !== 0);
        localDispatch( setMapMarkers([...mapmarkers, {
              id: localState.mapmarkers.length + '' ,
              position: establishmentPos,
              icon: '<div style="margin-top: -28px; margin-left: 26px">🏨</div>', size: [24, 24],
              //@ts-ignore
              name: establishments[index].items[estaIndex].name,
              commute: 'Establishment'
        }]) );

        localDispatch( setMapLock(true) );
        localDispatch( setZoomlevel(12) );
        localDispatch( setMapCenter(userPosition));
        localDispatch( setMapPathIsLoading(true) );

        ( async () => {
            try {
              //let polylines :Array<MapShape> = [];
                const id   :number = localState.mapmarkers.length;
                const poly :MapShape | any = await getPathWays(id, userPosition, establishmentPos, true);
                //polylines.push(poly);
                localDispatch( setMapPolyLines([...localState.polylines, poly]) );
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

    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.title}>Find Places</Text>
            </View>
            
            <ScrollView>
            {
                establishments.map((item, index) => {
                    return (
                        <View style={styles.item} key={index}>
                            <TouchableOpacity style={openedItem == item.category ? styles.itemSelected : styles.itemHeading}
                                onPress={() => {
                                    if(openedItem == item.category) setOpenedItem('');
                                    else setOpenedItem(item.category);
                            }}>
                                <Text style={styles.itemText}>{item.category}</Text>
                                {
                                    openedItem == item.category ?
                                    <MaterialIcons name='arrow-drop-down' size={32} color={'black'} /> :
                                    <MaterialIcons name='arrow-drop-up' size={32} color={'black'} />
                                }
                            </TouchableOpacity>
                            {
                                openedItem == item.category &&
                                <View style={styles.itemsList}>
                                    <TouchableOpacity style={styles.anitem} onPress={() => handleFindNearby(index)}>
                                        <Text style={styles.itemText}>Find nearby</Text>
                                    </TouchableOpacity>
                                    {
                                        item.items.map((estb, ei) => {
                                            return (
                                                <TouchableOpacity key={ei} style={styles.anitem} 
                                                    onPress={() => handleFindThePlace(index, ei)}>
                                                    <Text style={styles.itemText}>{estb.name}</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            }
                        </View>
                    )
                })
            }
            </ScrollView>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={ styles.buttonCancel } onPress={() => localDispatch(setFindPlacesOpen(false))}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
