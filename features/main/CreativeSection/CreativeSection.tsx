"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientLayout from "@/components/ContentScreenLayout/ClientLayout";
import * as AnimationText from "@/components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const CreativeSection = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".creative-section",
      start: "top 40px",
      end: "bottom 40px",
      pin: true,
      scrub: true,
      markers: false,
    });
  }, []);

  return (
    <ClientLayout className="creative-section">
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <AnimationText.ScrollBlinking start="top center">
            <p>Hi, I am 273Do(Tuna-sand). </p>
          </AnimationText.ScrollBlinking>
          <AnimationText.ScrollBlinking start="top 40%">
            <p>Nice to meet you.</p>
          </AnimationText.ScrollBlinking>
        </div>
        <div className="relative h-fit w-4/5">
          <AnimationText.ScrollReveal
            start="top bottom"
            end="bottom 20%"
            className="pointer-events-none absolute top-0 left-0 font-semibold text-stroke text-transparent leading-none"
          >
            CREATIVE
          </AnimationText.ScrollReveal>
          <AnimationText.ScrollLeftReveal
            start="bottom 85%"
            end="bottom center"
            className="relative font-semibold text-foreground leading-none"
            trigger=".creative-section"
          >
            CREATIVE
          </AnimationText.ScrollLeftReveal>
        </div>
        <AnimationText.ScrollBlinking start="top 65%">
          <ul className="mt-4">
            <li>Web Development</li>
            <li>Fullstack</li>
            <li>UI / UX</li>
            <li>Design</li>
          </ul>
        </AnimationText.ScrollBlinking>
      </div>
      <div className="w-full">
        <AnimationText.ScrollBlinking start="bottom 85%">
          <ul className="text-end">
            <li>ML</li>
            <li>Cloud Platform</li>
            <li>Sensor Analysis</li>
          </ul>
        </AnimationText.ScrollBlinking>
        <div className="flex w-full items-end justify-between gap-4">
          <ul className="w-1/2">
            <AnimationText.ScrollScramble
              text="I develop web apps and tools as a hobby."
              start="top 95%"
            />
            <AnimationText.ScrollScramble
              text="I am based in the Kansai region and I am involved in creative
              activities."
              start="top 95%"
            />
          </ul>
          <div className="relative h-fit w-7/12">
            <AnimationText.ScrollReveal
              start="top bottom"
              end="bottom 70%"
              className="-mb-12 absolute top-0 left-0 font-semibold text-stroke text-transparent leading-none"
            >
              WORK
            </AnimationText.ScrollReveal>
            <AnimationText.ScrollLeftReveal
              start="bottom center"
              end="bottom top"
              className="-mb-12 relative font-semibold leading-none"
              trigger=".creative-section"
            >
              WORK
            </AnimationText.ScrollLeftReveal>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default CreativeSection;
