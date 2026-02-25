"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = [
  { id: "home", label: "home", number: "01" },
  { id: "skills", label: "skills", number: "02" },
  { id: "projects", label: "projects", number: "03" },
  { id: "experience", label: "experience", number: "04" },
  { id: "contact", label: "contact", number: "05" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 lg:px-12 lg:py-6 ${
          scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-2xl tracking-tight text-primary"
        >
          {"Anugrah._"}
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group  flex-col items-baseline tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-s 2xl:text-lg pl-1 font-medium text-primary/60 transition-colors group-hover:text-primary">
                  {item.number}
                </span>
                <div className="flex gap-0 text-lg lg:text-lg">
                  <span className="font-mono text-muted-foreground transition-colors group-hover:text-foreground">
                    {"// "}
                  </span>
                  <span className="font-medium transition-colors group-hover:text-foreground">
                    {item.label}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop resume button */}
        <a
          href="/resume.pdf"
          download="Anugrah_CV.pdf"
          className="hidden min-h-[44px] items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 lg:inline-flex"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>

        {/* Spacer on mobile for centering logo */}
        <div className="min-h-[44px] min-w-[44px] lg:hidden" />
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-background/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        onKeyDown={(e) => e.key === "Escape" && setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 z-[70] flex h-full w-4/5 max-w-sm flex-col bg-[hsl(210,20%,95%)] p-8 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="mb-12 flex min-h-[44px] min-w-[44px] items-center justify-center self-start rounded-full bg-[hsl(210,15%,85%)] text-[hsl(210,25%,15%)]"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block min-h-[44px] py-1 font-medium text-lg text-[hsl(210,25%,15%)] transition-colors active:text-primary"
              >
                <span className="font-mono text-[hsl(210,12%,55%)]">
                  {"// "}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume link in drawer */}
        <a
          href="/resume.pdf"
          download="Anugrah_CV.pdf"
          onClick={() => setMenuOpen(false)}
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-lg font-medium text-[hsl(210,25%,15%)]"
        >
          <Download className="h-5 w-5" />
          Download Resume
        </a>

        <p className="mt-auto text-sm text-[hsl(210,12%,45%)]">
          {"Made with passion by Anugrah NM."}
          <br />
          All rights reserved.
        </p>
      </aside>
    </>
  );
}
