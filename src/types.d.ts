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
