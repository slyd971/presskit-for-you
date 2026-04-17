"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type PreviewLoopCardProps = {
  title: string;
  label: string;
  image: string;
  imagePosition?: string;
  imageOffsetY?: string;
  href: string;
  delayClassName?: string;
};

export function PreviewLoopCard({
  title,
  label,
  image,
  imagePosition,
  imageOffsetY,
  href,
  delayClassName = "",
}: PreviewLoopCardProps) {
  const imageStyle: CSSProperties & {
    "--preview-offset-start"?: string;
    "--preview-travel"?: string;
  } = {};

  if (imagePosition) {
    imageStyle.objectPosition = imagePosition;
  }

  if (imageOffsetY) {
    imageStyle["--preview-offset-start"] = imageOffsetY;
  }

  imageStyle["--preview-travel"] = "3.5rem";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="panel-premium accent-ring rounded-[1.4rem] p-4"
      >
        <div className="overflow-hidden rounded-[1rem] border border-white/8 bg-[#0b0e14]">
          <div className="relative h-28 overflow-hidden bg-[#0b0e14]">
            <img
              src={image}
              alt={title}
              className={`preview-scroll w-full max-w-none ${delayClassName}`}
              style={Object.keys(imageStyle).length > 0 ? imageStyle : undefined}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0b0e14] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0b0e14] to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#0b0e14] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0b0e14] to-transparent" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.24em] text-white/45 transition duration-300 group-hover:text-white/64">
            {label}
          </p>
          <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/58 transition duration-300 group-hover:border-white/16 group-hover:bg-white/10">
            Live
          </span>
        </div>
        <p className="mt-2 text-lg font-medium text-white">{title}</p>
      </motion.div>
    </Link>
  );
}
