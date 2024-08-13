'use client'

import type { NavMenu } from "@/types"

interface Props {
    siteNav: NavMenu[];
}


import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const linkStyle = "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:cursor-pointer";

export const SiteNav: React.FC<Props> = ({ siteNav }) => {

    return (
        <NavigationMenu>
            <NavigationMenuList>
                {
                    siteNav.map((dataMenu, idx) => (
                        <MenuItem title={dataMenu.title} href={dataMenu.href} subMenu={dataMenu.subMenu} key={idx} />
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}


const MenuItem: React.FC<NavMenu> = ({ title, href, subMenu }) => {
    if (!subMenu) {
        return (
            <NavigationMenuItem>
                <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent`}>
                        {title}
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        )
    }
    return (

        <NavigationMenuItem className="w-full flex">
            <NavigationMenuTrigger className="bg-transparent">{title}</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-4 md:w-[400px]">
                    {
                        subMenu.map((sub, i) => (
                            <li key={i}>
                                <Link href={sub.href} legacyBehavior passHref>
                                    <NavigationMenuLink asChild className={`${linkStyle}`}>
                                        <div>
                                            <div className="text-sm font-medium leading-none text-left capitalize">{sub.title}</div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                {sub.desc}
                                            </p>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>

    )
}
MenuItem.displayName = "ListItem"
