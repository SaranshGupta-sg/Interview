import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Sparkles,
  FileText,
  TrendingUp,
  CalendarDays,
  FileCheck2,
  Wand2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "AI Interview Report",
    description:
      "Get a personalised interview report with match score, technical questions, behavioural questions, and detailed feedback.",
    icon: Sparkles,
  },
  {
    title: "Resume Analysis",
    description:
      "Upload your resume and let AI identify strengths, weaknesses, and missing skills for your target job.",
    icon: FileText,
  },
  {
    title: "Skill Gap Detection",
    description:
      "Know exactly which skills you need to improve to maximise your chances of getting selected.",
    icon: TrendingUp,
  },
  {
    title: "7-Day Preparation Plan",
    description:
      "Receive a structured day-wise roadmap with practical tasks to prepare efficiently before interviews.",
    icon: CalendarDays,
  },
  {
    title: "ATS-Friendly Resume",
    description:
      "Generate a clean, recruiter-friendly resume tailored specifically to the job description.",
    icon: FileCheck2,
  },
  {
    title: "Powered by AI",
    description:
      "Advanced AI reads your resume, job description, and profile to generate realistic interview preparation.",
    icon: Wand2,
  },
];

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        gridRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative bg-bg py-28">
      {/* Background glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark">
            What You Get
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
            Everything you need to
            <span className="text-primary"> walk in prepared</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-ink-muted">
            One platform that reads your resume, compares it against the job
            description, writes your interview questions, finds your skill gaps,
            and builds your full prep roadmap.
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(15,93,90,0.18)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>

                <h3 className="mb-3 font-display text-xl font-semibold text-ink">
                  {feature.title}
                </h3>

                <p className="leading-7 text-ink-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
