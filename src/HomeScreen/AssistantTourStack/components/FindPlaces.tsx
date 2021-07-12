import React from 'react';
import { View} from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI } from '../localstateAPI/interface';

import FindPlaceContent from './FindPlacesFragments/FindPlaceContent'; 

export default function FindPlacesContainer() {
    const { localState } :LocalStateAPI = React.useContext(localContextProvider);

    if(!localState.isFindPlacesOpen)
        return <View style={{position: 'absolute'}}></View>
    
    return (
        <FindPlaceContent />
    )
}
