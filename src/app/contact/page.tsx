import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fabian Perkasa",
  description:
    "Fabian Perkasa adalah seorang siswa SMK Telkom Purwokerto yang suka dengan web development",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 text-black">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Feel free to contact me guys!!
      </Paragraph>
      <Contact />
    </Container>
  );
}
