import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Responsive, useResponsive } from '../../../Utility/useResponsive';

interface propsReceive {
    currenttour :string;
    sound       :boolean;
    info?       :boolean;
    islock?     :boolean;
    notifmsg   :string;
    setsound    :() => void;
    onselecttour:() => void;
    onnavigate  :() => void;
    oninfoclick:() => void;
    onlock      :() => void;
}

const ICONSIZE      = 24;
const ICONSIZEBG    = ICONSIZE + 4;

export default function TopContainer(props :propsReceive) {
    const [shownotif, setshow]      = React.useState(false);
    const [timeoutid, settimeoutid] = React.useState();
    const responsive :Responsive = useResponsive();
    
    React.useEffect(() => {
        clearTimeout(timeoutid) ;
        if(props.notifmsg && props.notifmsg.length > 1) {
            setshow(true);
            let i = setTimeout(() => {
                setshow(false);
            }, 2000);
            // @ts-ignore
            settimeoutid(i);
        }
        return () => clearTimeout(timeoutid); 
    }, [props.notifmsg]);

    const styles = StyleSheet.create({
        container: {
            zIndex: 10, width: responsive.width, height: 100,
            borderBottomColor: 'rgba(115, 170, 220, 1)', borderBottomWidth: 2,
            paddingHorizontal: 8, paddingVertical: 16,
            backgroundColor: 'rgba(230, 240, 250, 1)',
            flexDirection: 'column',
        },
        tourcontainer: {
            flexDirection: 'row', width: '100%',
        },
        text: {
            fontSize: 18, marginRight: 12,
        },
        listOfTours: {
            borderWidth: 2, borderColor: 'rgba(115, 170, 220, 1)', borderRadius: 8,
            width: '60%', alignItems: 'center',
        },
        button: {
            width: '35%', marginLeft: '4%',
        },
        iconsContainer: {
            flexDirection: 'row', justifyContent: 'space-evenly'
            
        },
        iconsItem: {
            marginTop: 12, height: ICONSIZEBG + 4, width: 42,
        },
        messageContainer: {
            marginTop: 12, padding: 4, borderWidth: 1, borderRadius: 4,
            backgroundColor: 'white', borderColor: 'rgba(115, 170, 220, 1)',
        },
        messageText: {
            textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'red',
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.tourcontainer}>
                <TouchableOpacity style={styles.listOfTours} activeOpacity={0.7} onPress={props.onselecttour}>
                    <Text style={{fontSize: 18}}>{props.currenttour}</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <Button title='Find Path' onPress={props.onnavigate} />
                </View>
            </View>

            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={props.oninfoclick}>
                    <FontAwesome5 name='search-location' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.oninfoclick}>
                    <FontAwesome5 name='info-circle' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={props.onlock}>
                   {
                       props.islock ?
                       <Entypo name='lock' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
                       <Entypo name='lock-open' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                   }
                </TouchableOpacity>


                <TouchableOpacity onPress={props.setsound}>
                    {
                        props.sound ?
                        <Entypo name='sound' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/> :
                        <Entypo name='sound-mute' size={ICONSIZE} color='rgba(95, 150, 200, 1)' style={styles.iconsItem}/>
                    }
                </TouchableOpacity>
            </View>
            
            { props.info &&
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>.....Loading navigation path.....</Text>
                </View>
            }

            { shownotif &&
                <View style={styles.messageContainer}>
                    <Text style={styles.messageText}>{props.notifmsg}</Text>
                </View>
            }
        </View>
    )
}
