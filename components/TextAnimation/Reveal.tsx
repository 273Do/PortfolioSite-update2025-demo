"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { ReactFitty } from "react-fitty";

gsap.registerPlugin(SplitText, ScrambleTextPlugin);

const Reveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  useGSAP(() => {
    const split = SplitText.create(ref.current, {
      type: "chars",
      autoSplit: true,
      mask: "chars",
    });

    gsap.set(ref.current, { opacity: 1 });

    gsap.from(split.chars, {
      duration: 0.5,
      yPercent: 100,
      stagger: 0.07,
      ease: "expo.out",
    });
  }, []);
  return (
    <ReactFitty ref={ref} className={`${className} opacity-0`}>
      {children}
    </ReactFitty>
  );
};

export default Reveal;
