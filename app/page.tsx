import * as Main from "@/features/main";

export default async function Home() {
  return (
    <div className="pointer-events-none">
      <Main.HeroSection />
      <Main.NoticeSection />
      <Main.CreativeSection />
      <Main.WorksSection />
      <Main.ActivitySection />
    </div>
  );
}
