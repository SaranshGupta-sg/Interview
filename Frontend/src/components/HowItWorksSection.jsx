const steps = [
  {
    step: "01",
    title: "Upload Your Resume",
    description:
      "Upload your latest resume in PDF format or simply write a short self-description if you don't have one ready.",
    icon: "📄",
  },
  {
    step: "02",
    title: "Paste Job Description",
    description:
      "Add the job description you're applying for so the AI can understand the required skills and expectations.",
    icon: "💼",
  },
  {
    step: "03",
    title: "AI Analysis",
    description:
      "Our AI compares your profile with the job requirements and performs an in-depth analysis within seconds.",
    icon: "🤖",
  },
  {
    step: "04",
    title: "Receive Your Report",
    description:
      "Get a personalized interview report with match score, interview questions, skill gaps, preparation roadmap, and an ATS-friendly resume.",
    icon: "🚀",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#070b1a] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Simple Process
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            How It
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Works
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Preparing for interviews has never been easier. Just follow these
            four simple steps and let AI do the heavy lifting.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mx-auto max-w-5xl">

          {/* Center Line */}

          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-500 md:block" />

          <div className="space-y-12">

            {steps.map((item) => (
              <div
                key={item.step}
                className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:border-indigo-500/40 hover:bg-white/10 md:ml-20"
              >
                {/* Timeline Circle */}

                <div className="absolute -left-[77px] top-10 hidden md:flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#070b1a] bg-gradient-to-br from-indigo-600 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/30">
                  {item.step}
                </div>

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-3xl">
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-8 text-zinc-400">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;