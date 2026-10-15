import Image from "next/image";

import { ScrollingPreview } from "@/components/marketing/scrolling-preview";
import type { PreviewAssets } from "@/lib/preview-assets";
import { cn } from "@/lib/utils";

type ExampleMockupProps = {
  title: string;
  desktopImage?: string;
  mobileImage?: string;
  imagePosition?: string;
  accent?: string;
  // Classes de hauteur du cadre (varient selon la grille qui l'utilise).
  boxClassName: string;
  desktopSizes: string;
  mobileSizes: string;
  preview?: PreviewAssets;
};

// Mockup ordinateur + téléphone des cartes d'exemples (accueil, /exemples, pages métiers).
export function ExampleMockup({
  title,
  desktopImage,
  mobileImage,
  imagePosition,
  accent,
  boxClassName,
  desktopSizes,
  mobileSizes,
  preview,
}: ExampleMockupProps) {
  return (
    <div className={cn("relative overflow-visible", boxClassName)}>
      <div className="absolute left-1/2 top-4 z-10 w-[86%] -translate-x-1/2 rotate-[-1.4deg] transition duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.4deg]">
        <div className="mockup-surface relative overflow-hidden rounded-t-[0.9rem] border border-white/[0.14] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.08)]">
          <div className="relative aspect-[91/60] overflow-hidden rounded-t-[0.62rem] bg-black">
            {desktopImage ? (
              <Image
                src={desktopImage}
                alt={`${title} en version desktop`}
                fill
                sizes={desktopSizes}
                className="object-contain object-center"
                style={imagePosition ? { objectPosition: imagePosition } : undefined}
              />
            ) : (
              <div
                className="h-full w-full"
                style={{ background: `linear-gradient(135deg, ${accent ?? "#ffffff"}33, rgba(255,255,255,0.05))` }}
              />
            )}
            <ScrollingPreview src={preview?.desktop} alt={`${title}, page complète en version desktop`} width={1280} />
          </div>
        </div>
        <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
        {mobileImage ? (
          <div className="absolute -bottom-5 -right-8 z-20 w-[30%] min-w-[4.35rem] rotate-[5deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] md:-bottom-6 md:-right-10 md:w-[31%] md:min-w-[5rem]">
            <div className="mockup-surface relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
              <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                <Image
                  src={mobileImage}
                  alt={`${title} en version mobile`}
                  fill
                  sizes={mobileSizes}
                  className="object-cover object-top"
                />
                <ScrollingPreview src={preview?.mobile} alt={`${title}, page complète en version mobile`} width={390} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
