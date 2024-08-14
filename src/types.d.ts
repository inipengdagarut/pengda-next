interface Link {
    title: string
    href: string
    desc?:string
}

export interface NavMenu {
    title: string
    href: string
    subMenu?: Link[]
}

export interface Post {
    author?: string;
    collections: string;
    draft: boolean;
    excerpt: string;
    id:string;
    image?:string
    postBody: string;
    postDate: Date;
    tags: string[]
    title: string;
}