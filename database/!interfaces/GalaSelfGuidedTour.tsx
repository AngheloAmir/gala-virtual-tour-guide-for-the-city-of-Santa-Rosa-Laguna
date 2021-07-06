export interface DestinationLocation {
    lat         :number;
    lng         :number;
    name        :string;
    commute?    :string;
    voiceasset? :() => any;
}

export interface FromToInterface {
    from     :'user' | DestinationLocation,
    to       :DestinationLocation,
}

export interface GalaSelfGuidedTour {
    name                :string;
    description         :string;
    longdescription     :string;
    pointOfInterests?   :Array<DestinationLocation>;
    destinations        :Array<FromToInterface>;
}