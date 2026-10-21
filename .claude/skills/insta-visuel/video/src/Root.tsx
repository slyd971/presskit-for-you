import { Composition } from "remotion";

import { FPS, SIZE } from "./da";
import { TestCouverture } from "./TestCouverture";

// Une composition par format de la DA (§9, §12). Les Reels clients s'ajoutent ici.
export function Root() {
  return (
    <Composition
      id="TestCouverture"
      component={TestCouverture}
      durationInFrames={FPS * 2}
      fps={FPS}
      width={SIZE.width}
      height={SIZE.height}
      defaultProps={{ title: "DJ SLY'D", subtitle: "DÉCOUVRE SON PRESSKIT." }}
    />
  );
}
