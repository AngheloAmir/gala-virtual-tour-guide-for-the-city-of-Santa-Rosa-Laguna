/*
*/

export interface LocalStateAPI {
    localState     :HomeStateInterface;
    localDispatch  :React.Dispatch<any>;
}

export interface HomeStateInterface {
    attributionDialogShow       :boolean;
    mapMarkerId                 :number; //an index equal to database/places/allplaces array
    placeInfoShow               :boolean;
    isMarkerShow                :boolean;
    streetviewlink              :string;
}

export interface ActionInterface {
    type        :number;
    payload?    :any;
    index?      :number;
}

export enum actionType {
    setIsDialogAttributionShow,
    setMapMarkerId,
    setPlaceInfoShow,
    setStreetViewLink,
}