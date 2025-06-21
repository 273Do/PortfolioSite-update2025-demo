"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { ReactFitty } from "react-fitty";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ScrollLeftReveal = ({
  children,
  className,
  start,
  end,
  scrub = true,
  trigger,
}: {
  children: string;
  className?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  trigger?: string | Element | null;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = SplitText.create(ref.current, {
      type: "chars",
      autoSplit: true,
    });

    // ズレをなくすために style を各 span に適用
    split.chars.forEach((char) => {
      char.classList.add("split-char");
    });

    gsap.fromTo(
      ref.current,
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        scrollTrigger: {
          trigger: trigger || ref.current,
          scrub,
          start,
          end,
          markers: true,
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <ReactFitty ref={ref} className={className}>
      {children}
    </ReactFitty>
  );
};

export default ScrollLeftReveal;
