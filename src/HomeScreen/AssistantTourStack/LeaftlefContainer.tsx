import React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';

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
  const [pathways, setpathways]       = React.useState([EmptyPolyline]);
  const [isNavLoading, setNavLoading] = React.useState(false);
  const [zoomlvl, setzoomlvl]         = React.useState(12);
  const [dialogmsg, setdialogmsg]     = React.useState({title: '', msg: ''});
  const [flashmessage, setflashmsg]   = React.useState('');

  const [currenttour, setcurrenttour] = React.useState({name: '-- select tour --', index: -1});

  const [mapcenter, setmapcenter]     = React.useState(IntroPosition);
  const [mapfollow, setmapfollow]     = React.useState(true);

  const [selectour, setselecttour]    = React.useState(false);
  const [issound, setsound]           = React.useState(true);
  const [notifmsg, setnotifmsg]       = React.useState('You are seing the notification message.');

  const mapMarkers: MapMarker[] = [
    { id: '0', position: position, icon: '<div style="margin-top: -16px; color: "blue">🏃</div>', size: [32, 32] },
    ...destMarkers,
  ];
  
  React.useEffect(() => {
    if(Platform.OS == 'web') { setzoomlvl(17); return; }
    let idOfInterval :any;
    ( async () => {
      const isGranted = await RequestPermission();
      if( isGranted ) {
        await setCurrentLocation();
        setTimeout(() => setzoomlvl(17), 100);
        idOfInterval = setInterval(async () => {
            await setCurrentLocation();
        }, 1000);
      }
      else {
        setzoomlvl(17);
        setdialogmsg({title: 'Location denied', msg: 'Permission not granted or Location is off'});
      }
    })();
    
    return () => {
      clearInterval(idOfInterval);
    }
  }, []);

  async function setCurrentLocation() {
    try {
      const currentpos :any = await getLocation();
      if(currentpos == 'out')
        setdialogmsg({title: 'Out of coverage', msg: 'You are too far from Santa Rosa!'});
      else {
        setposition(currentpos);
        setmapcenter(currentpos);
      }                        
    } catch(err) {
        setdialogmsg({title: 'Error Location', msg: 'Error getting location.\n: ' + err});
    }
  }
  
/*
  How the onNavigateClick() works?
  1) First, it check if something is actually press in current tour
  2) It retrieve all markers (as define in GalaTours) based on the index
  3) Show notif message, zoom out the map then clear the polyline (nav path)
  4) For each destination, create a navigation path (polyline)
*/
  async function onNavigateClick() {
    if(currenttour.index < 0 ) return;
    const destinationsAndPointOfInterestMarkers = getMapDestinationMarkers(GalaTours[currenttour.index], 1);
    setdestMarkers( destinationsAndPointOfInterestMarkers );
    setpathways([EmptyPolyline]);
    setNavLoading(true);
    setmapcenter(position);
    setzoomlvl(12);
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
          setdialogmsg({title: 'Failed...', msg: 'Failed to create navigational path. Please check your internet connection or try again (the server might be busy).\n' + err});
      }
      setNavLoading(false);
      setTimeout(() => setzoomlvl(17), 3000);
    })();
  };

  function onMapClicked(event :LeafletWebViewEvent) {
    switch(event.tag) { //onMapMarkerClicked
      case 'onMapClicked':
        if(Platform.OS == 'web') setposition(event.location); break;
      case 'onMapMarkerClicked':
        for(let i = 0; i < destMarkers.length; i++) {
          if(destMarkers[i].id == event.mapMarkerId ) {
            // @ts-ignore
            //the property name does not exist in the type MapMarker, it was inserted in getMapDestinationMarkers()
            if( destMarkers[i].commute )
              // @ts-ignore
              setdialogmsg({title: destMarkers[i].name, msg: destMarkers[i].commute });
            else
              // @ts-ignore
              setdialogmsg({title: 'Point of interest', msg: destMarkers[i].name});
          }
        }
      break;
    }  
  }

   return (
       <View style={{width: '100%', height: '100%'}}>
         <TopContainer
            currenttour={currenttour.name}
            sound={issound}
            onselecttour={() => setselecttour(true)}
            islock={mapfollow}
            info={isNavLoading}
            onnavigate={onNavigateClick}
            notifmsg={flashmessage}
            oninfoclick={() => {
              if(currenttour.index >= 0 )
                setdialogmsg({title: 'Tour information', msg: GalaTours[currenttour.index].longdescription});
              else
              setdialogmsg({title: 'Notice', msg: 'Please select your tour first'});
            }}
            onlock={() => {
              setmapfollow(!mapfollow);
              mapfollow ?
                setflashmsg('The map will not follow')  :
                setflashmsg('The map will center on your position');
            }}
            setsound={() => {
              setsound(!issound);
              issound ?
                setflashmsg('The sounds is OFF')  :
                setflashmsg('The sounds is ON');
            }}
         />

          <View style={{flex: 1}}>
            <ExpoLeaflet
                loadingIndicator={ () => <ActivityIndicator/> }
                mapCenterPosition={mapfollow ? position : mapcenter}
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
