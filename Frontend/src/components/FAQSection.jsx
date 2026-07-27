import { useState } from "react";

const faqs = [
  {
    question: "Is InterviewAI free to use?",
    answer:
      "Yes. You can create an account and start generating interview reports for free. Premium features may be introduced in the future.",
  },
  {
    question: "Can I upload my resume in PDF format?",
    answer:
      "Absolutely. Simply upload your PDF resume, and our AI will analyze it to generate personalized interview questions, identify skill gaps, and recommend improvements.",
  },
  {
    question: "What if I don't have a resume?",
    answer:
      "No problem. You can write a short self-description instead. Our AI will use that information along with the job description to prepare your interview report.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "The analysis is based on your resume, self-description, and the job description you provide. It offers realistic interview questions and preparation guidance, but should be used as an assistant rather than a final hiring decision.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes. Your uploaded resume and generated reports remain private and are only used to create your personalized interview preparation experience.",
  },
  {
    question: "Can I generate multiple interview reports?",
    answer:
      "Yes. You can create multiple reports for different companies or job roles and access them later from your dashboard.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#070b1a] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto w-[92%] max-w-5xl">

        {/* Heading */}

        <div className="mb-20 text-center">

          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Got
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Questions?
            </span>
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know before getting started.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                <span className="text-3xl text-indigo-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-8 pb-6 leading-8 text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQSection;