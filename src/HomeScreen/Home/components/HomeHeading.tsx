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
import { StyleSheet, Text, View } from 'react-native';

import AutoImageSlider      from '../../../Utility/AutoImageSlider';
import { WindowDimension }  from '../../../Utility/useResponsive';
import { HomeTabData }      from '../../../../database/home';

export default function HomeHeading() {
    return (
        <View style={styles.headingContainer}>
            <AutoImageSlider
                slides={HomeTabData.headingSlides}
                height={(WindowDimension.width) * 0.7}
                interval={6500}
                opacitySpeed={1000}
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
