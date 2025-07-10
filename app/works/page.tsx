"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientLayout from "@/components/ContentScreenLayout/ClientLayout";
import * as AnimationText from "@/components/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

export default function page() {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".works-page",
      start: "top 40px",
      end: "bottom 40px",
      pin: true,
      scrub: true,
      markers: false,
    });
  }, []);

  return (
    <div className="w-full works-page my-10">
      <ClientLayout className="m-10">
        <div className="flex w-full justify-between">
          <div className="w-8/10">
            <AnimationText.Reveal className="-mb-12 font-semibold leading-none">
              WORKS[n]
            </AnimationText.Reveal>
          </div>
          <AnimationText.ScrollBlinking>
            <p className="relative right-0 z-100 mt-1">Scroll</p>
          </AnimationText.ScrollBlinking>
        </div>
      </ClientLayout>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex h-screen w-full items-end p-10">
        <div className="flex w-full items-end justify-between">
          <div className="z-50 flex max-w-2/5 flex-col justify-between gap-10">
            <p>
              I am someone who enjoys making things as a hobby. I also enjoy
              playing the piano, cycling, and exploring ramen restaurants. I
              like being alone, but I also like creating things with friends. My
              motto is “just give it a try,” and I value taking on new
              challenges.
            </p>
            <div>
              <ul className="flex gap-2">
                <li>tag1</li>
                <li>tag2</li>
              </ul>
              <p className="font-semibold text-6xl">Tool Name Here</p>
            </div>

            {/* <p className="font-semibold text-3xl">1/n</p> */}
          </div>
          <div className="relative z-0 h-[316px] w-[560px] rounded-lg bg-amber-800"></div>
        </div>
      </div>
    </div>
  );
}
