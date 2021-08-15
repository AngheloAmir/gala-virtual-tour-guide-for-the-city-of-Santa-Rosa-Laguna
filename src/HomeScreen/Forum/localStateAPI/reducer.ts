/*
*/
import { ForumDataInterface, ActionInterface, actionType} from './interface';

export function rootReducer(state :ForumDataInterface, action :ActionInterface) :ForumDataInterface {
    switch(action.type) {
        case actionType.setThreads:
            return {
                ...state, forum: action.payload
            }

        case actionType.test:
            console.log('working');
            return state;
        default:
            console.log('Action not defined in the root reducer');
            return state;
    }
}