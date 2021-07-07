/*
    Define the local state that appears in the Assistant Tour 
    since it is quite to many state to be handled.
*/
import React from 'react';
import { AssistantTourState } from './interface';
import { IntroPosition } from '../../../../database/assistantour/tours';
import { NAVCOLORS } from '../functions/Options';

export const localContextProvider :React.Context<any> = React.createContext(null);

export const defaultLocalState :AssistantTourState = {
    mapmarkers: [
        {
            id: '0',
            position: {lat: 0, lng: 0},
            icon: '<div style="margin-top: -16px; color: "blue">🏃</div>',
            size: [32, 32]
        }
    ],
    polylines: [
        // @ts-ignore
        //color: 'blue' attribute is causing a TS Error although it is not. A problem with the ExpoLeaftlet package
        { shapeType: 'polyline', id: '0', positions: [{lat: 0, lng: 0}], color: NAVCOLORS[0], }
    ],
    zoomlevel: 12,
    mapcenter: IntroPosition,
    ismapcenter: true, //ismapfollow
    currenttour: { name: '--please select tour--', index: -1 },
    dialogmsg: { title: '', msg: '' },
    playsound: true,
    isGranted: true,
    hasLoaded: false,
    ismaplock: true,
    isnavpathloading: false,
    isSelectTourOpen: false,
}

/*
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
*/