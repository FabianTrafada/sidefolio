import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Fabian Perkasa",
  description:
    "Fabian Perkasa adalah seorang siswa SMK Telkom Purwokerto yang suka dengan web development",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="pb-4 mt-2 text-black">Tips and trick</Heading>
      <Paragraph className="pb-10">
        Disini aku bakalan ngasih <Highlight className="font-medium">tips and trick.</Highlight>
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
