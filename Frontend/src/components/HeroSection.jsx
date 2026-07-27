import { Link } from "react-router";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const trustRef = useRef(null);
  const cardRef = useRef(null);
  const scoreRef = useRef(null);
  const checklistRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
    )
      .fromTo(
        headlineRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 },
        "-=0.3",
      )
      .fromTo(
        paraRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        trustRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4",
      )
      .fromTo(
        cardRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        "-=0.9",
      )
      .fromTo(
        checklistRef.current.children,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.12 },
        "-=0.4",
      );

    const counter = { val: 0 };
    tl.to(
      counter,
      {
        val: 91,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          if (scoreRef.current)
            scoreRef.current.textContent = `${Math.round(counter.val)}%`;
        },
      },
      "-=0.9",
    );

    return () => tl.kill();
  }, []);

  return (
    <section className="relative overflow-hidden bg-bg pt-40 pb-28">
      {/* Background glow */}
      <div className="absolute left-10 top-24 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
      <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-[130px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">
          <span
            ref={badgeRef}
            className="inline-block rounded-full border border-primary/20 bg-primary-light px-5 py-2 text-sm font-medium text-primary-dark"
          >
            AI Powered Interview Preparation
          </span>

          <h1
            ref={headlineRef}
            className="mt-8 font-display text-5xl font-semibold leading-[1.1] text-ink lg:text-6xl"
          >
            <span className="block">Walk in ready for</span>
            <span className="block text-primary">your next interview</span>
          </h1>

          <p
            ref={paraRef}
            className="mx-auto mt-8 max-w-xl text-lg leading-8 text-ink-muted lg:mx-0"
          >
            Upload your resume, paste the job description, and let AI generate
            personalised interview questions, a skill gap analysis, a 7-day prep
            roadmap, and an ATS-friendly resume — in seconds.
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-primary/40"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-semibold text-ink transition-colors hover:border-primary/40 hover:bg-primary-light"
            >
              Sign In
            </Link>
          </div>

          <div
            ref={trustRef}
            className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-muted lg:justify-start"
          >
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> AI Resume Analysis
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Interview Questions
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">✓</span> Match Score
            </span>
          </div>
        </div>

        {/* RIGHT — product preview card */}
        <div ref={cardRef} className="relative hidden lg:block">
          <div className="w-[460px] rounded-3xl border border-border bg-surface p-8 shadow-[0_30px_60px_-20px_rgba(15,93,90,0.2)]">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-ink">
                Interview Report
              </h3>

              <span className="rounded-full bg-primary-light px-3 py-1 text-sm font-medium text-primary-dark">
                Ready
              </span>
            </div>

            <div className="mt-8">
              <div className="mb-6">
                <p className="text-sm text-ink-muted">Match Score</p>
                <h2
                  ref={scoreRef}
                  className="mt-2 font-mono text-6xl font-bold text-primary"
                >
                  0%
                </h2>
              </div>

              <div ref={checklistRef} className="space-y-3">
                {[
                  "Resume Analysis Completed",
                  "15 Technical Questions Generated",
                  "7-Day Preparation Plan Ready",
                  "Skill Gap Analysis Completed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-bg p-4 text-sm text-ink"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    {item}
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
