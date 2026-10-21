"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { motionTokens } from "@/lib/motion";

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
      aria-label={`${title} — ouvrir la démo`}
      className="group block h-full"
    >
      <motion.div
        whileHover={{ y: -2, rotateX: 0.3 }}
        transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.interaction }}
        className="panel-premium accent-ring flex h-full flex-col rounded-[1.4rem] p-4"
      >
        <div className="mockup-surface relative overflow-hidden rounded-[1rem] border border-white/[0.08] bg-mockup">
          <div className="relative h-28 overflow-hidden bg-mockup">
            <Image
              src={image}
              alt={title}
              width={640}
              height={420}
              sizes="(min-width: 1024px) 18rem, 80vw"
              className={`preview-scroll w-full max-w-none ${delayClassName}`}
              style={Object.keys(imageStyle).length > 0 ? imageStyle : undefined}
            />
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-hover group-hover:opacity-100">
              <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-mockup to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-mockup to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-mockup to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-mockup to-transparent" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-label text-white/[0.64] transition duration-fast group-hover:text-white/[0.64]">
            {label}
          </p>
          <span className="rounded-full border border-white/[0.12] bg-white/[0.055] px-2.5 py-1 text-[10px] uppercase tracking-label-tight text-white/[0.64] transition duration-fast group-hover:border-white/[0.18] group-hover:bg-white/[0.1]">
            Live
          </span>
        </div>
        <p className="mt-2 min-h-[3.5rem] text-lg font-medium text-white md:min-h-[4.5rem]">
          {title}
        </p>
      </motion.div>
    </Link>
  );
}
