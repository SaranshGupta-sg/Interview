import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Briefcase, Cpu, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "Upload Your Resume",
    description:
      "Upload your latest resume in PDF format, or write a short self-description if you don't have one ready.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Paste Job Description",
    description:
      "Add the job description you're applying for so the AI understands the required skills and expectations.",
    icon: Briefcase,
  },
  {
    step: "03",
    title: "AI Analysis",
    description:
      "The AI compares your profile against the job requirements and runs an in-depth analysis in seconds.",
    icon: Cpu,
  },
  {
    step: "04",
    title: "Receive Your Report",
    description:
      "Get a personalised interview report with match score, interview questions, skill gaps, a prep roadmap, and an ATS-friendly resume.",
    icon: Rocket,
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const timelineRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

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
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.6,
          },
        },
      );

      stepRefs.current.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface py-28"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-accent/8 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/8 blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="mx-auto mb-24 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark">
            Simple Process
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-ink lg:text-5xl">
            How it <span className="text-primary">works</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Four steps between you and a fully personalised interview
            preparation report.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          {/* Track (static, faint) */}
          <div className="absolute left-6 top-0 hidden h-full w-[2px] bg-border md:block" />
          {/* Progress line (animated fill) */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-[2px] bg-primary md:block"
          />

          <div className="space-y-8">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  ref={(el) => (stepRefs.current[i] = el)}
                  className="group relative flex flex-col gap-6 rounded-3xl border border-border bg-bg p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(15,93,90,0.15)] md:ml-20"
                >
                  {/* Timeline node */}
                  <div className="absolute -left-[77px] top-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-surface bg-primary text-sm font-bold text-white shadow-lg shadow-primary/25 md:flex">
                    {item.step}
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-light text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-7 text-ink-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
