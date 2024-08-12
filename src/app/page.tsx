import Image from "next/image";
import { MainNav } from "@/components/MainNav";
import { SiteNav } from "@/components/SiteNav";
import { siteNav } from '@/data/siteNav';
export default function Home() {
  return (
    <main>
      <SiteNav siteNav={siteNav}/>
    </main>
  );
}
