const features = [
  {
    title: "AI Interview Report",
    description:
      "Get a personalized interview report with match score, technical questions, behavioral questions, and detailed feedback.",
    icon: "🤖",
  },
  {
    title: "Resume Analysis",
    description:
      "Upload your resume and let AI identify strengths, weaknesses, and missing skills for your target job.",
    icon: "📄",
  },
  {
    title: "Skill Gap Detection",
    description:
      "Know exactly which skills you need to improve to maximize your chances of getting selected.",
    icon: "📈",
  },
  {
    title: "7-Day Preparation Plan",
    description:
      "Receive a structured day-wise roadmap with practical tasks to prepare efficiently before interviews.",
    icon: "🗓️",
  },
  {
    title: "ATS Friendly Resume",
    description:
      "Generate a clean, recruiter-friendly resume tailored specifically to the job description.",
    icon: "📑",
  },
  {
    title: "Powered by AI",
    description:
      "Advanced AI understands your resume, job description, and profile to generate realistic interview preparation.",
    icon: "✨",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="relative bg-[#050816] py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Powerful Features
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Everything You Need To
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Ace Your Interview
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            One platform that analyzes your resume, compares it with the job
            description, prepares interview questions, identifies skill gaps,
            and builds your complete preparation roadmap.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-indigo-500/40 hover:bg-white/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-3xl shadow-lg shadow-indigo-600/20">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-8 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;