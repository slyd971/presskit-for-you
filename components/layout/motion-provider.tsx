"use client";

import { MotionConfig } from "framer-motion";

// Respecte prefers-reduced-motion pour toutes les animations framer-motion :
// sans effet pour les autres visiteurs ; avec le réglage actif, plus de déplacement ni de rotation.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
