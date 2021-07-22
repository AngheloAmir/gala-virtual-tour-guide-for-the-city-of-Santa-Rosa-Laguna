/*
    The root reducer. A pure function that change the current state
*/
import { StateInterface, ActionInterface, actionType }  from './Interfaces';

export function RootReducer(state :StateInterface, action :ActionInterface) :StateInterface {
    switch( action.type ) {
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

        default:
            console.error('Action not defined in RootReducer!');
            return state;
    }
}