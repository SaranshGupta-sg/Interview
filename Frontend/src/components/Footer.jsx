import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto w-[92%] max-w-7xl py-20">

        {/* CTA */}

        <div className="mb-20 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-10 text-center backdrop-blur-xl">

          <h2 className="text-4xl font-black text-white">
            Ready to Crack Your Next Interview?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Generate a personalized interview strategy, identify your skill
            gaps, improve your resume, and prepare smarter with AI.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            Get Started →
          </Link>

        </div>

        {/* Footer Grid */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <img
              src="/logo.png"
              alt="InterviewAI"
              className="h-14"
            />

            <p className="mt-6 leading-8 text-zinc-400">
              AI-powered interview preparation platform that helps developers
              analyze resumes, improve skills, generate interview questions,
              and build personalized preparation roadmaps.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#testimonials"
                  className="transition hover:text-white"
                >
                  Testimonials
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="transition hover:text-white"
                >
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>
                <Link
                  to="/login"
                  className="transition hover:text-white"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="transition hover:text-white"
                >
                  Register
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4 text-zinc-400">

              <p>📧 support@interviewai.com</p>

              <p>🌍 Available Worldwide</p>

              <div className="mt-6 flex gap-4">

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-indigo-600"
                >
                  𝕏
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-indigo-600"
                >
                  in
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl transition hover:bg-indigo-600"
                >
                  💻
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-zinc-500">

          © {new Date().getFullYear()} InterviewAI. All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;