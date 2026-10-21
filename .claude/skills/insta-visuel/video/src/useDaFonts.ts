import { useEffect, useState } from "react";
import { cancelRender, continueRender, delayRender } from "remotion";

// Bloque le rendu jusqu'au chargement d'Anton et Manrope ; l'annule si l'une manque,
// pour ne jamais exporter une police de remplacement (DA §4.1).
export function useDaFonts() {
  const [handle] = useState(() => delayRender("Chargement des polices de la DA"));

  useEffect(() => {
    Promise.all(["Anton", "Manrope"].map((family) => document.fonts.load(`64px "${family}"`)))
      .then(() => {
        const missing = ["Anton", "Manrope"].filter(
          (family) => ![...document.fonts].some((face) => face.family.replace(/"/g, "") === family && face.status === "loaded"),
        );
        if (missing.length) {
          cancelRender(new Error(`Police non chargée : ${missing.join(", ")}`));
        } else {
          continueRender(handle);
        }
      })
      .catch((error) => cancelRender(error));
  }, [handle]);
}
