import type { NavMenu } from "@/types"

interface Props {
    dataMenu: NavMenu[];
}

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import LogoIni from '../../public/logo-ini.svg';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

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

const MenuItem: React.FC<NavMenu> = ({ title, href, subMenu }) => {
    if (!subMenu) {
        return (
            <>
                <div className="w-full py-2 capitalize" >
                    <a href={href}>{title}</a>
                </div>
            </>
        )
    }
    return (
        <>
            {
                subMenu.map((Link, idx) => (
                    <div className="w-full py-2 capitalize" >
                        <a href={Link.href}>{Link.title}</a>
                    </div>
                ))
            }

        </>
    )
}

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


export const OffCanvas: React.FC<Props> = ({ dataMenu }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby="">
                <SheetHeader className="mb-4">
                    <header>
                        <Image className="mx-auto mb-2" src={LogoIni} alt="logo ini" width={80} height={80} />
                        <div className="mx-auto text-center">
                            <SheetTitle>
                                <div className="text-xs font-semibold">Pengurus Daerah Kabupaten Garut</div>
                                <div className="text-md font-semibold">IKATAN NOTARIS INDONESIA</div>
                            </SheetTitle>
                        </div>
                    </header>
                </SheetHeader>
                <ul className="flex flex-col">
                    {
                        siteLink.map((nav, idx) => (
                            <div key={idx} className="py-2">
                                <NavLink title={nav.title} href={nav.href} key={idx} subMenu={nav.subMenu} />
                            </div>
                        ))
                    }
                </ul>
            </SheetContent>
        </Sheet>
    )
}