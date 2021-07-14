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

        case actionType.setguideinfo:
            return {
                ...state, features: {
                    ...state.features, guideInfo: action.payload
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