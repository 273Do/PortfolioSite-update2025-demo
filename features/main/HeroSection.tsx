import ContentScreenLayout from "@/components/ContentScreenLayout";
import * as AnimationText from "@/components/TextAnimation";

const HeroSection = async () => {
  return (
    <ContentScreenLayout>
      <p className="right-0 mt-1 text-xl">Scroll</p>
      <AnimationText.Reveal className="-mb-12 font-semibold leading-none">
        PORTFOLIO
      </AnimationText.Reveal>
    </ContentScreenLayout>
  );
};

export default HeroSection;
