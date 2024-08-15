'use client'

// export interface Post {
//     author?: string;
//     collections: string;
//     draft: boolean;
//     excerpt: string;
//     id:string;
//     coverImage?:string
//     postBody: string;
//     postDate: Date;
//     tags: string[]
//     title: string;
// }

import type { Post } from '@/types'

import { useState } from 'react'
import { MinimalTiptapEditor } from '@/components/minimal-tiptap'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'


export default function NewPost() {
    const [value, setValue] = useState('')
    return (
        <>
            <h1>Buat Posting Baru</h1>
            <div className="container mx-auto grid lg:grid-cols-2 gap-6">
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="title">Judul</Label>
                    <Input id="title" placeholder="Judul posting" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="email">Tanggal</Label>
                    <Input id="email" placeholder="Email" />
                </div>
                <div className="grid w-full items-center gap-2">
                    <Label htmlFor="email">Penulis</Label>
                    <Input id="email" placeholder="Email" />
                </div>
                <div className='grid w-full items-center gap-2 lg:col-span-2'>
                    <Label>Konten</Label>
                    <MinimalTiptapEditor
                        value={value}
                        onChange={setValue}
                        throttleDelay={2000}
                        className="w-full"
                        editorContentClassName="p-5"
                        output="html"
                        placeholder="Type your description here..."
                        autofocus={true}
                        immediatelyRender={false}
                        editable={true}
                        injectCSS={true}
                        shouldRerenderOnTransaction={false}
                        editorClassName="focus:outline-none"
                    />
                </div>
            </div>
        </>
    );
}