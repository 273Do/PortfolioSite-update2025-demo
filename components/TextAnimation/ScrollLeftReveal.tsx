"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ReactFitty } from "react-fitty";

gsap.registerPlugin(ScrollTrigger);

const ScrollLeftReveal = ({
  children,
  className,
  start,
  end,
  scrub = false,
}: {
  children: string;
  className?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        clipPath: "inset(0 100% 0 0)", // 右から隠す
      },
      {
        clipPath: "inset(0 0% 0 0)", // 全表示
        // duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start,
          end,
          scrub,
          toggleActions: "play none none reverse",
          markers: false,
        },
      },
    );
  }, []);

  return (
    <ReactFitty ref={ref} className={className}>
      {children}
    </ReactFitty>
  );
};

export default ScrollLeftReveal;
