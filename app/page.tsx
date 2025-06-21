import * as Main from "@/features/main";

export default async function Home() {
  return (
    <>
      <Main.HeroSection />
      <div className="h-10" />
      <Main.NoticeSection />
      <div className="h-10" />
      <Main.CreativeSection />
      <div className="h-10" />
      {/* テスト用 */}
      <Main.HeroSection />
    </>
  );
}
