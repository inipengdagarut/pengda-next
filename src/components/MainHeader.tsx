import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { siteNav } from '@/data/siteNav';

import SiteLogo from '../../public/logo-ini-text-1.svg';
import Link from "next/link";
import { OffCanvas } from "./OffCanvas";


export default function MainHeader() {
    return (
        <header className="MainHeader h-16 flex items-center border-b fixed top-0 right-0 left-0 z-50 backdrop-blur-xl bg-background/85">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <Link href={'/'} className="block relative h-8 w-72">
                        <Image src={SiteLogo} alt={'Logo Ikatan Notaris Indonesia'} fill/>
                    </Link>
                </div>
                <div className="hidden lg:block">
                    <SiteNav siteNav={siteNav} />
                </div>
                <div className="lg:hidden">
                    <OffCanvas dataMenu={siteNav}/>
                </div>
            </div>
        </header>
    )
}