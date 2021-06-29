import React from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { PlaceInformation } from '../../../../database/!interfaces/PlaceInformation';

const colors :Array<string> = [
    'rgba(70, 200, 150, .85)',    //mall
    'rgba(70, 200, 150, .85)',    //resto
    'rgba(240, 240, 100, .85)',   //gas
    'rgba(240, 240, 100, .85)',   //hotel
    'rgba(240, 100, 240 , .85)',  //hospital
    'rgba(70, 240, 240, .85)',    //police
    'rgba(70, 100, 240, .85)',    //bus
    'rgba(70, 70, 255, .85)',     //info
    'rgba(240, 100, 70, .85)'     //place
];

interface propsReceive {
    place       :PlaceInformation;
    zoomlevel   :number;
    geolocation :{ x :number; y :number; endx :number, endy :number }; //the geolocation is the actual map geolocation (that is render)
    width       :number;
    height      :number;
    onClickedMarker :() => void;
}

export default function Marker(props :propsReceive) {
    const areax = props.geolocation.endx - props.geolocation.x;
    const areay = props.geolocation.endy - props.geolocation.y;
    const posx = ((props.place.longitude - props.geolocation.x) / areax) * areax;
    const mapx = (((props.width / areax) * posx) * props.zoomlevel) - 24;
    const posy = ((props.place.latitude  - props.geolocation.y) / areay) * areay;
    const mapy = (((props.height / areay) * posy) * props.zoomlevel) - 40;

    //ANIMATION CODE=================================
    //Used to make bouncing anitmation to icons
    const [isGoingUp, setGoin] = React.useState(true);
    const animvalue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        if(isGoingUp)
            Animated.timing(animvalue, {
                toValue: 5,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setGoin(false));
        else 
            Animated.timing(animvalue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start(() => setGoin(true));
    }, [isGoingUp]);

    function whichIcon() {
        switch(props.place.type) {
            case 'mall':
                return <MaterialIcons name='local-mall'         size={32} color={colors[0]}/>
            case 'resto':
                return <MaterialIcons name='local-restaurant'   size={32} color={colors[1]}/>
            case 'gas':
                return <MaterialIcons name='local-gas-station'  size={32} color={colors[2]}/>
            case 'hotel':
                return <MaterialIcons name='local-hotel'        size={32} color={colors[3]}/>
            case 'hospital':
                return <MaterialIcons name='local-hospital'     size={32} color={colors[4]}/>
            case 'police':
                return <MaterialIcons name='local-police'       size={32} color={colors[5]}/>
            case 'info':
                return <MaterialIcons name='info-outline'       size={32} color={colors[7]}/>
            default:
                return  <MaterialIcons name='place'             size={48} color={colors[8]}/>
        }
    }

    return (
        <View style={{position: 'absolute', left: mapx, top: mapy}}>
        <TouchableOpacity onPress={props.onClickedMarker}>
            { whichIcon() }
        </TouchableOpacity>
        </View>
    );
}

/*
<Animated.View style={[ {position: 'absolute', left: mapx, top: mapy}, {transform: [{translateY: animvalue}]} ]}>
        <TouchableOpacity onPress={props.onClickedMarker}>
            { whichIcon() }
        </TouchableOpacity>
        </Animated.View>

*/