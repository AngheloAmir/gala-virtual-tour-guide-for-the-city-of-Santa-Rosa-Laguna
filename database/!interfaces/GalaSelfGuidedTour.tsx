/*
*/
export interface GalaSelfGuidedTour {
    name                :string;
    description         :string;
    longdescription     :string;
    destinations        :Array<FromToInterface>;
    pointOfInterests?   :Array<DestinationLocation>;
}

export interface DestinationLocation {
    lat          :number;
    lng          :number;
    name         :string;
    description? :string;
    address?     :string;
    commute?     :string;
    sources?     :Array<string>;
    voiceasset?  :() => any;
}

export interface FromToInterface {
    from     :'user' | DestinationLocation,
    to       :DestinationLocation,
}

