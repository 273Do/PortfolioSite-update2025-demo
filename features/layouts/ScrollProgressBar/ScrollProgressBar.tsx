"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const pct = self.progress * 100;
        const bar = progressBarRef.current;
        if (bar) {
          bar.style.height = `${pct}%`;
        }
      },
    });
  }, []);
  return (
    <div className="fixed top-9/20 left-4 h-18 w-1 rounded-2xl bg-muted mix-blend-difference">
      <div
        ref={progressBarRef}
        className="h-full rounded-2xl bg-foreground"
        style={{ height: "0%" }}
      />
    </div>
  );
};

export default ScrollProgressBar;
