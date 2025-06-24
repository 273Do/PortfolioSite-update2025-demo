import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import SectionTitle from "./SectionTitle";

const ActivitySection = () => {
  return (
    <AsyncLayout className="bg-slate-800">
      <div className="w-full">
        <SectionTitle />
        <div className="mt-4 flex w-full items-end justify-between">
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
