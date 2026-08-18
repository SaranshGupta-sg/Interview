import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router";
import gsap from "gsap";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Check } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, handleRegister } = useAuth();
  const panelRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      panelRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleRegister({
        username,
        email,
        password,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg">
        <div className="flex items-center gap-3 text-ink-muted">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Loading...
        </div>
      </main>
    );
  }

  const perks = [
    "AI-generated interview reports",
    "Skill gap analysis & 7-day prep plan",
    "ATS-friendly resume generator",
  ];

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT — brand panel */}
      <div className="relative hidden overflow-hidden bg-primary-dark p-12 lg:flex lg:flex-col lg:justify-between">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-accent/15 blur-[120px]" />

        <Link
          to="/"
          className="relative font-display text-2xl font-semibold text-white"
        >
          Interview<span className="text-accent">AI</span>
        </Link>

        <div className="relative">
          <h2 className="max-w-md font-display text-3xl font-semibold leading-tight text-white">
            Everything you need to prepare, in one place.
          </h2>
          <p className="mt-4 max-w-sm text-white/60">
            Create your free account and get your first AI interview report in
            minutes.
          </p>

          <div className="mt-10 space-y-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-white/80"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary-dark">
                  <Check size={14} strokeWidth={3} />
                </span>
                {perk}
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-sm text-white/40">
          © {new Date().getFullYear()} InterviewAI
        </p>
      </div>

      {/* RIGHT — form */}
      <div className="flex items-center justify-center bg-bg px-6 py-16">
        <div ref={panelRef} className="w-full max-w-md">
          <Link
            to="/"
            className="mb-10 block font-display text-2xl font-semibold text-ink lg:hidden"
          >
            Interview<span className="text-primary">AI</span>
          </Link>

          <h1 className="font-display text-3xl font-semibold text-ink">
            Create your account
          </h1>
          <p className="mt-2 text-ink-muted">
            Start preparing smarter for your next interview.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm font-medium text-ink"
              >
                Username
              </label>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                />
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Choose a username"
                  className="w-full rounded-xl border border-border bg-surface py-3.5 pl-12 pr-4 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-ink"
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-surface py-3.5 pl-12 pr-4 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-ink"
              >
                Password
              </label>
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-border bg-surface py-3.5 pl-12 pr-12 text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-muted transition-colors hover:text-primary"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:bg-primary-dark"
            >
              Create Account
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-8 text-center text-ink-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Register;
