import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fabian Perkasa - Student | Developer",
  description:
    "Fabian Perkasa adalah seorang siswa SMK Telkom Purwokerto yang suka dengan web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          "flex antialiased h-screen overflow-hidden bg-putihKekuningan"
        )}
      >
        <Sidebar />
        <div className="lg:pl-2 lg:pt-2 bg-putihKekuningan flex-1 overflow-y-auto">
          <div className="flex-1 bg-putihKekuningan min-h-screen lg:rounded-tl-xl border border-transparent overflow-y-auto">
            <Toaster />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
