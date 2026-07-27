import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-36 pb-24">
      {/* Background Blur */}

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[80vh] w-[92%] max-w-7xl items-center justify-between gap-16">
        {/* LEFT */}

        <div className="max-w-2xl">
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">
            🚀 AI Powered Interview Preparation
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">
            Crack Your Next
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Interview
            </span>
            <br />
            with AI
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Upload your resume, paste the job description, and let AI generate
            personalized interview questions, skill gap analysis, preparation
            roadmap, and an ATS-friendly resume in seconds.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              to="/register"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="rounded-full border border-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/5"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-zinc-400">
            <span>✓ AI Resume Analysis</span>

            <span>✓ Interview Questions</span>

            <span>✓ Match Score</span>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative hidden lg:block">
          <div className="w-[470px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Interview Report
              </h3>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                Ready
              </span>
            </div>

            <div className="mt-8">
              <div className="mb-6">
                <p className="text-sm text-zinc-400">Match Score</p>

                <h2 className="mt-2 text-6xl font-black text-green-400">91%</h2>
              </div>

              <div className="space-y-4">
                {[
                  "Resume Analysis Completed",
                  "15 Technical Questions Generated",
                  "7-Day Preparation Plan Ready",
                  "Skill Gap Analysis Completed",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-black/30 p-4 text-white"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
