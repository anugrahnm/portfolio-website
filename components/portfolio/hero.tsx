"use client";

import React from "react"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center"
    >
      {/* Name */}
      <h1 className="text-balance text-5xl font-bold uppercase tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl">
        ANUGRAH NM
      </h1>

      {/* Subtitle */}
      <p className="mt-4 font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground sm:text-base lg:text-lg">
        Web Developer & CS Graduate.
      </p>

      {/* Social row */}
      <div className="mt-10 flex items-center gap-6">
        <SocialLink
          href="https://github.com/anugrahnm"
          label="GitHub"
          icon={<Github className="h-5 w-5" />}
        />
        <SocialLink
          href="https://linkedin.com/in/anugrahnm"
          label="LinkedIn"
          icon={<Linkedin className="h-5 w-5" />}
        />
        <SocialLink
          href="mailto:anugrahnm.dev@gmail.com"
          label="Email"
          icon={<Mail className="h-5 w-5" />}
        />
      </div>

      {/* Scroll indicator */}
      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 pt-1.5">
          <span className="h-2 w-0.5 animate-bounce rounded-full bg-primary" />
        </span>
      </a>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex min-h-[44px] min-w-[44px] items-center justify-center text-muted-foreground transition-colors hover:text-primary"
    >
      {icon}
    </a>
  );
}
