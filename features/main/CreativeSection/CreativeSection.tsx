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
    <ClientLayout className="creative-section bg-slate-700">
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
            start="bottom bottom"
            end="bottom center"
            trigger=".creative-section"
            className="relative font-semibold text-foreground leading-none"
          >
            CREATIVE
          </AnimationText.ScrollLeftReveal>
        </div>
        <ul className="mt-4">
          <li>Web Development</li>
          <li>Fullstack</li>
          <li>Design</li>
          <li>UI / UX</li>
        </ul>
      </div>
      <div className="w-full">
        <ul className="text-end">
          <li>Sensor Analysis</li>
          <li>Cloud Platform</li>
          <li>ML</li>
        </ul>
        <div className="flex w-full items-end justify-between">
          <ul>
            <li>I develop web apps and tools as a hobby.</li>
            <li>
              I am based in the Kansai region and am involved in creative
              activities.
            </li>
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
              trigger=".creative-section"
              className="-mb-12 relative font-semibold leading-none"
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
