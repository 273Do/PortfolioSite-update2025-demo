"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import SplitText from "gsap/SplitText";
import { useState } from "react";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const Counter = (input: number) => {
  const [num, setNum] = useState(input);
  const [prevNum, setPrevNum] = useState<number | null>(null);
  useGSAP(() => {
    SplitText.create(".num", {
      type: "words",
      autoSplit: true,
      mask: "words",
      onSplit: (self) => {
        gsap.from(self.words, {
          duration: 2,
          yPercent: 80,
          stagger: 0.1,
          ease: "expo.out",
        });
      },
    });
    SplitText.create(".prev-num", {
      type: "words",
      autoSplit: true,
      mask: "words",
      onSplit: (self) => {
        gsap.to(self.words, {
          duration: 2,
          yPercent: -80,
          stagger: 0.1,
          ease: "expo.out",
        });
      },
    });
  }, [num, prevNum]);
};

export default Counter;
