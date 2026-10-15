// Les ressources de confort (captures pleine page) ne sont demandées qu'après le premier geste
// de l'utilisateur : le chargement initial, le LCP et le poids de la page restent inchangés.
// Pas d'écouteur `scroll` : un défilement tactile ou à la molette passe par ces événements.
const EVENTS = ["pointerdown", "pointermove", "touchstart", "wheel", "keydown"] as const;

let interacted = false;
let attached = false;
const callbacks = new Set<() => void>();

function fire() {
  interacted = true;

  for (const event of EVENTS) {
    window.removeEventListener(event, fire);
  }

  callbacks.forEach((callback) => callback());
  callbacks.clear();
}

export function onFirstInteraction(callback: () => void) {
  if (interacted) {
    callback();
    return () => {};
  }

  callbacks.add(callback);

  if (!attached) {
    attached = true;

    for (const event of EVENTS) {
      window.addEventListener(event, fire, { passive: true });
    }
  }

  return () => {
    callbacks.delete(callback);
  };
}
