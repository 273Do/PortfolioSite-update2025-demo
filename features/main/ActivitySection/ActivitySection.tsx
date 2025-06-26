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
      <ImageList />
      <div className="sticky bottom-0 z-10 w-full bg-background">
        <div className="h-10"></div>
      </div>
    </div>
  );
};

export default ActivitySection;
