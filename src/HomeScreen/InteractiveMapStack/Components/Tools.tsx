import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { contextProvider, StateAPI } from '../../../StateAPI/State';
import { setVisiblePoint } from '../../../StateAPI/Actions'

interface propsReceive {
    zoomlevel           :number;
    zoomlevels          :Array<number>; //The available zoom levels
    setzoomlevel        :(amount :number) => void;
    isMarkerShow        :boolean;
    setMarkerVisibility :any;
}

export default function Tools( props :propsReceive) {
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);
    const [additionalVisible, setAdditional] = React.useState(false);

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            position: 'absolute',
            right: 15,
            top: 20, 
            opacity: 0.4,
            zIndex: 2,
        },
        toolsItem: {
            backgroundColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 12,
            height: 40,
            width: 40,
        },
        toolsIcon: {
            paddingLeft: 2,
            paddingTop: 2
        },
        containerAdditonal: {
            flexDirection: 'column',
            position: 'absolute',
            right: 52,
            zIndex: 999,
        },
    })

    function setvisiblepoints(point :string) :void{
        switch(point) {
            case 'mall':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, mall: !state.tourvirtual.visiblePoints.mall}));
                break;
            case 'resto':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, resto: !state.tourvirtual.visiblePoints.resto}));
                break;
            case 'gas':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, gas: !state.tourvirtual.visiblePoints.gas}));
                break;
            case 'hotel':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, hotel: !state.tourvirtual.visiblePoints.hotel}));
                break;
            case 'hospital':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, hospital: !state.tourvirtual.visiblePoints.hospital}));
                break;
            case 'police':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, police: !state.tourvirtual.visiblePoints.police}));
                break;
            case 'bus':
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, bus: !state.tourvirtual.visiblePoints.bus}));
                break;
            default:
                dispatch(setVisiblePoint({...state.tourvirtual.visiblePoints, info: !state.tourvirtual.visiblePoints.info}));
        }
    }

    function col(point :boolean) :string {
        if(point)
            return 'white';
        return 'red';
    }
    
    function handleZoomLevelValue(isIncrease :boolean) {
        let zoomindex :number = 0;
        for(let i :number = 0; i < props.zoomlevels.length; i++) {
            if(props.zoomlevels[i] === props.zoomlevel)
                zoomindex = i;
        }
        if(isIncrease && zoomindex < props.zoomlevels.length - 1) 
            props.setzoomlevel(props.zoomlevels[zoomindex + 1]);
        else if(!isIncrease && zoomindex > 0)
            props.setzoomlevel(props.zoomlevels[zoomindex - 1]);
    }

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.toolsItem} onPress={() => handleZoomLevelValue(true)} >
               <FeatherIcons name='zoom-in' size={32} color='white' style={styles.toolsIcon}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toolsItem} onPress={() => handleZoomLevelValue(false)}>
              <FeatherIcons name='zoom-out' size={32} color='white' style={styles.toolsIcon}/>
          </TouchableOpacity>

          {
              props.isMarkerShow ?
                 <TouchableOpacity style={styles.toolsItem} onPress={() => props.setMarkerVisibility(false)}>
                    <MaterialIcons name="location-on" color="white" size={32} style={styles.toolsIcon}/>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.toolsItem} onPress={() => props.setMarkerVisibility(true)}>
                    <MaterialIcons name="location-off" color="red" size={32} style={styles.toolsIcon}/>
                </TouchableOpacity>
          }

        
        {
           additionalVisible ?
            <TouchableOpacity style={styles.toolsItem} onPress={() => setAdditional(!additionalVisible)}>
                <MaterialIcons name='expand-more' size={32} color='white' style={styles.toolsIcon}/>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.toolsItem} onPress={() => setAdditional(!additionalVisible)}>
                <MaterialIcons name='expand-less' size={32} color='white' style={styles.toolsIcon}/>
            </TouchableOpacity>
        }

        {
            additionalVisible &&
            <View style={styles.containerAdditonal}>
                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('mall')}>
                    <MaterialIcons name='local-mall' size={32}
                        color={col(state.tourvirtual.visiblePoints.mall)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('resto')}>
                    <MaterialIcons name='local-restaurant' size={32}
                        color={col(state.tourvirtual.visiblePoints.resto)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('gas')}>
                    <MaterialIcons name='local-gas-station' size={32}
                        color={col(state.tourvirtual.visiblePoints.gas)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('hotel')}>
                    <MaterialIcons name='local-hotel' size={32}
                        color={col(state.tourvirtual.visiblePoints.hotel)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('hospital')}>
                    <MaterialIcons name='local-hospital' size={32}
                        color={col(state.tourvirtual.visiblePoints.hospital)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('police')}>
                    <MaterialIcons name='local-police' size={32}
                        color={col(state.tourvirtual.visiblePoints.police)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('bus')}>
                    <MaterialIcons name='directions-car' size={32}
                        color={col(state.tourvirtual.visiblePoints.bus)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.toolsItem} onPress={() => setvisiblepoints('info')}>
                    <MaterialIcons name='info-outline' size={32}
                        color={col(state.tourvirtual.visiblePoints.info)}
                        style={styles.toolsIcon}
                    />
                </TouchableOpacity>
            </View>
        }
        
        
    
        </View>
    )
}

/* optional feature that show the user current position in the map
<View style={{marginTop: 32}}>
         <TouchableOpacity style={styles.toolsItem}>
            <MaterialIcons name='my-location' size={32} color='white' style={styles.toolsIcon}/>
        </TouchableOpacity>
        </View>
*/
