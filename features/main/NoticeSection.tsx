import * as AnimationText from "@/components/TextAnimation";

const NoticeSection = async () => {
  return (
    <div className="flex w-full justify-between border">
      <div className="w-1/5">
        <AnimationText.Dynamic className="-mt-3 font-semibold leading-none">
          `25
        </AnimationText.Dynamic>
      </div>
      <div className="flex w-1/2 flex-col gap-6">
        <div>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
          <ul className="flex items-center justify-between">
            <li>Notice contents here</li>
            <li>yyyy-mm-dd</li>
          </ul>
        </div>
        <p>
          I am someone who enjoys making things as a hobby. I also enjoy playing
          the piano, cycling, and exploring ramen restaurants. I like being
          alone, but I also like creating things with friends. My motto is “just
          give it a try,” and I value taking on new challenges.
        </p>
      </div>
    </div>
  );
};

export default NoticeSection;
