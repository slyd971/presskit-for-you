type CubicBezier = [number, number, number, number];

export const motionTokens = {
  duration: {
    feedback: 0.18,
    fast: 0.32,
    normal: 0.48,
    slow: 0.72,
  },
  distance: {
    subtle: 8,
    standard: 12,
    strong: 16,
  },
  delay: {
    related: 0.07,
    sequence: 0.09,
  },
  easing: {
    enter: [0.16, 1, 0.3, 1] as CubicBezier,
    interaction: [0.22, 1, 0.36, 1] as CubicBezier,
    exit: [0.4, 0, 1, 1] as CubicBezier,
  },
};
