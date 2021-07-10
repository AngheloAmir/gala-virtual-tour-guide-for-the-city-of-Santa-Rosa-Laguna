import React from 'react';
import { View} from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

import FindPlaceContent from './FindPlacesFragments/FindPlaceContent'; 

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
