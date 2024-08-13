import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pengurus Daerah Kabupaten Garut Ikatan Notaris Indonesia",
  description: "Organisasi yang menaungi para Notaris di Kabupaten Garut, berkomitmen untuk memberikan pelayanan terbaik dalam bidang hukum kenotariatan. Melalui situs ini, kami menyediakan informasi terkini mengenai kegiatan organisasi, program pelatihan, serta layanan yang kami tawarkan. Kami juga berperan aktif dalam mendukung perkembangan hukum di Indonesia dengan mengutamakan integritas, profesionalisme, dan kepatuhan terhadap kode etik notaris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <MainHeader />
            <main>
              {children}
            </main>
          </div>
         <MainFooter />
        </div>
      </body>
    </html>
  );
}
