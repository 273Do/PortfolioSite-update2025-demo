import * as AnimationText from "@/components/TextAnimation";
import ImageList from "./ImagesArea";
import SectionTitle from "./SectionTitle";

const ActivitySection = async () => {
  return (
    <div className="">
      <div className="sticky top-0 z-20 w-full bg-background">
        <div className="h-30"></div>
        <SectionTitle />
      </div>

      <div className="mt-4 mb-10 flex w-full items-end justify-between">
        <ul>
          <AnimationText.ScrollCustomReveal
            start="bottom 85%"
            end="bottom center"
            clipPath={["inset(0 100% 0 0)", "inset(0 0% 0 0)"]}
          >
            <li>Motion Graphics</li>
            <li>3DCG</li>
            <li>PV / MV</li>
          </AnimationText.ScrollCustomReveal>
        </ul>
        <ul className="text-end">
          <AnimationText.ScrollCustomReveal
            start="bottom 85%"
            end="bottom center"
            clipPath={["inset(0 0 0 100%)", "inset(0 0 0 0%)"]}
          >
            <li>Stage Piano</li>
            <li>MTB</li>
            <li>Ramen</li>
            <li>Gadget</li>
          </AnimationText.ScrollCustomReveal>
        </ul>
      </div>
      <ImageList />
      <div className="sticky bottom-0 z-10 w-full bg-background">
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default ActivitySection;
