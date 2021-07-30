/*
    * TYPE
        Dialog Box - A Dialog Box is a component that over takes the current scene without replacing it.

    * DESCRIPTION
        FindPlaces component. Show a dialog (window) in the middle of the screen when the user
    press the icon 'find place' in the toolbar. The action that make this component appear in the
    screen is found in Toolbar.js. This component extent DialogBox from src/utility

    * VISIBLE WHEN
        Will display if localState.isFindPlacesOpen becomes true (by clicking find place in the toolbar)
*/
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// @ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DialogBox                        from '../../../Utility/DialogBox';
import { localContextProvider }         from '../localstateAPI/state';
import { LocalStateAPI }                from '../localstateAPI/interface';
import { setFindPlacesOpen,
        clearPolyLineAndMarker,
        setDialogMessage }              from '../localstateAPI/actions';
import findPlaceFunction                from './FindPlaces/findPlaceFunction';
import findNearbyFunction               from './FindPlaces/findNearbyFunction';
import { EstablishmentCategory }        from '../../../../database/!interfaces/Establishment';
const tourjson                          = require ('../../../../database/assistantour.json');
const establishments :Array<EstablishmentCategory> = tourjson.establishments;

export default function findPlaces() {
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    return (
        <DialogBox
            title='Find Places'
            isshow={true}
            dialogContent={dialogContent}
            cancel={() => localDispatch(setFindPlacesOpen(false))}
        />
    );
}

export function dialogContent() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [openedItem, setOpenedItem] = React.useState('');

    function notGranted() {
        localDispatch( setDialogMessage(
            'Feature not available',
            'This feature is available when location permission is granted, your phone has Google, and your are not far from the city.')
        );
    }

    async function handleFindNearby(index :number) {
        localDispatch(setFindPlacesOpen(false));
        if(!localState.isGranted)
            notGranted();
        else
            findNearbyFunction({localDispatch, localState}, index);
    }

    async function handleFind(index :number, estaIndex :number) {
        localDispatch(setFindPlacesOpen(false));
        if(!localState.isGranted)
            notGranted();
        else
            findPlaceFunction({localDispatch, localState}, index, estaIndex);
    }

    return (
    <View>
        <View style={styles.item}>
            <TouchableOpacity style={styles.itemHeading}
                onPress={() => {
                    localDispatch(setFindPlacesOpen(false));
                    localDispatch(clearPolyLineAndMarker());
            }}>
                <Text style={styles.clearMarkerText}>Clear all markers</Text>
            </TouchableOpacity>
        </View>

    {
        establishments.map((item :EstablishmentCategory, index :number) => {
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
                                <Text style={styles.itemTextFind}>Find nearby</Text>
                            </TouchableOpacity>
                            {
                                item.items.map((estb, ei) => {
                                    return (
                                        <TouchableOpacity key={ei} style={styles.anitem} 
                                            onPress={() => handleFind(index, ei)}>
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
    </View>
    );
}

const styles = StyleSheet.create({
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
    itemTextFind: {
        fontSize: 20, color: 'darkblue', fontWeight: '700',
    },
    clearMarkerText :{
        fontSize: 20, color: 'darkblue', fontWeight: '700',
        paddingBottom: 6,
    },
    itemText: {
        fontSize: 20,
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
