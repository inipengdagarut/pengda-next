'use client'
interface Props {
    postDate: string | Date | number;
    href: string;
    title: string;
    image?: string;
    excerpt?: string;
    author?: string;
    leading?: boolean;
    align?: 'left' | 'center' | 'right'
}

// Components
import Image from "next/image";
import Link from "next/link";
import Date from "@/components/Date";
import { Skeleton } from "@/components/ui/skeleton";


const textSize = (leading: Props["leading"]) => {
    if (leading) {
        return {
            titleText:
                "text-2xl lg:text-5xl mt-2 mb-2 lg:mt-2 font-normal font-serif",
        };
    }
    return {
        titleText: "text-xl mt-2 mb-2 lg:mt-2 font-normal font-serif leading-tight",
    };
};

const textAlign = (agln: Props['align']) => {
    if (agln === 'center') {
        return ('text-center')
    }
    if (agln === 'right') {
        return ('text-right')
    }
    return ('text-left')
}

export default function PostThumbnail({ title, postDate, href, image, excerpt, author, leading = false, align = "left" }: Props) {
    return (
        <div className="max-w-[62ch] mx-auto">
            {
                image ? (
                    <div className="mb-4">
                        <Link href={href} className="block w-full aspect-[16/10] object-cover rounded-lg overflow-hidden relative">
                            <Skeleton className="w-full aspect-[16/10] object-cover rounded-lg overflow-hidden relative" />
                            <Image src={image} alt={title} fill className="hover:opacity-85 ease-out duration-200 object-cover"/>
                        </Link>
                    </div>
                ) : ''
            }
            <Date time={postDate} className={`mb-1 uppercase font-semibold text-muted-foreground text-xs ${textAlign(align)}`} />
            <h2 className={`${textSize(leading).titleText} ${textAlign(align)}`}>
                <a href={href} className="hover:underline">{title}</a>
            </h2>
            {
                author ? (
                    <div className={`capitalize font-semibold text-sm text-muted-foreground mb-2 ${textAlign(align)}`}>
                        Oleh : {author}
                    </div>
                ) : ''
            }
            {
                excerpt ? (
                    <p className={`mt-4 line-clamp-3 lg:line-clamp-5 lg:text-lg ${textAlign(align)}`}>{excerpt}</p>
                ) : ''
            }
        </div>
    )
}