"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { ReactFitty } from "react-fitty";

gsap.registerPlugin(SplitText, ScrollTrigger);

const ScrollReveal = ({
  children,
  className,
  scrub = true,
  start,
  end,
  trigger,
}: {
  children: React.ReactNode;
  className?: string;
  scrub?: boolean;
  start: string;
  end?: string;
  trigger?: string | Element | null;
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
      scrollTrigger: {
        trigger: trigger || ref.current,
        scrub,
        start,
        end,
        markers: true,
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      split.revert();
    };
  }, []);
  return (
    <ReactFitty ref={ref} className={`${className} opacity-0`}>
      {children}
    </ReactFitty>
  );
};

export default ScrollReveal;
