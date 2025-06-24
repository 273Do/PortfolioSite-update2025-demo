import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const ActivitySection = async () => {
  return (
    <AsyncLayout className="bg-slate-800a">
      <div className="w-full">
        <AnimationText.ScrollReveal
          start="bottom bottom"
          end="45% top"
          className="font-semibold leading-none"
        >
          ACTIVITIES
        </AnimationText.ScrollReveal>
        <div className="flex w-full items-end justify-between mt-4">
          <ul>
            <li>Motion Graphics</li>
            <li>3DCG</li>
            <li>PV / MV</li>
          </ul>
          <ul className="text-end">
            <li>Stage Piano</li>
            <li>MTB</li>
            <li>Ramen</li>
            <li>Gadget</li>
          </ul>
        </div>
      </div>
    </AsyncLayout>
  );
};

export default ActivitySection;
