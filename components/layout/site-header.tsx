"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion";

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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "w-full border-b backdrop-blur-xl transition-all duration-300",
          isCompact
            ? "border-black/[0.08] bg-white/[0.96] shadow-[0_12px_36px_rgba(13,17,24,0.1)]"
            : "border-white/[0.08] bg-[#0b0e14]/[0.9] shadow-[0_12px_36px_rgba(0,0,0,0.18)]",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-8xl items-center justify-between gap-4 px-4 transition-all duration-300 md:px-8",
            isCompact ? "py-3" : "py-4",
          )}
        >
          <Link
            href="/"
            className={cn(
              "block h-10 w-44 shrink-0 transition md:h-12 md:w-60",
              isCompact ? "opacity-100 hover:opacity-80" : "opacity-95 hover:opacity-80",
            )}
            aria-label={siteConfig.name}
          >
            <img
              src="/logo/logo-presskitforyou-cropped.png"
              alt=""
              className={cn("h-full w-full object-contain object-left transition duration-300", isCompact && "brightness-0")}
            />
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] font-semibold transition",
                  isCompact ? "text-[#10141d]/[0.78] hover:text-[#10141d]" : "text-white/[0.82] hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/#contact"
              variant={isCompact ? "primaryOnLight" : "primary"}
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
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg transition md:hidden",
                isCompact ? "text-[#10141d] hover:bg-[#10141d]/[0.06]" : "text-white hover:bg-white/[0.08]",
              )}
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
              className="overflow-hidden md:hidden"
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
                        className={cn(
                          "block rounded-lg border border-transparent px-3 py-3 text-[15px] font-semibold transition",
                          isCompact
                            ? "text-[#10141d]/[0.82] hover:border-[#10141d]/10 hover:bg-[#10141d]/[0.04] hover:text-[#10141d]"
                            : "text-white/[0.86] hover:border-white/10 hover:bg-white/[0.04] hover:text-white",
                        )}
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
                  <Button href="/#contact" variant={isCompact ? "primaryOnLight" : "primary"} className="mt-4 w-full justify-center">
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
