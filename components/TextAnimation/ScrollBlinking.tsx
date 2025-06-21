"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollBlinking = ({
  children,
  className,
  scrub = false,
  start,
  end,
}: {
  children: React.ReactNode;
  className?: string;
  scrub?: boolean;
  start: string;
  end?: string;
}) => {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        repeat: 6,
        yoyo: true,
        ease: "none",
        onComplete: () => {
          gsap.set(ref.current, { opacity: 1 });
        },
        scrollTrigger: {
          trigger: ref.current,
          scrub: scrub,
          start: start,
          end: end,
          markers: true,
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollBlinking;
