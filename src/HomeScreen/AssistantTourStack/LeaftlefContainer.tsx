import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
//import * as Location from 'expo-location';

import { MapMarker, MapShape, ExpoLeaflet, LeafletWebViewEvent } from "expo-leaflet";
import DialogAlert  from '../../Utility/DialogAlert';
import ListDialog   from '../../Utility/ListDialog';

import TopContainer from './components/TopContainer';
import { mapOptions, mapLayers, getTours, IntroPosition, EmptyMarker, EmptyPolyline } from './Options';
import { RequestPermission, getLocation, getMapDestinationMarkers, getPathWays } from './Functions';

import { GalaTours } from '../../../database/assistantour/tours';
import { FromToInterface } from '../../../database/!interfaces/GalaSelfGuidedTour';

export default function LeafletContainer({navigation} :any) {
  const TOURS = getTours();

  const [position, setposition]       = React.useState(IntroPosition);
  const [destMarkers, setdestMarkers] = React.useState([EmptyMarker(1)]);
  //const [pointofinterest, setpoi]     = React.useState([EmptyMarker(2)]);
  const [pathways, setpathways]       = React.useState([EmptyPolyline]);
  const [waytoEstab, setwaytoEstab]   = React.useState([{lat: 0, lng: 0}]);
  const [isNavLoading, setNavLoading] = React.useState(false);
  const [zoomlvl, setzoomlvl]         = React.useState(10);
  const [dialogmsg, setdialogmsg]     = React.useState({title: '', msg: ''});

  const [currenttour, setcurrenttour] = React.useState({name: '-- select tour --', index: 1});
  const [selectour, setselecttour]    = React.useState(false);
  const [issound, setsound]           = React.useState(true);
  const [notifmsg, setnotifmsg]       = React.useState('You are seing the notification message.');

  const mapMarkers: MapMarker[] = [
    { id: '0', position: position, icon: '<div style="margin-top: -16px">🧍</div>', size: [32, 32] },
    ...destMarkers,
  ];
  
  React.useEffect(() => {
    if(Platform.OS == 'web') setzoomlvl(17);
    else
      ( async () => {
        const isGranted = await RequestPermission();
        if( isGranted ) {
          await setCurrentLocation();
          setTimeout(() => setzoomlvl(17), 5000);
          setInterval(async () => {
            await setCurrentLocation();
          }, 2000);
        }
        else {
          setzoomlvl(17);
          setdialogmsg({title: 'Location denied', msg: 'Permission not granted or Location is off'});
        }
      })();
  }, []);

  async function setCurrentLocation() {
    try {
      const currentpos :any = await getLocation();
      if(currentpos == 'out')
        setdialogmsg({title: 'Out of coverage', msg: 'You are too far from Santa Rosa City, Laguna'});
      else setposition( currentpos );
    } catch(err) {
      setdialogmsg({title: 'Error Location', msg: 'Error getting location.\nMessage: ' + err});
    }
  }

  async function onNavigateClick() {
    if(currenttour.index < 0 ) return;
    const destinationsAndPointOfInterestMarkers = getMapDestinationMarkers(GalaTours[currenttour.index], 1);
    setdestMarkers( destinationsAndPointOfInterestMarkers );
    setNavLoading(true); setzoomlvl(12); setpathways([EmptyPolyline]);
    ( async () => {
      try {
        let polylines :Array<MapShape> = [];
        for(let i = 0; i <  GalaTours[currenttour.index].destinations.length; i++ ) {
          const fromTo :FromToInterface = GalaTours[currenttour.index].destinations[i];
          const from  = fromTo.from === 'user' ? position : { lat: fromTo.from.lat, lng: fromTo.from.lng };
          const to    = { lat: fromTo.to.lat, lng: fromTo.to.lng };
          const poly :MapShape | any = await getPathWays(i, from, to);
          polylines.push(poly);
        }
        setpathways(polylines);
      } catch(err) {
        setdialogmsg({title: 'Error', msg: 'Error occured during loading of navigation path.\nMessage: ' + err});
      }
      setNavLoading(false);
      setTimeout(() => setzoomlvl(17), 2000);
    })();
  };

  function onMapClicked(event :LeafletWebViewEvent) {
    switch(event.tag) {
      case 'onMapClicked':
        if(Platform.OS == 'web') setposition(event.location); break;
    }  
  }

   return (
       <View style={{width: '100%', height: '100%'}}>
         <TopContainer
            currenttour={currenttour.name}
            sound={issound} setsound={() => setsound(!issound)}
            zoomin={()  => { if(zoomlvl < 18 && !isNavLoading) setzoomlvl(zoomlvl + 1); }}
            zoomout={() => { if(zoomlvl > 12 && !isNavLoading) setzoomlvl(zoomlvl - 1); }}
            onselecttour={() => setselecttour(true)}
            info={isNavLoading}
            onnavigate={onNavigateClick}
         />

          <View style={{flex: 1}}>
            <ExpoLeaflet
                loadingIndicator={ () => <ActivityIndicator/> }
                mapCenterPosition={position}
                mapLayers={mapLayers}
                mapOptions={mapOptions}
                mapMarkers={mapMarkers}
                maxZoom={18}
                mapShapes={pathways}
                onMessage={onMapClicked}
                zoom={zoomlvl}
            />
          </View>

          { dialogmsg.msg.length >= 1 || selectour ?
            <View style={{width: 1200, height: 1200, position: 'absolute', top: 0, zIndex: 20, backgroundColor: 'rgba(0,0,0,.5)'}}>
            </View>
            :
            <View></View>
          }

          <ListDialog title='Select Self Guided Tours' isshow={selectour} items={TOURS}
            onSelect={(item, index) => { setcurrenttour({name: item, index: index}); setselecttour(false); }}
            onCancel={() => setselecttour(false)}
          />

          <DialogAlert title={dialogmsg.title} text={dialogmsg.msg}
            isshow={dialogmsg.msg.length >= 1} ok={() => setdialogmsg({title: '', msg: ''})}
          />

      </View>
   );
}
