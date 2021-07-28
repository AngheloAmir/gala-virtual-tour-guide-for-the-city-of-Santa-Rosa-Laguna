/*
    The structure of the external links in the Home Tab
*/

export interface ExternalLinks {
    title       :string;
    notice      :string;
    contents    :Array<ExternalLinksContents>;
};

export interface ExternalLinksContents {
    linkname        :string;
    description     :string;
    link            :string;
    linkShort       :string; //shorter link name that will appear as the link if the actual link is long
}