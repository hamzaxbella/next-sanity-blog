// data types
export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: {
        asset: {
            url: string;  // Assuming `titleImage` is an object with an asset containing the image URL
        };
    };
}

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any[] | string;  // Adjust based on how you're handling content (e.g., an array of rich text elements or plain HTML)
    titleImage: {
        asset: {
            url: string;
        };
    };
}
