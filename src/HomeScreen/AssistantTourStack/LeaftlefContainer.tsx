import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import * as Location from 'expo-location';

import { MapMarker, MapShape, ExpoLeaflet } from "expo-leaflet";
import DialogAlert  from '../../Utility/DialogAlert';

import { mapOptions, mapLayers } from './Options';
import { FindPath } from './FindPath';

export default function LeafletContainer({navigation} :any) {
  const [position, setposition]       = React.useState({lat: 0, lng: 0});
  const [destination, setdestination] = React.useState({lat: 0, lng: 0});
  const [isLocationSet, setLocFound]  = React.useState(false);
  const [pathways, setpathways]       = React.useState([{lat: 0, lng: 0}]);
  const [errMessage, setErrMsg]       = React.useState('');

  React.useEffect(() => {
    if(Platform.OS == 'web') {
      setposition({lat: 14.314083, lng: 121.112111});
      setLocFound(true); return;
    };
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrMsg('Error: Location (GPS) was not granted'); return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setposition({lat: location.coords.latitude, lng: location.coords.longitude});
      setLocFound(true);
    })();
  }, []);

  const mapShapes: Array<MapShape | any> = [
    {
      shapeType: 'polyline',
        color: 'blue',
        id: '1',
        positions: [pathways],
    },
  ];

  const mapMarkers: MapMarker[] = [
    //the first marker is the user
    {
      id: '1',
      position: position,
      icon: '<div style="margin-top: -16px">🏃</div>',
      size: [32, 32],
    },
    //the second marker is the area to visit
    {
      id: '2',
      position: {lng: 121.097718, lat: 14.281997 },
      icon: '<div style="margin-left: 32px">🏁</div>',
      size: [32, 32],
    }
  ];

  async function getPath() {
    const paths :any = await FindPath(position, {lat: 14.281996, lng: 121.097719 });
    setpathways( paths );
  } 

   return (
       <View style={{width: '100%', height: '100%'}}>

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
                  onMessage={(message) => { }}
                  zoom={17}
                />
              }
            </View>

            <DialogAlert title='Location failed' text={errMessage}
              isshow={errMessage.length >= 1} ok={() => setErrMsg('')}
            />

       </View>
   );
}

/*

    bayan           14.313759,121.112418
    SM --           14.313375,121.099721
    KFC complex     14.29353,121.103716,
    enchanted       14.281996,121.097719
    
<View style={{position: 'absolute', top: 10, left: 150, zIndex: 100}}>
              <Button title='up'  onPress={() => setposition({...position, lat: position.lat + 0.0005})} />
            </View>
            <View style={{position: 'absolute', top: 110, left: 150, zIndex: 100}}>
              <Button title='down' onPress={() => setposition({...position, lat: position.lat - 0.0005})} />
            </View>
            <View style={{position: 'absolute', top: 60, left: 100, zIndex: 100}}>
              <Button title='left' onPress={() => setposition({...position, lng: position.lng - 0.0005})} />
            </View>
            <View style={{position: 'absolute', top: 60, left: 200, zIndex: 100}}>
              <Button title='righ' onPress={() => setposition({...position, lng: position.lng + 0.0005})} />
            </View>
            <View style={{position: 'absolute', top: 10, left: 250, zIndex: 100}}>
              <Button title='test' onPress={() => getPath()} />
            </View>    

*/