import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// « de » devant un nom, élidé en « d' » devant une voyelle ou un h muet : « d'Arthur Chaps », « de DJ FLO ».
export function withDe(name: string) {
  return /^[aeiouàâäéèêëîïôöùûüœæh]/i.test(name) ? `d'${name}` : `de ${name}`;
}
