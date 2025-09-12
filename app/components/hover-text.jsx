import React from "react";
import { TextHoverEffect } from "./ui/text-hover";
export function Text() {
  return (
    <div className="h-[12rem] lg:h-[27rem] flex items-center justify-center bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <TextHoverEffect text="SIGMOIT" />
    </div>
  );
}
