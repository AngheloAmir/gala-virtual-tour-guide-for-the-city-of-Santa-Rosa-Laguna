/*
    The root reducer. A pure function that change the current state
*/
import { StateInterface, ActionInterface, actionType }  from './Interfaces';

export function RootReducer(state :StateInterface, action :ActionInterface) :StateInterface {
    switch( action.type ) {
        case actionType.setUserInfo:
            return {
                ...state, user: action.payload
            }

        case actionType.setguideinfo:
            return {
                ...state, features: {
                    ...state.features, guideInfo: action.payload
                }
            }
        
        case actionType.setIsHideBottomTabs:
            return {
                ...state,
                isHideBottomTabs: action.payload
            }

        case actionType.setguidelink:
            return {
                ...state,
                features: {
                    ...state.features,
                    guideLink: action.payload
                }
            }    

        default:
            console.error('Action not defined in RootReducer!');
            return state;
    }
}