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
    opacitySpeed :number; //define the transition (blur) speed
}

export default function AutoImageSlider(props :propsReceive) {
    const [intervalId, setIntervalId] = React.useState({});
    const animvalue = new Animated.Value(0);
    const imageWidth = props.width ? props.width : WindowDimension.width;

    //A reducer is required since setInterval will always receive initial values
    const [slidestate, setstate] = React.useReducer( (state :any, action :any) => {
        if((state.current + 1) >= props.slides.length) {
            startAnimate();
            return { current: 0, old: state.current };
        }
        startAnimate();
        return { current: state.current + 1, old: state.current };
    }, {current: 0, old: 0} );

    React.useEffect(() => {
        //@ts-ignore
        clearInterval(intervalId);
        setIntervalId(
            setInterval(() => {
                setstate({});
            }, props.interval + props.opacitySpeed)
        );
        //@ts-ignore
        return () => clearInterval(intervalId);
    }, []);

    function startAnimate() {
        animvalue.setValue(0);
        Animated.timing(animvalue, {
            toValue: 1,
            duration: props.opacitySpeed,
            useNativeDriver: true,
        }).start();
    }

    const styles = StyleSheet.create({
        image: {
            width: imageWidth,
            height: props.height
        },
        placeContainer: {
            position: 'absolute',
            bottom: 5, left: 5,
            flexDirection: 'row',
        },
        placeText: {
            fontSize: 18, color: 'black',
        },
        placeTextWhite: {
            fontSize: 18, color: 'white',
        },
    });

    return (
        <View>
            <Image source={props.slides[slidestate.old].image}
                resizeMode='cover' style={styles.image}
            />
            <View style={styles.placeContainer}>
                <MaterialIcons name='place' size={24} color={ props.slides[slidestate.old].isWhite ? 'white' : 'black' }  />
                <Text style={props.slides[slidestate.old].isWhite ?
                    styles.placeTextWhite : styles.placeText}>
                        {props.slides[slidestate.old].place}
                </Text>
            </View>

            <Animated.View style={{position: 'absolute', top: 0, opacity: animvalue}}>
                <Image source={props.slides[slidestate.current].image}
                    style={styles.image} resizeMode='cover'
                />
                <View style={styles.placeContainer}>
                    <MaterialIcons name='place' size={24} color={ props.slides[slidestate.current].isWhite ? 'white' : 'black' } />
                    <Text style={props.slides[slidestate.current].isWhite ?
                         styles.placeTextWhite : styles.placeText}>
                             {props.slides[slidestate.current].place}
                    </Text>
                </View>
            </Animated.View>
        </View>
    )
}
