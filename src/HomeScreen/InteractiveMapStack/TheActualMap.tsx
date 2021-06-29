/*
*/

import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';

import { contextProvider, StateAPI } from '../../StateAPI/State';
import { setMarkerDescription, setstreetviewlink } from '../../StateAPI/Actions';
import { Responsive, useResponsive } from '../../Utility/useResponsive';

import MarkerDescription from './Components/MarkerDescription';

import mapdata      from '../../../database/interactivemap';
import allplaces    from '../../../database/places/ALLPLACES';
import DialogAlert  from '../../Utility/DialogAlert';
import DisplayMap   from './Components/DisplayMap';
import Tools        from './Components/Tools';
import Marker       from './Components/Marker';

export default function TheActualMap({navigation} :any) {
    const { state, dispatch } :StateAPI = React.useContext(contextProvider);
    const responsive :Responsive                    = useResponsive();
    const [zoomlevel, setzoomlevel]                 = React.useState(0.25);
    const [markershow, setmarkershow]               = React.useState(true);
    const [descriptionshow, setdescriptionshow]     = React.useState(false);
    const [isalertshow, setalertshow]               = React.useState(false);
    const [scrollpos, setscrollpos]                 = React.useState({x: 0, maxX: 0, y: 0, maxY: 0});
    const yref :any = React.useRef();
    const xref :any = React.useRef();

    React.useEffect(() => {
        //Center the map on first open
        const ycenter = ((mapdata.height*zoomlevel) - responsive.height)     / 2;
        const xcenter = ((mapdata.width*zoomlevel)  - responsive.width)      / 2;
        if(yref.current) yref.current.scrollTo({y: ycenter, animated: false});
        if(xref.current) xref.current.scrollTo({x: xcenter, animated: false});

    }, []);

    //These calculation is to ensure that the screen is centered after a zoom in or zoom out
    function handleSetZoomLevel(level :number) {
        setzoomlevel(level);
        setTimeout(() => {
            const a = responsive.width / 2;
            const b = a + scrollpos.x;
            const c = b / (mapdata.width * zoomlevel);
            const d = (mapdata.width * level) * c;
            const centerx = d - a;

            const g = (responsive.height - 100) / 2;
            const h = g + scrollpos.y;
            const i = h / (mapdata.height * zoomlevel);
            const j = (mapdata.height * level) * i;
            const centery = j - g;

            xref.current.scrollTo({x: centerx, animated: false});
            yref.current.scrollTo({y: centery, animated: false});
        }, 10);
    }

    function openStreetViewLink() {
        //setalertshow(false);
        //const place :pointOfInterestInterface = PIinfo[0];
        const link = state.map.markerdescription.streetviewlink;
        if(!link || link.length <= 1) {
            console.error('Cant open street view link'); return;
        }
        else if(responsive.isWeb) {
            Linking.canOpenURL(link).then(supported => {
                if (supported) {
                  Linking.openURL(link);
                }
            });
        }
        else {
            dispatch(setstreetviewlink(link));
            setTimeout(() => navigation.navigate('StreetView'), 10);
        }
    }

    return (
        <View style={{flex: 1}}>
            { descriptionshow && <MarkerDescription place={state.map.markerdescription}
                moreinfocb={() => navigation.navigate('DisplayPlaceInfo')}
                streetviewcb={() => setalertshow(true)}
            />
            }

            <Tools  zoomlevels={mapdata.zoomlevels}
                zoomlevel={zoomlevel}      setzoomlevel={amount => handleSetZoomLevel(amount)}
                isMarkerShow={markershow}  setMarkerVisibility={() => setmarkershow(!markershow)} />

            <ScrollView
                style={{height: responsive.height - 120}} scrollEventThrottle={32} ref={yref}
                onScroll={event => setscrollpos({ ...scrollpos, y: event.nativeEvent.contentOffset.y, maxY: event.nativeEvent.contentSize.height })}
            >
            <ScrollView horizontal
                style={{width: responsive.width, padding: 0}} scrollEventThrottle={32} ref={xref}
                onScroll={event => setscrollpos({ ...scrollpos, x: event.nativeEvent.contentOffset.x, maxX: event.nativeEvent.contentSize.height })}
            >
                <DisplayMap touchCallback={() => setdescriptionshow(false)} zoomLevel={zoomlevel} />

                { markershow &&
                    allplaces.map( (place, index) => {
                        //add an if here checking if the item type is renderable
                        //
                        //
                        return <Marker key={index} place={place}
                            zoomlevel={zoomlevel} geolocation={mapdata.geolocation}
                            width={mapdata.width} height={mapdata.height}
                            onClickedMarker={() => {
                                setdescriptionshow(!descriptionshow);
                                !descriptionshow && dispatch(setMarkerDescription(place));
                            }}
                        />
                }) }

            </ScrollView>
            </ScrollView> 
            
            { isalertshow &&
                <View style={{width: 1200, height: 1200, zIndex:10, position: 'absolute', top: 0, backgroundColor: 'rgba(0,0,0,.5)'}}></View>
            }
            <DialogAlert
                title='Notice'
                text='Requires internet connection because street view content is obtained from https://instantstreetview.com (not affiliated or endorsed). Continue?'
                isshow={isalertshow} cancel={() => setalertshow(false)} ok={() => openStreetViewLink()}
            />

        </View>
    );
};
