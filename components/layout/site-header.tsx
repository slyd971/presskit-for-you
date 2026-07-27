"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setIsCompact(currentY > 24);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={cn(
          "mx-auto max-w-8xl rounded-lg border border-white/[0.08] bg-[#0b0e14]/[0.86] shadow-[0_18px_52px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300",
          isCompact ? "rounded-lg" : "rounded-lg",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between gap-4 px-4 transition-all duration-300 md:px-6",
            isCompact ? "py-3" : "py-4",
          )}
        >
          <Link
            href="/"
            className="min-w-0 text-[9px] font-semibold uppercase tracking-[0.14em] text-white transition hover:text-white/[0.82] md:text-sm md:tracking-[0.28em]"
          >
            <span className="md:hidden">Press Kit For You</span>
            <span className="hidden md:inline">{siteConfig.name}</span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/[0.68] transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/#contact"
              className="hidden px-3 py-2 text-[11px] font-semibold shadow-none sm:inline-flex md:px-5 md:py-3 md:text-sm"
            >
              {siteConfig.ctas.call}
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
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden md:hidden"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
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
                        duration: 0.24,
                        delay: 0.03 * index,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-lg border border-transparent px-3 py-3 text-sm text-white/[0.78] transition hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
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
                  transition={{ duration: 0.24, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Button href="/#contact" className="mt-4 w-full justify-center">
                    {siteConfig.ctas.call}
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
