"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import SplitText from "gsap/SplitText";
import { ReactFitty } from "react-fitty";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const Reveal = ({
  children,
  className,
}: { children: React.ReactNode; className?: string }) => {
  useGSAP(() => {
    const split = SplitText.create(".reveal", {
      type: "chars",
      autoSplit: true,
      mask: "chars",
    });

    gsap.set(".reveal", { opacity: 1 });

    gsap.from(split.chars, {
      duration: 0.5,
      yPercent: 100,
      stagger: 0.07,
      ease: "expo.out",
    });
  }, []);
  return (
    <ReactFitty className={`${className} reveal opacity-0`}>
      {children}
    </ReactFitty>
  );
};

export default Reveal;
