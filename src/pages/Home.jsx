import TypingArena from "../features/typingArena/TypingArena";
import HomeHeader from "@/components/pages/HomeHeader";
import HomeBestStats from "@/components/pages/HomeBestStats";
import PageScaffold from "@/components/pages/PageScaffold";

function Home() {
  return (
    <PageScaffold
      backgroundClassName="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]"
      containerClassName="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="flex flex-col gap-12">
        <HomeHeader />
        <HomeBestStats />
      </div>

      <main className="mt-12 flex flex-1 items-center justify-center">
        <TypingArena />
      </main>
    </PageScaffold>
  );
}

export default Home;
