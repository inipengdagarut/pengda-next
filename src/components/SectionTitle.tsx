interface Props {
    title: string;
    href?: string;
    size?: 'sm' | 'xl'
}

import Link from "next/link";
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { cn } from "@/lib/utils";

const sizeSm = 'text-md font-semibold'
const sizeXl = 'text-2xl lg:text-6xl font-serif bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 to-slate-500'

function sizeClass(size: Props['size']) {
    if (size === 'xl') { return (sizeXl) }
    return (sizeSm)
}

export default function SectionTitle({ title, href, size = 'sm' }: Props) {
    return (
        <div className="flex justify-between items-center capitalize">
            <h2 className={`${sizeClass(size)}`}>
                {title}
            </h2>
            {
                href ? (
                    <Link href={href}><ArrowRightIcon className={cn('font-normal text-muted-foreground hover:underline flex gap-4 items-center')} /></Link>
                ) : ''
            }
        </div>
    )
}