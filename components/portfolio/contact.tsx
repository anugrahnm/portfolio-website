import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="05" title="contact" />
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="leading-relaxed text-muted-foreground">
            {"I'm"} currently open to on-site, remote, or hybrid roles and
            always happy to discuss new opportunities, collaborations, or just
            connect.
          </p>
          <a
            href="mailto:anugrahnm.dev@gmail.com"
            className="mt-8 flex w-full  min-h-[44px] items-center justify-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Mail className="h-4 w-4" />
            Say Hello!
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      {/* <span className="hidden h-px w-12 bg-border sm:block" /> */}
      <span className="font-mono text-sm text-primary/60">{number}</span>
      <h2 className="text-2xl flex gap-4 font-bold uppercase tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-muted-foreground">{"// "}</span>
        {title}
      </h2>
      <span className="hidden h-px w-full bg-border sm:block" />
    </div>
  );
}
