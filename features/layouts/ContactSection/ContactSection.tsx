import Link from "next/link";
import AsyncLayout from "@/components/ContentScreenLayout/AsyncLayout";
import * as AnimationText from "@/components/TextAnimation";

const ContactSection = async () => {
  const thisYear = new Date().getFullYear();

  const X_URL = process.env.X_URL;
  // const DISCORD_ID = process.env.DISCORD_ID;
  const YOUTUBE_URL = process.env.YOUTUBE_URL;
  const GITHUB_URL = process.env.GITHUB_URL;
  const QIITA_URL = process.env.QIITA_URL;
  const MAIL_ADDRESS = process.env.MAIL_ADDRESS;

  return (
    <div className="w-full text-secondary">
      <AsyncLayout className="h-screen w-full bg-foreground p-10">
        <div className="flex w-full flex-col items-end">
          <div className="w-4/5">
            <AnimationText.Dynamic className="-mt-12 font-semibold leading-tight">
              CONTACT
            </AnimationText.Dynamic>
          </div>
          <div className="w-3/5">
            <AnimationText.Dynamic className="-mt-12 font-semibold leading-tight">
              <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
            </AnimationText.Dynamic>
          </div>
          <div className="mt-10 flex w-full items-start justify-between">
            <ul className="relative z-100">
              <li>Home</li>
              <li>Works</li>
              <li>FAQ</li>
            </ul>
            <div className="flex flex-col gap-6 text-end">
              <ul className="relative z-100">
                <li>
                  {X_URL && (
                    <Link
                      href={X_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter / X
                    </Link>
                  )}
                </li>
                <li>Discord</li>
                <li>
                  {YOUTUBE_URL && (
                    <Link
                      href={YOUTUBE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      YouTube
                    </Link>
                  )}
                </li>
              </ul>
              <ul className="relative z-100">
                <li>
                  {GITHUB_URL && (
                    <Link
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  )}
                </li>
                <li>
                  {QIITA_URL && (
                    <Link
                      href={QIITA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Qiita
                    </Link>
                  )}
                </li>
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
