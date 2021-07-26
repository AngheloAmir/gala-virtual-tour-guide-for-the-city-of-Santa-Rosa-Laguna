/*
    * TYPE
        Fragment of src/HomeScreen/Home/HomeIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the content of the heading part of the Home tab (top of the page)

    * VISIBLE WHEN
        When the user is in Home Screen and in the Home Tab
*/

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import AutoImageSlider      from '../../../Utility/AutoImageSlider';
import { WindowDimension }  from '../../../Utility/useResponsive';
import { headingslides, slideanimation } from '../functions/homejson'

export default function HomeHeading() {
    return (
        <View style={styles.headingContainer}>
            <AutoImageSlider
                slides={headingslides}
                height={(WindowDimension.width) * 0.7}
                interval={slideanimation.interval}
                opacitySpeed={slideanimation.transistion}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headingContainer: {
        alignSelf: 'center',
        marginBottom: 12,
    },
});
