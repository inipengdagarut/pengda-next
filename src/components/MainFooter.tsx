'use client'

import type { NavMenu } from "@/types"

interface Props {
    siteNav: NavMenu[];
}


import X from "@/components/icons/x";
import Facebook from "@/components/icons/facebook";
import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Tiktok from "@/components/icons/tiktok";
import Youtube from "@/components/icons/youtube";
import LogoINI from "../../public/logo-ini.svg"
import Link from "next/link";

import { siteNav } from "@/data/siteNav";


function flattenMenu(menuItems: NavMenu[]): NavMenu[] {
    const flattenedMenu: NavMenu[] = [];
    menuItems.forEach(item => {
        if (item.subMenu) {
            item.subMenu.forEach(subItem => {
                flattenedMenu.push(subItem);
            });
        } else {
            flattenedMenu.push(item);
        }
    });
    return flattenedMenu;
}

const siteLink = flattenMenu(siteNav)
const thisYear = new Date().getFullYear();


function NavLink(nav: NavMenu) {
    return (
        <li className="w-1/2 mb-2">
            <Link
                className="animate-in duration-150 hover:underline"
                href={nav.href}
            >
                {nav.title}
            </Link>
        </li>
    )
}



export default function MainFooter() {
    return (
        <div className="red-gradient text-destructive-foreground">
            <div className="container mx-auto pt-16 mb-8">
                <div className="lg:flex justify-between gap-8">
                    <div className="lg:w-3/6 mb-8">
                        <div className="lg:flex gap-6">
                            <div className="w-24 mb-4">
                                <img src={LogoINI.src} alt="" />
                            </div>
                            <div>
                                <h2 className="mb-4 font-bold">
                                    Pengurus Daerah Kabupaten Garut<br /> IKATAN NOTARIS
                                    INDONESIA
                                </h2>
                                <p>Sekertariat:</p>
                                <address className="not-italic">
                                    Komplek RUKO IBC Nomor C-18<br />Jalan
                                    Guntur-Pramuka Kabupaten Garut.<br />
                                    Telp. 0213 987654321<br />
                                    pengdagarut@gmail.com
                                </address>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/6 mb-8">
                        <ul className="flex flex-wrap w-full">
                            {
                                siteLink.map(nav => (
                                    <NavLink href={nav.href} title={nav.title} />
                                ))
                            }
                        </ul>
                    </div>
                    <div className="lg:w-1/6 mb-8">
                        <nav className="flex gap-4 mx-auto">
                            <a href="https://www.facebook.com/people/Pengda-Ini-ppat-Kabupaten-Garut/61556932181052/">
                                <Facebook className="w-6 fill-white" />
                            </a>
                            <a href="https://tiktok.com">
                                <Instagram className="w-6 fill-white" />
                            </a>
                            <a href="https://tiktok.com">
                                <Youtube className="w-6 fill-white" />
                            </a>
                            <a href="https://tiktok.com">
                                <X className="w-6 fill-white" />
                            </a>
                            <a href="https://tiktok.com">
                                <Tiktok className="w-6 fill-white" />
                            </a>
                            <a href="https://github.com/inipengdagarut">
                                <Github className="w-6 fill-white" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-xs text-center lg:px-0 border-t py-4">
                    © {thisYear} Pengurus Daerah Kabupaten Garut Ikatan Notaris Indonesia
                </p>
            </div>
        </div>
    )
}