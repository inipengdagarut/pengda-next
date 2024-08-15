import Date from '@/components/Date';
import { badgeVariants } from "@/components/ui/badge"
import Image from 'next/image';
import Link from 'next/link';
import LogoINI from ''

export default function PostList({title, excerpt, slug}) {
    return (
        <>
        
        <Date time='2024-08-17' className='text-xs uppercase text-muted-foreground font-bold mb-1'/>
        <div className='flex gap-4'>
            <div className='w-3/4 lg:3/5'>
                <h2 className='text-2xl font-serif leading-tight mb-2'>
                    {title}
                </h2>
                <p className='line-clamp-3 mb-4'>
                    {excerpt}
                </p>
                <div>
                <Link href={slug} className={badgeVariants({ variant: "outline" })}>Badge</Link>
                </div>
            </div>
            <div className='w-1/4 lg:w-2/5'>
                <div className='w-full aspect-square lg:aspect-[16/10] bg-accent rounded-lg overflow-hidden'>

                </div>
            </div>

        </div>
        </>
    )
}