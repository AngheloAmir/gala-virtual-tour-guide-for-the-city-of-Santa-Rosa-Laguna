export interface DestinationLocation {
    lat         :number;
    lng         :number;
    name        :string;
    commute?    :string;
    voiceasset? :() => any;
}

export interface GalaSelfGuidedTour {
    name                :string;
    description         :string;
    pointOfInterests?   :Array<DestinationLocation>;
    destinations        :Array<{
        from     :'user' | DestinationLocation,
        to       :DestinationLocation,
    }>;
}