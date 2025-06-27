import * as Main from "@/features/main";

export default async function Home() {
  return (
    <>
      <Main.HeroSection />
      <Main.NoticeSection />
      <Main.CreativeSection />
      <Main.WorksSection />
      <Main.ActivitySection />
    </>
  );
}
