/*
*/
import { StoryContent } from "../../../../database/!interfaces/StoryContent";
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

export function setWebviewLink(link :string) :ActionInterface {
    return {
        type: actionType.setWebviewLink, payload: link
    }
}

export function setInstantSVCreadit() :ActionInterface {
    return {
        type: actionType.setDialogOpenStreetMapProviderCreadit,
    }
}

export function setStoryToRead(story :StoryContent) :ActionInterface {
    return {
        type: actionType.setStory, payload: story
    }
}

export function flipSearchButton() :ActionInterface {
    return {
        type: actionType.flipSearchButton
    }
}

export function offSearchBar() :ActionInterface {
    return {
        type: actionType.offSearchBar
    }
}

export function setMapCenter(geolocation: {lat :number, lng :number}) :ActionInterface {
    return {
        type: actionType.setMapCenter, payload: geolocation
    }
}

export function setZoomLevel(level :number) :ActionInterface {
    return {
        type: actionType.setZoomlevel, payload: level
    }
}
