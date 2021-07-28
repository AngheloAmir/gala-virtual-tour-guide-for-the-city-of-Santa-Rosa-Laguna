/*
*/
import { HomeStateInterface, ActionInterface, actionType} from './interface';

export function rootreducer(state :HomeStateInterface, action :ActionInterface ) {
    switch(action.type) {
        case actionType.setIsDialogAttributionShow: 
            return {
                ...state, attributionDialogShow: action.payload
            }

        case actionType.setMapMarkerId:
            return {
                ...state, mapMarkerId: action.payload
            }
        
        case actionType.setPlaceInfoShow:
            return {
                ...state, placeInfoShow: action.payload
            }
        
        case actionType.setWebviewLink:
            return {
                ...state, webviewlink: action.payload
            }
        
        case actionType.setDialogOpenStreetMapProviderCreadit:
            return {
                ...state, isInstantSVCreadit: state.isInstantSVCreadit + 1
            }

        case actionType.setStory:
            return {
                ...state, storyToRead: action.payload
            }

        default:
            console.error('Action not defined in the reducer!');
            return state;
    }
}