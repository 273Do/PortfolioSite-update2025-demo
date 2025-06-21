import ContentScreenLayout from "@/components/ContentScreenLayout";
import * as AnimationText from "@/components/TextAnimation";

const CreativeSection = async () => {
  return (
    <ContentScreenLayout>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <AnimationText.ScrollBlinking start="top center">
            <p>Hi, I am 273Do(Tuna-sand). </p>
          </AnimationText.ScrollBlinking>
          <AnimationText.ScrollBlinking start="top 40%">
            <p>Nice to meet you.</p>
          </AnimationText.ScrollBlinking>
        </div>
        <div className="w-4/5">
          <AnimationText.ScrollReveal
            scrub={true}
            start="top bottom"
            end="bottom 20%"
            className="-mb-12 font-semibold text-stroke text-transparent leading-none"
          >
            CREATIVE
          </AnimationText.ScrollReveal>
          <AnimationText.ScrollReveal
            scrub={true}
            start="top bottom"
            end="bottom 20%"
            className="-mb-12 font-semibold leading-none"
          >
            CREATIVE
          </AnimationText.ScrollReveal>
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
          <div className="w-7/12">
            <AnimationText.ScrollReveal
              scrub={true}
              start="top bottom"
              end="bottom 90%"
              className="-mb-12 font-semibold text-stroke text-transparent leading-none"
            >
              WORK
            </AnimationText.ScrollReveal>
          </div>
        </div>
      </div>
    </ContentScreenLayout>
  );
};

export default CreativeSection;
