const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    company: "Placed at Startup",
    image: "👨🏻‍💻",
    review:
      "The AI-generated interview questions were surprisingly relevant to the actual interview. The preparation roadmap helped me focus on exactly what mattered.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    company: "Product Company",
    image: "👩🏻‍💻",
    review:
      "I loved the resume analysis feature. It highlighted the missing skills in my profile and even generated an ATS-friendly resume that looked much more professional.",
  },
  {
    name: "Aman Gupta",
    role: "MERN Stack Developer",
    company: "Software Engineer",
    image: "👨🏽‍💼",
    review:
      "Instead of practicing random interview questions, I received questions tailored to the exact job description. That saved me a lot of preparation time.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#050816] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Loved by
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Developers
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Developers preparing for interviews use InterviewAI to identify
            skill gaps, improve resumes, and prepare smarter.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-indigo-500/40 hover:bg-white/10"
            >
              {/* Stars */}

              <div className="mb-6 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              {/* Review */}

              <p className="leading-8 text-zinc-300">
                "{item.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-2xl">
                  {item.image}
                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-zinc-400">
                    {item.role}
                  </p>

                  <span className="text-xs text-indigo-300">
                    {item.company}
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-8 text-center md:grid-cols-4">

          <div>
            <h3 className="text-5xl font-black text-white">10K+</h3>
            <p className="mt-2 text-zinc-400">Interview Reports Generated</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-white">95%</h3>
            <p className="mt-2 text-zinc-400">User Satisfaction</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-white">50+</h3>
            <p className="mt-2 text-zinc-400">Supported Job Roles</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-white">24/7</h3>
            <p className="mt-2 text-zinc-400">AI Availability</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;