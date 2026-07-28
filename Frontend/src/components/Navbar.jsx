import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
    );

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/90 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(15,93,90,0.12)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          <span className="font-display text-2xl font-semibold tracking-tight whitespace-nowrap text-ink">
            Interview<span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-ink-muted lg:flex">
          <a href="#features" className="transition-colors hover:text-primary">
            Features
          </a>

          <a
            href="#how-it-works"
            className="transition-colors hover:text-primary"
          >
            How it Works
          </a>

          <a href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-5">
          <Link
            to="/login"
            className="hidden whitespace-nowrap rounded-full border border-border px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-primary/40 hover:bg-primary-light md:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:bg-primary-dark hover:shadow-primary/40"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
