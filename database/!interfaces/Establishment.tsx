/*
    Define the structure of an Establishments
    This interface is used by establishments.json and the data appears in the 
    Assistant Tour feature of the app.
*/
export interface EstablishmentCategory {
    category :string;
    items    :Array<Establishment>;
}

export interface Establishment {
    name    :string;
    lat     :number;
    lng     :number;
}