/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/components/Toolbar

    * DESCRIPTION
        The buttons (icon) that appear below of the "Select tour" box and "Find Path" buttons in 
    the toolbar. It display buttons:
        -> Find Places button
            Which is simple as setting localState.isSelectTourOpen to true when pressed
            and then the dialog box for it will be show (it appear in src/HomeScreen/AssitantTour/IndexContainer)
        -> Tour Information button
            Which show the current tour information in a AlertBox
        -> Map Locking / Map Not Lock button
        -> Sound play or not button
        
    * VISIBLE WHEN
        It always visible when the GPS Feature of the App is in the screen.
*/
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
//@ts-ignore
import Entypo from 'react-native-vector-icons/Entypo';
//@ts-ignore
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { localContextProvider } from '../../localstateAPI/state';
import { LocalStateAPI } from '../../localstateAPI/interface';
import { flipIsMapCenter, flipIsSoundPlay, setDialogMessage, setFindPlacesOpen} from '../../localstateAPI/actions';
import { GalaTours }            from '../../../../../database/assistantour/tours';
const ICONSIZE      = 24;
const ICONSIZEBG    = ICONSIZE + 4;

interface propsReceive {
    setnotifmsg :(text :string) => void;
}

export default function IconButtons(props :propsReceive) {
    const { localState, localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    function handleInfoIconPress() {
        if(localState.currenttour.index < 0) {
            props.setnotifmsg('Please select your tour first');
            return;
        }
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
                props.setnotifmsg('The map will not center') :
                props.setnotifmsg('The map will on center on your position');
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
                props.setnotifmsg('Sounds will not played') :
                props.setnotifmsg('Sounds will be played');
        }}>
        {
            localState.playsound ?
            <Entypo name='sound' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
            <Entypo name='sound-mute' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
        }
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: 'row', justifyContent: 'space-evenly'
        
    },
    iconsItem: {
        marginTop: 12, height: ICONSIZEBG + 4, width: 42,
    },
});
