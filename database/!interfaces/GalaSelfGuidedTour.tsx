/*
    Defines the structure of tours, which can be seen in the top (toolbar) of the
    Assistant Tour feature of the app.

    Do note that, the tours is an array but this interface only defines a single element
*/
export interface GalaSelfGuidedTour {
    name                :string;
    description         :string;
    longdescription     :string;
    destinations        :Array<FromToInterface>;
    pointOfInterests    :Array<DestinationLocation>;
}

export interface DestinationLocation {
    lat          :number;
    lng          :number;
    name         :string;
    image?       :string;   //a string pointing to an assets in the asset.tsx
    description? :string;
    address?     :string;
    commute?     :string;
    sources?     :Array<string>;
    voiceasset?  :string; //a string pointing to an asset element in the asset.tsx
    streetviewlink? :string;
}

export interface FromToInterface {
    from     :'user' | DestinationLocation,
    to       :DestinationLocation,
}
