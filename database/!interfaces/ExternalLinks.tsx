/*
    The structure of the external links in the Home Tab
*/

export interface ExternalLinks {
    title       :string;
    contents    :Array<ExternalLinksContents>;
};

export interface ExternalLinksContents {
    linkname        :string;
    description     :string;
    link            :string;
}