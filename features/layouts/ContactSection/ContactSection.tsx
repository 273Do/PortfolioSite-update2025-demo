import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const ContactSection = async () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className="w-full text-secondary ">
      <AsyncLayout className="h-screen w-full bg-foreground p-10">
        <div className="flex w-full flex-col items-end">
          <div className="w-4/5">
            <AnimationText.Dynamic className="-mt-12 font-semibold leading-tight">
              CONTACT
            </AnimationText.Dynamic>
          </div>
          <div className="w-3/5">
            <AnimationText.Dynamic className="-mt-12 font-semibold leading-tight">
              <a href="mailto:hello.273dodev@gmail.com">
                hello.273dodev@gmail.com
              </a>
            </AnimationText.Dynamic>
          </div>
          <div className="mt-10 flex w-full items-start justify-between">
            <ul>
              <li>Home</li>
              <li>Works</li>
              <li>FAQ</li>
            </ul>
            <div className="flex flex-col gap-6 text-end">
              <ul>
                <li>Twitter / X</li>
                <li>Discord</li>
                <li>YouTube</li>
              </ul>
              <ul>
                <li>GitHub</li>
                <li>Qiita</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <p className="font-medium">@2023-{thisYear} 273DoWorks</p>
        </div>
      </AsyncLayout>
    </div>
  );
};

export default ContactSection;
