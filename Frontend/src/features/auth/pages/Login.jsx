import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router";
import gsap from "gsap";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    await handleLogin({ email, password });
    navigate("/dashboard");
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
            Walk into every interview already prepared.
          </h2>
          <p className="mt-4 max-w-sm text-white/60">
            Pick up right where you left off — your reports, prep plans, and
            resumes are all waiting in your dashboard.
          </p>

          <div className="mt-10 w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Match Score</span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                Ready
              </span>
            </div>
            <p className="mt-2 font-mono text-4xl font-bold text-white">91%</p>
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
            Welcome back
          </h1>
          <p className="mt-2 text-ink-muted">
            Log in to continue your interview preparation.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                  placeholder="Enter your password"
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
              Login
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          <p className="mt-8 text-center text-ink-muted">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
