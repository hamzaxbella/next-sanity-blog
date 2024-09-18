// data types.
export interface simpleBlogCard {
    title : string;
    smallDescription : string;
    currentSlug : string
    titleImage : any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface fullBlog {
    currentSlug : string,
    title : string,
    content : any, // eslint-disable-line @typescript-eslint/no-explicit-any
    titleImage : any, // eslint-disable-line @typescript-eslint/no-explicit-any
}