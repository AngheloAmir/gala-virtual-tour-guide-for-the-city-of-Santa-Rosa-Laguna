/*
*/
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from 'react-native';
//@ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ALLPLACES } from '../../../../../database/assets';
import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI }        from '../../localstateAPI/interface';
import { flipSearchButton, setMapCenter, setZoomLevel}     from '../../localstateAPI/actions';


const places = ALLPLACES.map((place :any) => {
    return {
        name: place.name,
        lat: place.lat,
        lng: place.lng,
    }
})

export default function SearchButton() {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [matching, setmatching] = React.useState([{name: '', lat: 0, lng: 0}]);

    function searchbarChange( text :string) {
        if(!text || text.length <= 0) {
            setmatching([]);
            return;
        };
        text = text.toLocaleLowerCase();
        let matchingplaces :any = [];
        places.forEach( place => {
            const pname =  place.name.toLowerCase();
           if(pname.includes(text))
                //console.log('Found: ' + place.name );
                matchingplaces.push(place);
        });
        setmatching(matchingplaces);
    }

    function handlePlaceClick(place :any) {
        //console.log('looking for: ' + place.name );
        localDispatch( flipSearchButton() );
        localDispatch( setMapCenter(place));
        localDispatch( setZoomLevel(18));
    }

    return (
        <View style={styles.container}>
            {
                localState.isSearchBarShow ?
                    <View style={styles.searchBarContainer}>
                        <View style={styles.search}>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={searchbarChange}
                                placeholder='place name'
                            />
                            <MaterialCommunityIcons name='map-search' size={42} color='black' />
                        </View>
                            { matching.map((p :any, i :number) => {
                                return (
                                    <TouchableOpacity key={i}
                                        style={{marginBottom: 8}}
                                        onPress={() => handlePlaceClick(p)}
                                    >
                                        <Text style={{fontSize: 18}}>{p.name}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                    </View>
                            :
                    <TouchableOpacity onPress={() => localDispatch(flipSearchButton()) }>
                        <MaterialCommunityIcons name='map-marker-radius' size={42} color='black' />
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 5,
    },
    searchBarContainer: {
        width: Dimensions.get('screen').width * 0.8,
        padding: 8,
        backgroundColor: 'rgba(230, 240, 250, 1)',
        borderColor: 'rgba(115, 170, 220, 1)',
        borderWidth: 1,
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textinput: {
        borderWidth: 1,
        fontSize: 18,
        height: 24,
        width: '80%',
        padding: 4,
        paddingLeft: 8
    },
});

/*
{
                                ALLPLACES.map((place :any, index :number) => {
                                    return (
                                        <View key={index}>
                                            <Text>{place.name}</Text>
                                        </View>
                                    )
                                })
                            }
                            */