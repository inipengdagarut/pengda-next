
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import SectionTitle from "@/components/SectionTitle";



export default function Page() {
    return (
        <div className="pt-8">
            <div className="container mx-auto px-8">
                <div className="mb-8">
                    <SectionTitle title="Anggota." size="xl" />
                </div>
            </div>
            <div className="container mx-auto px-8 flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center">
                <div className="lg:w-1/2">
                    <p className="max-w-[60ch]">Terdapat 178 anggota kami di Kabupaten Garut. Anggota-anggota kami terdiri dari Notaris yang berdedikasi untuk melayani masyarakat. Kami siap membantu masyarakat dalam berbagai bidang terkait kenotariatan, seperti pembuatan akta, pengesahan dokumen, serta konsultasi hukum terkait.</p>
                    <div className="flex flex-col gap-4 mt-8">
                        <Label htmlFor="email">Pencarian Anggota</Label>
                        <div className="flex items-center gap-4 max-w-screen-sm">
                            <Input />
                            <Button className="flex-none gap-2">
                                <MagnifyingGlassIcon />  Pencarian
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 hidden">
                    <div className="flex flex-col gap-4">
                        <Label htmlFor="email">Pencarian Anggota</Label>
                        <div className="flex items-center gap-4 max-w-screen-sm">
                            <Input type="" placeholder={"Cari berdasarkan Nama, atau daerah"}/>
                            <Button className="flex-none gap-2">
                                <MagnifyingGlassIcon />  Pencarian
                            </Button>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}