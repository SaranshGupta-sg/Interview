import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Is InterviewAI free to use?",
    answer:
      "Yes. You can create an account and start generating interview reports for free. Premium features may be introduced in the future.",
  },
  {
    question: "Can I upload my resume in PDF format?",
    answer:
      "Absolutely. Upload your PDF resume and the AI will analyse it to generate personalised interview questions, identify skill gaps, and recommend improvements.",
  },
  {
    question: "What if I don't have a resume?",
    answer:
      "No problem. Write a short self-description instead. The AI uses that alongside the job description to prepare your interview report.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "The analysis is based on your resume, self-description, and the job description you provide. It offers realistic interview questions and preparation guidance, but should be used as an assistant rather than a final hiring decision.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes. Your uploaded resume and generated reports stay private and are only used to build your personalised interview preparation experience.",
  },
  {
    question: "Can I generate multiple interview reports?",
    answer:
      "Yes. Create multiple reports for different companies or job roles and access them later from your dashboard.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

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
        listRef.current.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative overflow-hidden bg-surface py-28"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/8 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-4xl px-6">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-sm font-medium text-primary-dark">
            FAQ
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold text-ink lg:text-5xl">
            Got <span className="text-primary">questions?</span>
          </h2>

          <p className="mt-6 text-lg text-ink-muted">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ list */}
        <div ref={listRef} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-bg transition-colors duration-300 ${
                  isOpen ? "border-primary/30" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-6 text-left"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {faq.question}
                  </h3>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={18} strokeWidth={2} />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-8 pb-6 leading-7 text-ink-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
