import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import gsap from "gsap";
import { Code2, MessageSquare, Map, ChevronDown, Download } from "lucide-react";
import { useInterview } from "../hooks/useInterview.js";

const NAV_ITEMS = [
  { id: "technical", label: "Technical Questions", icon: Code2 },
  { id: "behavioral", label: "Behavioral Questions", icon: MessageSquare },
  { id: "roadmap", label: "Road Map", icon: Map },
];

const SEVERITY_STYLES = {
  low: "bg-primary-light text-primary-dark",
  medium: "bg-accent-light text-accent",
  high: "bg-red-100 text-red-600",
};

// ── Sub-components ──────────────────────────────────────────────
const QuestionCard = ({ item, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-surface transition-colors ${open ? "border-primary/30" : "border-border"}`}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light font-mono text-xs font-semibold text-primary-dark">
          Q{index + 1}
        </span>
        <p className="flex-1 font-medium text-ink">{item.question}</p>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 px-6 pb-6">
            <div>
              <span className="mb-2 inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark">
                Intention
              </span>
              <p className="leading-7 text-ink-muted">{item.intention}</p>
            </div>
            <div>
              <span className="mb-2 inline-block rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                Model Answer
              </span>
              <p className="leading-7 text-ink-muted">{item.answer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoadMapDay = ({ day }) => (
  <div className="rounded-2xl border border-border bg-surface p-6">
    <div className="mb-4 flex items-center gap-3">
      <span className="rounded-full bg-primary px-3 py-1 font-mono text-xs font-semibold text-white">
        Day {day.day}
      </span>
      <h3 className="font-display text-lg font-semibold text-ink">
        {day.focus}
      </h3>
    </div>
    <ul className="space-y-2">
      {day.tasks.map((task, i) => (
        <li key={i} className="flex items-start gap-3 text-ink-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          {task}
        </li>
      ))}
    </ul>
  </div>
);

const MatchScoreRing = ({ score }) => {
  const circleRef = useRef(null);
  const valueRef = useRef(null);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  const color = score >= 80 ? "#0F5D5A" : score >= 60 ? "#F2A65A" : "#DC2626";

  useEffect(() => {
    const counter = { val: 0 };
    gsap.to(counter, {
      val: score,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        const v = Math.round(counter.val);
        if (valueRef.current) valueRef.current.textContent = v;
        if (circleRef.current) {
          const offset = circumference - (v / 100) * circumference;
          circleRef.current.style.strokeDashoffset = offset;
        }
      },
    });
  }, [score]);

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#E3E9E6"
          strokeWidth="10"
        />
        <circle
          ref={circleRef}
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
        />
      </svg>
      <div className="absolute flex items-baseline font-mono font-bold text-ink">
        <span ref={valueRef} className="text-4xl">
          0
        </span>
        <span className="text-xl">%</span>
      </div>
    </div>
  );
};

// ── Main Component ──────────────────────────────────────────────
const Interview = () => {
  const [activeNav, setActiveNav] = useState("technical");
  const { report, getReportById, loading, getResumePdf } = useInterview();
  const { interviewId } = useParams();
  const contentRef = useRef(null);

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }
  }, [interviewId]);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      );
    }
  }, [activeNav, report]);

  if (loading || !report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <div className="flex items-center gap-3 text-ink-muted">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Loading your interview plan...
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-bg pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-20 lg:grid-cols-[220px_1fr_280px] lg:px-10">
        {/* ── Left Nav ── */}
        <nav className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-muted/70">
            Sections
          </p>
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-white"
                      : "text-ink-muted hover:bg-primary-light hover:text-primary-dark"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => getResumePdf(interviewId)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary-dark"
          >
            <Download size={16} />
            Download Resume
          </button>
        </nav>

        {/* ── Center Content ── */}
        <main ref={contentRef}>
          {activeNav === "technical" && (
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Technical Questions
                </h2>
                <span className="text-sm text-ink-muted">
                  {report.technicalQuestions.length} questions
                </span>
              </div>
              <div className="space-y-4">
                {report.technicalQuestions.map((q, i) => (
                  <QuestionCard key={i} item={q} index={i} />
                ))}
              </div>
            </section>
          )}

          {activeNav === "behavioral" && (
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Behavioral Questions
                </h2>
                <span className="text-sm text-ink-muted">
                  {report.behavioralQuestions.length} questions
                </span>
              </div>
              <div className="space-y-4">
                {report.behavioralQuestions.map((q, i) => (
                  <QuestionCard key={i} item={q} index={i} />
                ))}
              </div>
            </section>
          )}

          {activeNav === "roadmap" && (
            <section>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  Preparation Road Map
                </h2>
                <span className="text-sm text-ink-muted">
                  {report.preparationPlan.length}-day plan
                </span>
              </div>
              <div className="space-y-4">
                {report.preparationPlan.map((day) => (
                  <RoadMapDay key={day.day} day={day} />
                ))}
              </div>
            </section>
          )}
        </main>

        {/* ── Right Sidebar ── */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <p className="mb-4 text-sm font-medium text-ink-muted">
              Match Score
            </p>
            <div className="mx-auto">
              <MatchScoreRing score={report.matchScore} />
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              {report.matchScore >= 80
                ? "Strong match for this role"
                : report.matchScore >= 60
                  ? "Decent match — a few gaps to close"
                  : "Significant gaps for this role"}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-surface p-6">
            <p className="mb-4 text-sm font-medium text-ink-muted">
              Skill Gaps
            </p>
            <div className="flex flex-wrap gap-2">
              {report.skillGaps.map((gap, i) => (
                <span
                  key={i}
                  className={`rounded-full px-3 py-1.5 text-xs font-medium ${SEVERITY_STYLES[gap.severity] || SEVERITY_STYLES.medium}`}
                >
                  {gap.skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Interview;
