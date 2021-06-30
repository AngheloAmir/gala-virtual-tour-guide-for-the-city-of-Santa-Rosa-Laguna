import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import * as Location from 'expo-location';

import { MapMarker, MapShape, ExpoLeaflet, LeafletWebViewEvent } from "expo-leaflet";
import DialogAlert  from '../../Utility/DialogAlert';

import TopContainer from './components/TopContainer';
import { mapOptions, mapLayers } from './Options';
import { FindPath } from './FindPath';

export default function LeafletContainer({navigation} :any) {
  const TOURS = [
    '-- Please Select Your Tour --',
    'asdasdas',
    'asdadaada',
  ];
  const [position, setposition]       = React.useState({lat: 14.296238, lng: 121.105799});
  const [destination, setdestination] = React.useState({lat: 14.281997, lng: 121.097718});
  const [pathways, setpathways]       = React.useState([{lat: 0, lng: 0}]);
  const [isLocationSet, setLocFound]  = React.useState(false);
  const [zoomlvl, setzoomlvl]         = React.useState(10);
  const [dialogmsg, setdialogmsg]     = React.useState({title: '', msg: ''});

  const [currenttour, setcurrent]     = React.useState(TOURS[0]);
  const [issound, setsound]           = React.useState(true);

  const mapShapes: Array<MapShape | any> = [
    { shapeType: 'polyline', color: 'blue', id: '1', positions: [pathways] },
  ];

  const mapMarkers: MapMarker[] = [
    { id: '1', position: position,    icon: '<div style="margin-top: -16px">🏃</div>', size: [32, 32] },
    { id: '2', position: destination, icon: '<div style="margin-left: 32px">🏁</div>', size: [32, 32] },
  ];

  React.useEffect(() => {
    if(Platform.OS == 'web') {
      setLocFound(true); setzoomlvl(17);
    }
    else {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setdialogmsg({title: 'Location Error', msg: 'Location (GPS) was not granted or other error occured'}); return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setposition({lat: location.coords.latitude, lng: location.coords.longitude});
        setLocFound(true);
        setTimeout(() => setzoomlvl(17), 2000);
      })();
    }
  }, []);

  async function getPath() {
    const paths :any = await FindPath(position, destination);
    setpathways( paths );
  } 

  function onMapClicked(event :LeafletWebViewEvent) {
    switch(event.tag) {
      case 'onMapClicked':
        if(Platform.OS == 'web') setposition(event.location); break;
    }  
  }

   return (
       <View style={{width: '100%', height: '100%'}}>
         <TopContainer
            currenttour={currenttour} setcurrent={setcurrent}
            sound={issound}           setsound={() => setsound(!issound)}
            zoomin={() =>  { if(zoomlvl < 18) setzoomlvl(zoomlvl + 1); }}
            zoomout={() => { if(zoomlvl > 12)  setzoomlvl(zoomlvl - 1); }}
         />

          <View style={{flex: 1}}>
            { isLocationSet &&
              <ExpoLeaflet
                loadingIndicator={ () => <ActivityIndicator/> }
                mapCenterPosition={position}
                mapLayers={mapLayers}
                mapOptions={mapOptions}
                mapMarkers={mapMarkers}
                maxZoom={18}
                mapShapes={mapShapes}
                onMessage={onMapClicked}
                zoom={zoomlvl}
              />
            }
          </View>

          <DialogAlert title={dialogmsg.title} text={dialogmsg.msg}
            isshow={dialogmsg.msg.length >= 1} ok={() => setdialogmsg({title: '', msg: ''})}
          />

      </View>
   );
}
