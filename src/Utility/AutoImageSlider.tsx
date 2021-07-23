/*
    Like an carousel but the image is automatically switch betwwen slides
*/
import * as React from 'react';
import { Animated, Image, View, ImageSourcePropType, Text, StyleSheet } from 'react-native';
import { WindowDimension } from './useResponsive';

//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface propsReceive {
    slides  :Array<{
        image    :ImageSourcePropType,
        place    :string;
        isWhite? :boolean;
    }>;
    height       :number;
    width?       :number;
    interval     :number;
    opacitySpeed :number;
}

export default function AutoImageSlider(props :propsReceive) {
    const [slides, setSlides] = React.useState({
        current: 0, old: 0,
    });
    const [isTransition, setTranst]   = React.useState(false);
    const animvalue                   = new Animated.Value(0);
    const [intervalId, setIntervalId] = React.useState({});
    const [isChange, setChange]       = React.useState(0);
    const imageWidth = props.width ? props.width : WindowDimension.width;

    //the purpose of this useEffect is to update the slide. However, function inside the setInterval
    //will receive only the old values. Somehow, the slide changing must be triggered, this function do it.
    React.useEffect(() => {
        setIntervalId(
            setInterval(() => { setChange( Math.random() % 2 ); }, props.interval + props.opacitySpeed)
        );
        //@ts-ignore
        return () => intervalId.clear();
    }, []);

    React.useEffect(() => {
        if((slides.current + 1) >= props.slides.length)
            setSlides({
                current: 0, old: slides.current
            });
        else
            setSlides({
                current: slides.current + 1, old: slides.current
            });
        animvalue.setValue(0);
        setTranst(true);
    }, [isChange]);

    React.useEffect(() => {
        if(isTransition) {
            Animated.timing(animvalue, {
                toValue: 1,
                duration: props.opacitySpeed,
                useNativeDriver: true,
            }).start(() => setTranst(false));
        }
    }, [isTransition]);

    const styles = StyleSheet.create({
        image: {
            width: imageWidth,
            height: props.height
        },
        placeContainer: {
            position: 'absolute',
            bottom: 5, left: 5,
            flexDirection: 'row'
        },
        placeText: {
            fontSize: 18
        },
        placeTextWhite: {
            fontSize: 18, color: 'white',
        },
    });

    return (
        <View>
            <Image source={props.slides[slides.old].image}
                resizeMode='cover' style={styles.image}
            />
            <View style={styles.placeContainer}>
                <MaterialIcons name='place' size={24} color={ props.slides[slides.old].isWhite ? 'white' : 'black' }  />
                <Text style={props.slides[slides.old].isWhite ?
                    styles.placeTextWhite : styles.placeText}>
                        {props.slides[slides.old].place}
                </Text>
            </View>

            <Animated.View style={{position: 'absolute', top: 0, opacity: animvalue}}>
                <Image source={props.slides[slides.current].image}
                    style={styles.image} resizeMode='cover'
                />
                <View style={styles.placeContainer}>
                    <MaterialIcons name='place' size={24} color={ props.slides[slides.current].isWhite ? 'white' : 'black' } />
                    <Text style={props.slides[slides.current].isWhite ?
                         styles.placeTextWhite : styles.placeText}>
                             {props.slides[slides.current].place}
                    </Text>
                </View>
            </Animated.View>
        </View>
    )
}

