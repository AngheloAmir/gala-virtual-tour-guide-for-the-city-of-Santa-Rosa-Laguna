/*
    Defines the structure of the Forum.json
*/
export interface ForumInterface {
    termsAndCondTitle   :string;
    termsAndCondition   :Array<TermsAndCondText>;
}

export interface TermsAndCondText {
    heading :string;
    text    :string;
}
