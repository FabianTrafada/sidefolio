import { Metadata } from "next";

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Tentang | Fabian Perkasa",
  description:
    "Fabian Perkasa adalah seorang siswa SMK Telkom Purwokerto yang suka dengan web development",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black mt-2 text-black/85">Tentang Saya</Heading>
      <About />
    </Container>
  );
}
