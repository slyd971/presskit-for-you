"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { CTA, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // Sentinelle de 80 px en haut de page : plus visible = page défilée de plus de 80 px.
  useEffect(() => {
    const sentinel = document.getElementById("header-sentinel");

    if (!sentinel || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setIsCompact(!entry.isIntersecting));

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative w-full">
        {/* Verre sombre sur toute la page : au défilement, la barre rétrécit de 8 px par translation. */}
        <div
          aria-hidden="true"
          className={cn(
            "header-layer pointer-events-none absolute inset-x-0 -bottom-2 top-0 border-b border-white/[0.08] bg-surface-900/90 backdrop-blur-xl",
            isCompact && "-translate-y-2",
          )}
        />
        <div
          className={cn(
            "header-row relative mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 py-3 md:px-8",
            !isCompact && "translate-y-1",
          )}
        >
          <Link
            href="/"
            className="relative block h-10 w-44 shrink-0 opacity-95 transition hover:opacity-80 md:h-12 lg:w-60"
          >
            <Image
              src="/logo/logo-presskitforyou-cropped.png"
              alt={siteConfig.name}
              fill
              sizes="(min-width: 768px) 15rem, 11rem"
              priority
              className="object-contain object-left"
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-5 md:flex lg:gap-8">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] font-semibold text-white/[0.84] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button arrow
              href="/#contact"
              className="hidden px-3 py-2 text-[11px] font-semibold sm:inline-flex md:px-5 md:py-3 md:text-sm"
            >
              {CTA.primary}
            </Button>

            <button
              type="button"
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/[0.08] md:hidden"
            >
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -12, opacity: 0, scale: 0.85 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 12, opacity: 0, scale: 0.85 }}
                transition={{ duration: motionTokens.duration.feedback, ease: motionTokens.easing.interaction }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.interaction }}
              className="relative overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: motionTokens.duration.fast, ease: motionTokens.easing.enter }}
                className="px-4 pb-4 pt-3"
              >
                <nav id="mobile-navigation" aria-label="Navigation mobile" className="grid gap-2">
                  {siteConfig.nav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 6, opacity: 0 }}
                      transition={{
                        duration: motionTokens.duration.fast,
                        delay: 0.03 * index,
                        ease: motionTokens.easing.enter,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg border border-transparent px-3 py-3 text-[15px] font-semibold text-white/[0.84] transition hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 8, opacity: 0 }}
                  transition={{ duration: motionTokens.duration.fast, delay: motionTokens.delay.related, ease: motionTokens.easing.enter }}
                >
                  <Button arrow href="/#contact" className="mt-4 w-full justify-center">
                    {CTA.primary}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
