import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Backend Developer",
    company: "Placed at a Startup",
    review:
      "The AI-generated interview questions were surprisingly relevant to the actual interview. The preparation roadmap helped me focus on exactly what mattered.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    company: "Product Company",
    review:
      "I loved the resume analysis feature. It highlighted the missing skills in my profile and generated an ATS-friendly resume that looked far more professional.",
  },
  {
    name: "Aman Gupta",
    role: "MERN Stack Developer",
    company: "Software Engineer",
    review:
      "Instead of practising random interview questions, I received questions tailored to the exact job description. That saved me a lot of preparation time.",
  },
];

const stats = [
  { value: 10000, suffix: "+", label: "Interview Reports Generated" },
  { value: 95, suffix: "%", label: "User Satisfaction" },
  { value: 50, suffix: "+", label: "Supported Job Roles" },
  { value: 24, suffix: "/7", label: "AI Availability" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef([]);

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
        cardsRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
        },
      );

      statsRef.current.forEach((el, i) => {
        if (!el) return;
        const target = stats[i].value;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
          onUpdate: () => {
            el.textContent =
              Math.round(counter.val).toLocaleString() + stats[i].suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-bg py-28"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/8 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div ref={headingRef} className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark">
            Testimonials
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-ink lg:text-5xl">
            Loved by <span className="text-primary">developers</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-ink-muted">
            Developers preparing for interviews use InterviewAI to identify
            skill gaps, improve resumes, and prepare smarter.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-16px_rgba(15,93,90,0.15)]"
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-ink-muted">"{item.review}"</p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-sm font-semibold text-primary-dark">
                  {initials(item.name)}
                </div>

                <div>
                  <h4 className="font-semibold text-ink">{item.name}</h4>
                  <p className="text-sm text-ink-muted">{item.role}</p>
                  <span className="text-xs font-medium text-primary">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-24 grid gap-10 rounded-3xl border border-border bg-surface p-10 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <h3
                ref={(el) => (statsRef.current[i] = el)}
                className="font-mono text-4xl font-bold text-primary lg:text-5xl"
              >
                0{stat.suffix}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

