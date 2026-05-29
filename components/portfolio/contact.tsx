import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="05" title="contact" />
        <div className="mt-12 flex flex-col items-center text-center">
          {/* Status pill */}
          <div className="mb-6 flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-mono text-primary">
            <span className="relative flex h-2 w-2">
              {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /> */}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to on-site, remote &amp; hybrid roles
          </div>

          <p className="max-w-md leading-relaxed text-muted-foreground">
            {"I'm"} currently available and actively looking. Whether it&apos;s
            a role, a collaboration, or just a conversation — reach out.
          </p>

          <a
            href="mailto:anugrahnm.dev@gmail.com"
            className="mt-8 flex w-full min-h-[44px] items-center justify-center gap-2 rounded-lg bg-primary/80 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/70"
          >
            <Mail className="h-4 w-4" />
            Say Hello_
          </a>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            anugrah.dev · London, UK
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <span className="font-mono text-sm text-primary/60">{number}</span>
      <h2 className="text-2xl flex gap-4 font-bold uppercase tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-muted-foreground">{"// "}</span>
        {title}
      </h2>
      <span className="hidden h-px w-full bg-border sm:block" />
    </div>
  );
}
