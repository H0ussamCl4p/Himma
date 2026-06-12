import React from "react";
import { Composition } from "remotion";
import { ForgeBrand } from "./ForgeBrand";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="ForgeBrand"
      component={ForgeBrand}
      durationInFrames={660}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
