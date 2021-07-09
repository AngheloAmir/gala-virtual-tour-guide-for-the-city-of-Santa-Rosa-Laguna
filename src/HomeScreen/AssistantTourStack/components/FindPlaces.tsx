import React from 'react';
import { View, Text } from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

export default function FindPlacesContainer() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);
    return (
        <View style={{position: 'absolute', zIndex: 20}}>
            {
                localState.isFindPlacesOpen && <FindPlaceContent />
            }
            {
                localState.isFindPlacesOpen &&
                <View style={{width: 2000, height: 2000, position: 'absolute', top: 0, backgroundColor: 'rgba(0,0,0,.5)'}}>
                </View>
            }
        </View>
    )
}

function FindPlaceContent() {
    return (
        <View>
            <Text>adasdasd a</Text>
        </View>
    )
}