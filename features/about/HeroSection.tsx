import ContentScreenLayout from "@/components/ContentScreenLayout";
import DynamicSizeText from "@/components/DynamicSizeText";

const HeroSection = async () => {
  return (
    <ContentScreenLayout>
      <p className="right-0 mt-1 text-xl">Scroll</p>
      <DynamicSizeText className="font-semibold leading-0">
        PORTFOLIO
      </DynamicSizeText>
    </ContentScreenLayout>
  );
};

export default HeroSection;
