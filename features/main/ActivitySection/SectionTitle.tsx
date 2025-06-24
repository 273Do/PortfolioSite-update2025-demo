"use client";

import { ReactFitty } from "react-fitty";
import * as AnimationText from "@/components/TextAnimation";

const SectionTitle = () => {
  return (
    <AnimationText.ScrollBlinking
      start="center bottom"
      className="font-semibold leading-none"
    >
      <ReactFitty>ACTIVITIES</ReactFitty>
    </AnimationText.ScrollBlinking>
  );
};

export default SectionTitle;
