'use client'

import testPic from '../../public/images/ini-garut.jpeg'



import PostThumbnail from "@/components/PostThumbnail";
export default function Home() {
  return (
    <div className="container mx-auto">
      

      <div className="lg:flex">
        <div className="lg:w-3/4">
          <h2>Berita terkini</h2>
          <ul>
            <li>
              <PostThumbnail title="Mengenang 116 tahun Ikatan Notaris Indonesia" image={testPic} href={'/news/${title}'} leading={true} align='center' excerpt='Hari ini, kita merayakan momen bersejarah yang menandai 116 tahun berdirinya organisasi kami. Sejak didirikan, organisasi ini telah menjadi pelopor dalam berbagai bidang, berkomitmen untuk memajukan tujuan-tujuan mulia dan memberikan dampak positif bagi masyarakat. Dalam perjalanan panjang ini, kami telah menghadapi berbagai tantangan dan meraih banyak pencapaian yang membanggakan. Peringatan ini bukan hanya sekadar merayakan usia, tetapi juga merupakan momen refleksi untuk menghargai perjalanan yang telah dilalui, mengenang jasa-jasa para pendiri dan anggota terdahulu, serta menetapkan visi untuk masa depan. Dengan semangat yang sama seperti 116 tahun yang lalu, kami terus bertekad untuk berinovasi dan berkontribusi lebih besar demi kesejahteraan bersama.' />
            </li>
          </ul>
        </div>
        <div className="lg:w-1/4">sssss</div>
      </div>
    </div>
  );
}
