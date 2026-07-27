import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="InterviewAI"
            className="h-11 w-11 object-contain"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-zinc-300 lg:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How it Works
          </a>


          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5 md:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:scale-105 hover:shadow-indigo-600/40"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;