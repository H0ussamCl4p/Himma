import React from "react";
import { Composition } from "remotion";
import { HimmaBrand } from "./HimmaBrand";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HimmaBrand"
      component={HimmaBrand}
      durationInFrames={660}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
