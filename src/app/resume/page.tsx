import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { SchoolHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black text-black mt-2">Riwayat Pendidikan</Heading>
      <Paragraph className="max-w-xl mt-4">
        Aku seorang Frontend yang menyukai{" "}
        <Highlight>membuat products</Highlight> dan web apps yang berguna
        untuk orang orang
      </Paragraph>
      <SchoolHistory />
    </Container>
  );
}
