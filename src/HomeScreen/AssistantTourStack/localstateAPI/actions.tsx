/*

*/
import { actionType, Location } from './interface'; 
import { MapShape, MapMarker } from "expo-leaflet";

export function setUserPosition(geolocation :Location) {
    return {
        type: actionType.setUserPosition, payload: geolocation
    }
}

export function setMapCenter(geolocation :Location) {
    return {
        type: actionType.setMapCenter, payload: geolocation
    }
}

export function flipIsMapCenter() {
    return {
        type: actionType.flipIsMapCenter,
    }
}

export function setZoomlevel(level :number) {
    return {
        type: actionType.setZoomlevel, payload: level
    }
}

export function setCurrentTour(name :string, index :number) {
    return {
        type: actionType.setCurrentTour, payload: { name, index }
    }
}

export function flipIsSoundPlay() {
    return {
        type: actionType.flipIsSoundPlay,
    }
}

export function setDialogMessage(title :string, msg :string) {
    return {
        type: actionType.setDialogMessage, payload: { title, msg }
    }
}

export function permissionLocationNotGranted() {
    return {
        type: actionType.setPermissionNotGranted
    }
}

export function setMapWasLoaded() {
    return {
        type: actionType.setMapWasLoaded
    }
}

export function setMapLock(isLock :boolean) {
    return {
        type: actionType.setMapLock, payload: isLock
    }
}

export function setMapPathIsLoading(isLoading :boolean) {
    return {
        type: actionType.setMapPathIsLoading, payload: isLoading
    }
}

export function setSelectTourOpen(isOpen :boolean) {
    return {
        type: actionType.setSelectTourOpen, payload: isOpen
    }
}

export function setMapPolyLines(polylines :Array<MapShape>) {
    return {
        type: actionType.setMapPolylines, payload: polylines,
    }
}

export function setMapMarkers(markers :Array<MapMarker>) {
    return {
        type: actionType.setMapMarkers, payload: markers
    }
}

export function setFindPlacesOpen(isOpen :boolean) {
    return {
        type: actionType.setIsFindPlacesOpen, payload: isOpen
    }
}
