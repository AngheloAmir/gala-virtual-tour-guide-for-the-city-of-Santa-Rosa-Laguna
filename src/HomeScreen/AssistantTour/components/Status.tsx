/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Status of the user

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown at the bottom
*/
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';

export default function Status() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const [show, setshow] = React.useState(true);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => setshow(!show)}
        >
        { show ?
            <View>
                <UserStatusBar />
                { localState.isLookingForAPlace && <DestinationStatusBar /> }
            </View>
            :
            <Text style={styles.text}>open status</Text>
        }
        </TouchableOpacity>
    )
}

function DestinationStatusBar() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const distances = localState.statusDestination.map((value) => {
        if(value.distance < 0) 
            return {
                ...value, distance: 'n/a'
            }
        else
            return {
                ...value,
                distance: value.distance > 1000 ?
                    (value.distance / 1000).toFixed(1) + ' km'
                    :
                    (value.distance).toFixed(1) + ' m'
            }
    });

    return (
        <View>
            { distances.map((value, key) => {
                return (
                    <View key={key}>
                        <Text style={styles.text}>{value.placename}</Text>
                        <Text style={styles.text}>   {value.distance}</Text>
                    </View>
                )
            })}
        </View>
    )
}

function UserStatusBar() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    const speed =
        localState.statusUser.speed > 0 ?
            ((localState.statusUser.speed * 3600) / 1000).toFixed(1) + ' km/hr'
            :
        '0 km/hr';

    function getDirection(angle :number) {
        if(angle == -1) return 'N/A';
        var directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
        var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
        return directions[index];
    }
    return (
        <View>
            { /* <Text style={styles.text}>Facing: {getDirection(localState.statusUser.facing)}</Text> */ }
            <Text style={styles.text}>{speed}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 16,
        right:  8,
        opacity: 0.5,
    },
    text: {
        fontSize: 16,
        textAlign: 'right'
    }
});
