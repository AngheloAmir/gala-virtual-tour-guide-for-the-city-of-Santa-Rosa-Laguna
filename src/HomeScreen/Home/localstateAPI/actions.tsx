/*
*/
import { ActionInterface, actionType} from './interface';

export function setAttributionshow(isShow :boolean) :ActionInterface {
    return {
        type: actionType.setIsDialogAttributionShow, payload: isShow
    }
}

export function setMapMarkerId(index :number) :ActionInterface {
    return {
        type: actionType.setMapMarkerId, payload: index
    }
}

export function setPlaceInfoShow(isShow :boolean) :ActionInterface {
    return {
        type: actionType.setPlaceInfoShow, payload: isShow
    }
}
