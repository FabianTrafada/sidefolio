import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Badge = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      className="bg-coklat no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full ">
        <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 ">
        <span>{text}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M10.75 8.75L14.25 12L10.75 15.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          ></motion.path>
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem) transition-opacity duration-500 group-hover:opacity-40"></span>
    </Link>
  );
};
