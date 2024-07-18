"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="p-4 text-center justify-center text-xs text-black border-t border-gray-600">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by <span className="font-semibold">Fabian Perkasa</span>
    </div>
  );
};
