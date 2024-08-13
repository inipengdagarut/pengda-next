import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { SiteNav } from "@/components/SiteNav";
import { siteNav } from '@/data/siteNav';

import SiteLogo from '../../public/logo-ini-text-1.svg';
import Link from "next/link";


export default function MainHeader() {
    return (
        <header className="MainHeader h-16 flex items-center border-b">
            <div className="container mx-auto flex items-center justify-between">
                <div className="relative h-8 w-72">
                    <Link href={'/'}>
                        <Image src={SiteLogo} alt={'Logo Ikatan Notaris Indonesia'} fill />
                    </Link>
                </div>
                <div>
                    <SiteNav siteNav={siteNav} />
                </div>
            </div>
        </header>
    )
}