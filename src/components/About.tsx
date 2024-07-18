"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Paragraph } from "@/components/Paragraph";
import { LinkPreview } from "./ui/link-preview";

export default function About() {
  const images = [
    "/images/ian-portrait2.jpg",
    "/images/telkom-portrait.jpg",
    "/images/ian-portrait3.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl text-black">
        <Paragraph className="mt-4 text-black">
          Haloooo, Saya Fabian Perkasa -{" "}
            <LinkPreview url="https://smktelkom-pwt.sch.id/" className="font-bold text-black">
              <span className="hover:text-black/90 text-black">Siswa SMK Telkom Purwokerto</span>
            </LinkPreview>
          , Selamat datang di situs web saya!
        </Paragraph>
        <Paragraph className="mt-4 text-black">
          Sejak awal, saya sudah jatuh cinta dengan bagaimana website dibentuk
          hanya cara diketik. Sebagai developer, saya suka membuat website yang
          fungsional dan keren. Tujuan saya bukan cuma website, tapi juga
          mencari ilmu dan relasi.
        </Paragraph>
        <Paragraph className="mt-4 text-black">
          Tapi, perjalanan saya nggak cuma soal ngoding. Dengan setiap hari
          pikiran selalu penuh ide, saya terus berlatih membuat website. Dari
          website yang sederhana sampai website yang komplek dan kreatif yang
          berguna untuk orang lain.
        </Paragraph>
        <Paragraph className="mt-4 text-black">
          Melalui situs web ini, saya ingin berbagi wawasan, pengalaman, dan
          project saya dengan kalian. Yuk, ikut saya dalam perjalanan ini lewat
          byte dan cerita, logika dan kreativitas, kode dan prosa. Bersama-sama,
          kita bisa eksplorasi kemungkinan tak terbatas dari teknologi dan
          cerita, sambil menikmati indahnya desain yang matang.
        </Paragraph>
        <Paragraph className="mt-4 text-black">
          Terima kasih sudah mampir, dan saya nggak sabar buat mulai petualangan
          ini bareng kalian.
        </Paragraph>
      </div>
    </div>
  );
}
