import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const ContactSection = async () => {
  return (
    <div className="w-full">
      <AsyncLayout className="h-screen w-full bg-foreground p-10">
        <div className="w-4/5">
          <AnimationText.Dynamic className="-mt-12 font-semibold text-secondary leading-tight">
            CONTACT
          </AnimationText.Dynamic>
        </div>
      </AsyncLayout>
    </div>
  );
};

export default ContactSection;
