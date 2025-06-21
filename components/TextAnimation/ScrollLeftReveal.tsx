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
    gsap.fromTo(
      ref.current,
      {
        clipPath: "inset(0 100% 0 0)", // 右から隠す
      },
      {
        clipPath: "inset(0 0% 0 0)", // 全表示
        scrollTrigger: {
          trigger: trigger || ref.current,
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
