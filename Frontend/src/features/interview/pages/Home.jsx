import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import gsap from "gsap";
import {
  Briefcase,
  User,
  UploadCloud,
  FileCheck2,
  Info,
  Sparkles,
} from "lucide-react";
import { useInterview } from "../hooks/useInterview.js";

const Home = () => {
  const { loading, generateReport, reports } = useInterview();
  const [jobDescription, setJobDescription] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [fileName, setFileName] = useState("");
  const resumeInputRef = useRef();
  const headerRef = useRef();
  const cardRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    );
    gsap.fromTo(
      cardRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 },
    );
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
  };

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current.files[0];
    const data = await generateReport({
      jobDescription,
      selfDescription,
      resumeFile,
    });
    navigate(`/interview/${data._id}`);
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <div className="flex flex-col items-center gap-4 text-ink-muted">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Generating your interview plan...
        </div>
      </main>
    );
  }

  const scoreColor = (score) =>
    score >= 80 ? "text-primary" : score >= 60 ? "text-accent" : "text-red-500";

  return (
    <div className="min-h-screen bg-bg px-6 pb-24 pt-32 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Page header */}
        <header ref={headerRef} className="mb-12 text-center">
          <h1 className="font-display text-4xl font-semibold text-ink lg:text-5xl">
            Create your custom{" "}
            <span className="text-primary">interview plan</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
            Let the AI analyse the job requirements and your profile to build a
            winning strategy.
          </p>
        </header>

        {/* Main card */}
        <div
          ref={cardRef}
          className="rounded-3xl border border-border bg-surface shadow-[0_20px_60px_-24px_rgba(15,93,90,0.15)]"
        >
          <div className="grid gap-0 lg:grid-cols-2">
            {/* Left panel — Job Description */}
            <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <Briefcase size={18} />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink">
                  Target Job Description
                </h2>
                <span className="ml-auto rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark">
                  Required
                </span>
              </div>

              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="h-56 w-full resize-none rounded-xl border border-border bg-bg p-4 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary"
                placeholder={`Paste the full job description here...\ne.g. "Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design..."`}
                maxLength={5000}
              />
              <div className="mt-2 text-right text-xs text-ink-muted">
                {jobDescription.length} / 5000 chars
              </div>
            </div>

            {/* Right panel — Profile */}
            <div className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-light text-primary">
                  <User size={18} />
                </span>
                <h2 className="font-display text-lg font-semibold text-ink">
                  Your Profile
                </h2>
              </div>

              {/* Upload resume */}
              <div className="mb-5">
                <label className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
                  Upload Resume
                  <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
                    Best Results
                  </span>
                </label>

                <label
                  htmlFor="resume"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-bg px-6 py-8 text-center transition-colors hover:border-primary/40 hover:bg-primary-light/40"
                >
                  {fileName ? (
                    <>
                      <FileCheck2 size={26} className="mb-2 text-primary" />
                      <p className="text-sm font-medium text-ink">{fileName}</p>
                      <p className="mt-1 text-xs text-ink-muted">
                        Click to change file
                      </p>
                    </>
                  ) : (
                    <>
                      <UploadCloud size={26} className="mb-2 text-ink-muted" />
                      <p className="text-sm font-medium text-ink">
                        Click to upload or drag &amp; drop
                      </p>
                      <p className="mt-1 text-xs text-ink-muted">
                        PDF (Max 3MB)
                      </p>
                    </>
                  )}
                  <input
                    ref={resumeInputRef}
                    hidden
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              {/* OR divider */}
              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium text-ink-muted">OR</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              {/* Self-description */}
              <div className="mb-5">
                <label
                  htmlFor="selfDescription"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Quick Self-Description
                </label>
                <textarea
                  value={selfDescription}
                  onChange={(e) => setSelfDescription(e.target.value)}
                  id="selfDescription"
                  name="selfDescription"
                  className="h-24 w-full resize-none rounded-xl border border-border bg-bg p-4 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary"
                  placeholder="Briefly describe your experience, key skills, and years of experience if you don't have a resume handy..."
                />
              </div>

              {/* Info box */}
              <div className="flex items-start gap-3 rounded-xl bg-primary-light p-4 text-sm text-primary-dark">
                <Info size={18} className="mt-0.5 shrink-0" />
                <p>
                  Either a <strong>Resume</strong> or a{" "}
                  <strong>Self Description</strong> is required to generate a
                  personalised plan.
                </p>
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div className="flex flex-col items-center gap-4 border-t border-border p-8 sm:flex-row sm:justify-between">
            <span className="text-sm text-ink-muted">
              AI-powered strategy generation &bull; approx. 30s
            </span>
            <button
              onClick={handleGenerateReport}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary-dark sm:w-auto cursor-pointer"
            >
              <Sparkles size={18} />
              Generate My Interview Strategy
            </button>
          </div>
        </div>

        {/* Recent reports */}
        {reports.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-semibold text-ink">
              My Recent Interview Plans
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {reports.map((report) => (
                <div
                  key={report._id}
                  onClick={() => navigate(`/interview/${report._id}`)}
                  className="cursor-pointer rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_-16px_rgba(15,93,90,0.18)]"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {report.title || "Untitled Position"}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    Generated on{" "}
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                  <p
                    className={`mt-3 font-mono text-sm font-semibold ${scoreColor(report.matchScore)}`}
                  >
                    Match Score: {report.matchScore}%
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Page footer */}
        <footer className="mt-16 flex justify-center gap-8 text-sm text-ink-muted">
          <a href="#" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
          <a href="#" className="transition-colors hover:text-primary">
            Help Center
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;
