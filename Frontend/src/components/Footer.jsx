import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary-dark">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
        {/* CTA */}
        <div className="mb-20 rounded-3xl border border-white/10 bg-white/[0.06] p-10 text-center backdrop-blur-xl">
          <h2 className="font-display text-4xl font-semibold text-white">
            Ready for your next interview?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Generate a personalised interview strategy, identify your skill
            gaps, improve your resume, and prepare smarter with AI.
          </p>

          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-primary-dark transition-all hover:scale-105 hover:bg-accent/90"
          >
            Get Started <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl font-semibold text-white">
              Interview<span className="text-accent">AI</span>
            </span>

            <p className="mt-6 leading-7 text-white/60">
              AI-powered interview preparation that helps developers analyse
              resumes, close skill gaps, generate interview questions, and build
              personalised preparation roadmaps.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/40">
              Quick Links
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <a
                  href="#features"
                  className="transition-colors hover:text-accent"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="transition-colors hover:text-accent"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="transition-colors hover:text-accent"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-accent">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/40">
              Resources
            </h3>

            <ul className="space-y-4 text-white/70">
              <li>
                <Link
                  to="/login"
                  className="transition-colors hover:text-accent"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="transition-colors hover:text-accent"
                >
                  Register
                </Link>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-accent">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/40">
              Connect
            </h3>

            <div className="space-y-3 text-white/70">
              <p>support@interviewai.com</p>
              <p>Available worldwide</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-primary-dark"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-primary-dark"
              >
                in
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-primary-dark"
              >
                gh
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          © {new Date().getFullYear()} InterviewAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
