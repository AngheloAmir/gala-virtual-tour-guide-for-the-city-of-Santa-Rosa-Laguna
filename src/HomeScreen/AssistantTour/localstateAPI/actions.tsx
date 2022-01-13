/*

*/
import { actionType, Position, UserStatus, StatusDestination } from './interface'; 
import { MapShape, MapMarker } from "expo-leaflet";

export function setUserPosition(geolocation :Position) {
    return {
        type: actionType.setUserPosition, payload: geolocation
    }
}

export function setMapCenter(geolocation :Position) {
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

export function clearPolyLineAndMarker() {
    return {
        type: actionType.clearShapeNMarkers
    }
}

export function setAttributionshow(isOpen :boolean) {
    return {
        type: actionType.setIsAttributionShow, payload: isOpen
    }
}

export function setPOIBoxOpen(isOpen :boolean) {
    return {
        type: actionType.setIsPOIBoxOpen, payload: isOpen
    }
}

export function setPoiIndex(index :number) {
    return {
        type: actionType.setPoiIndex, payload: index
    }
}

export function setIsCloseToMarker(isClose :boolean) {
    return {
        type: actionType.setIsCloseToMarker, payload: isClose
    }
}

export function setUserStatus(status :UserStatus) {
    return {
        type: actionType.setUserStatus, payload: status
    }
}

export function setDestinationStatus(status :Array<StatusDestination>) {
    return {
        type: actionType.setDestinationStatus, payload: status
    }
}

export function setIsLookingForAPlace(isLooking :boolean) {
    return {
        type: actionType.setIsLookingForAPlace, payload: isLooking
    }
}