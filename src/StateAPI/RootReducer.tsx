import { StateInterface }   from './State';
import { ActionInterface }  from './Actions';
import { actionType }       from './ActionType';

export function RootReducer(state :StateInterface, action :ActionInterface) :StateInterface {
    switch( action.type ) {
        case actionType.setscreen:
            return {
                ...state, screen: {
                    ...state.screen, current: action.payload
                }
            }

        case actionType.updateinfo:
            return {
                ...state, user: {
                    ...state.user, name: action.payload.name, about: action.payload.about, avatar: action.payload.avatar, 
                }
            }

        case actionType.setmultiview: 
            return {
                ...state, features: {
                    ...state.features, multiview: action.payload
                }
            }

        case actionType.setcameraindex:
            return {
                ...state, features: {
                    ...state.features, selectedCameraIndex: action.payload
                }
            }

        case actionType.setguideinfo:
            return {
                ...state, features: {
                    ...state.features, guideInfo: action.payload
                }
            }
        
        case actionType.setvisiblepoint:
            return {
                ...state, map: {
                    ...state.map, visiblePoints: action.payload
                }
            }
        
        case actionType.setintroguidetext:
            return {
                ...state, map: {
                    ...state.map, isShowIntro: action.payload,
                }
            }
        
        case actionType.setstreetviewlink:
            return {
                ...state, map: {
                    ...state.map, streetviewlink: action.payload
                }
            }
        
        case actionType.setmarkerdescription:
            return {
                ...state, map: {
                    ...state.map, markerdescription: action.payload
                }
            }

        default:
            console.error('Action not defined in RootReducer!');
            return state;
    }
}