import * as Main from "@/features/main";

export default async function Home() {
  return (
    <>
      <Main.HeroSection />
      <div className="h-10" />
      <Main.NoticeSection />
    </>
  );
}
