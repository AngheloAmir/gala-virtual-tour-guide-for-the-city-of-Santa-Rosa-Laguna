/*
    * TYPE
        Fragment of src/HomeScreen/AssitantTour/AssitantTourIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Display a compass in the screen below the toolbar. This compass will have its image rotated
        based on the magnetometer reading.

    * VISIBLE WHEN
        It is always show when the GPS Navigation feature of the app is shown.
*/
import React from 'react';
import { Image, View, Platform } from 'react-native';
import { Magnetometer } from 'expo-sensors';
import { isMounted } from '../functions/IsMounted';

const compassIcon = require('../../../../assets/icons/compass.png');
const mapjson = require('../../../../database/map.json');

export default function Compass() {
    if( Platform.OS == 'web' ) {
        return <View style={{position: 'absolute'}}></View>
    }
    const [magnet, setMagnet] = React.useState(0);
    const magnetosubscribtion = React.useRef({});

    function subscribe() {
        const sub = Magnetometer.addListener(result => {
            if(!isMounted) return;
            let angle = Math.atan2(result.y, result.x);
            angle = angle * (180 / Math.PI)
            angle = angle + 90
            angle = (angle +360) % 360
            setMagnet( Math.round(angle));
        });
        //@ts-ignore
        magnetosubscribtion.current = sub;
        Magnetometer.setUpdateInterval( mapjson.magentoMeterUpdateInterval );
    };

    React.useEffect(() => {
        subscribe();
        return () => {
            try {
                //@ts-ignore
                magnetosubscribtion.current.remove();
                //console.log('Magnetometer subscription remove');
            }
            catch(err) {
            }
        };
    }, []);

    return (
        <View style={{position: 'absolute', top: 105, left: 5, zIndex: 3}}>
            <Image source={compassIcon} resizeMode='cover' style={
                { transform: [{ rotate: magnet + 'deg'}], width: 50, height: 50} }
            />
        </View>
  );
}
