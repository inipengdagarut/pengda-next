import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pengurus Daerah Kabupaten Garut Ikatan Notaris Indonesia",
  description: "Organisasi profesi yang menaungi para Notaris di Kabupaten Garut, berkomitmen untuk memberikan pelayanan terbaik dalam bidang hukum kenotariatan. Melalui situs ini, kami menyediakan informasi terkini mengenai kegiatan organisasi, program pelatihan, serta layanan yang kami tawarkan. Kami juga berperan aktif dalam mendukung perkembangan hukum di Indonesia dengan mengutamakan integritas, profesionalisme, dan kepatuhan terhadap kode etik notaris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
