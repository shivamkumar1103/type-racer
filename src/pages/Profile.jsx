import { Link } from "react-router";

function Profile() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.12),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-8 sm:px-6 lg:px-8">
        <section className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200/90">
            Profile
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Player profile coming soon
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            This page now matches the rest of the app visually and is ready for
            session history, best scores, and personal typing stats.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-5">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Best WPM
              </div>
              <div className="mt-2 text-3xl font-semibold text-slate-50">
                --
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-5">
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Best Accuracy
              </div>
              <div className="mt-2 text-3xl font-semibold text-slate-50">
                --
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-amber-300/20 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-300/20 transition hover:-translate-y-0.5 hover:bg-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Back to typing
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Profile;
