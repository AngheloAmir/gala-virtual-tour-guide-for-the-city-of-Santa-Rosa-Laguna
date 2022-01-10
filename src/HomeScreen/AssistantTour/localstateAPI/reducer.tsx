/*
    The root reducer that handles dispatch calls
*/
import { ActionInterface, AssistantTourState, actionType } from './interface';
import { isMounted } from '../functions/IsMounted';
const mapdata = require('../../../../database/map.json');

export function rootReducer(state :AssistantTourState, action :ActionInterface) :AssistantTourState {
    if(!isMounted) {
        console.warn('aborted');
        //@ts-ignore
        //force to not rerender
        return {};
    }
    
    switch(action.type) {
        case actionType.setUserPosition:
            return {
                ...state, mapmarkers: state.mapmarkers.map((marker, index) => {
                    if(index == 0)
                        return {
                            id: '0',
                            position: {
                                lat: action.payload.lat + mapdata.mapusericonadjustlat,
                                lng: action.payload.lng + mapdata.mapusericonadjustlng
                            },
                            icon: mapdata.mapusericonbase64,
                            size: mapdata.mapusericonsize
                        }
                    else return marker;
                })
            }
        
        case actionType.clearShapeNMarkers: {
            return {
                ...state,
                mapmarkers: state.mapmarkers.filter((marker, index) => index == 0),
                polylines: [
                    { shapeType: 'polyline', id: '0', positions: [ {lat: 0, lng: 0}] }
                ],
                poiCloseIndex: -1,
            }
        }
        
        case actionType.setMapMarkers:
            return {
                ...state, mapmarkers: [ state.mapmarkers[0], ...action.payload ]
            }
        
        case actionType.setMapPolylines:
            return {
                ...state, polylines: action.payload
            }
        
        case actionType.setMapCenter: 
            return {
                ...state, mapcenter: action.payload
            }    

        case actionType.flipIsMapCenter:
            return {
                ...state, ismapcenter: !state.ismapcenter
            }

        case actionType.setZoomlevel:
            return {
                ...state, zoomlevel: action.payload
            }
        
        case actionType.setCurrentTour:
            return {
                ...state, currenttour: {
                    name: action.payload.name, index: action.payload.index
                }
            }

        case actionType.flipIsSoundPlay:
            return {
                ...state, playsound: !state.playsound
            }
        
        case actionType.setDialogMessage:
            return {
                ...state, dialogmsg: action.payload
            }
        
        case actionType.setPermissionNotGranted:
            return {
                ...state, isGranted: false
            }
         
        case actionType.setMapWasLoaded:
            return {
                ...state, hasLoaded: true
            }
        
        case actionType.setMapLock:
            return {
                ...state, ismaplock: action.payload
            }
        
        case actionType.setMapPathIsLoading:
            return {
                ...state, isnavpathloading: action.payload
            }

        case actionType.setSelectTourOpen:
            return {
                ...state, isSelectTourOpen: action.payload
            }
        
        case actionType.setIsFindPlacesOpen:
            return {
                ...state, isFindPlacesOpen: action.payload
            }

        case actionType.setIsAttributionShow:
            return {
                ...state, isAttributionOpen: action.payload
            }
        
        case actionType.setIsPOIBoxOpen:
            return {
                ...state, isPOIBoxOpen: action.payload
            }

        case actionType.setPoiIndex:
            return {
                ...state, poiCloseIndex: action.payload
            }
        
        case actionType.setIsCloseToMarker:
            return {
                ...state, isCloseToMarker: action.payload
            }

        default:
            console.log('ACTION TYPE NOT DEFINED!\n' + action.type);
            return state;
    }
} 