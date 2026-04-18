import React from "react";
import PageScaffold from "@/components/pages/PageScaffold";
import ProfileContent from "@/components/pages/ProfileContent";

export default function Profile() {
  return (
    <PageScaffold
      backgroundClassName="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,1))]"
      containerClassName="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
        <ProfileContent />
      </div>
    </PageScaffold>
  );
}
