import React from 'react';
import { Button, Image, ScrollView, View } from 'react-native';

import {contextProvider, StateAPI} from '../../StateAPI/State';
import { Responsive, useResponsive } from '../../Utility/useResponsive';

export default function MapView( {navigation} :any) {
    const {state} :StateAPI = React.useContext(contextProvider);
    const responsive :Responsive = useResponsive();
    const ref        :any = React.useRef();

    //calcluate the image width and height, to create a 16:9 ratio image
    const imageheight = responsive.height - 150;
    const imagewidth = imageheight * (16 / 9);
    const centered   = ( imagewidth - responsive.width ) / 2;

    React.useEffect(() => {
        if(ref !== undefined) 
            ref.current.scrollTo({x: centered, y: 0, animated: false})
    }, [])

    return (
       <View>
            <ScrollView horizontal showsHorizontalScrollIndicator ref={ref}>
            <Image
                    source={state.features.multiview.cameras[state.features.selectedCameraIndex].image}
                    style={{width: imagewidth, height: imageheight}}
                    resizeMode='center'
                />
            </ScrollView>
            <Button title='Back to map' onPress={() =>navigation.navigate('MapViewIndex')} />
        </View>
    );
}