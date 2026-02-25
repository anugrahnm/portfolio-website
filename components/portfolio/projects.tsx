import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "TaskFlow",
    url: "https://github.com/anugrahnm",
    description:
      "A full-stack task management application using Next.js and Supabase, leveraging PostgreSQL for robust data persistence.",
    bullets: [
      "Implemented Supabase Auth with Row Level Security (RLS) to ensure secure, isolated user data access and encrypted session management.",
      "Utilized PostgreSQL Realtime replication to synchronize task updates across the UI via WebSockets, eliminating the need for manual page refreshes.",
      "Optimized frontend performance using TypeScript and Tailwind CSS, achieving a 95+ performance score on Google Lighthouse.",
    ],
    skills: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio Website",
    url: "https://anugrah.dev",
    description: "",
    bullets: [
      "Architected and deployed a responsive portfolio using Next.js and TypeScript to showcase technical builds and host interactive demos.",
      "Leveraged Vercel for continuous deployment and optimized component architecture for lightning-fast server-side rendering (SSR).",
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="03" title="projects" />
        <div className="mt-12 grid gap-6 sm:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <h3 className="flex items-center gap-2 font-semibold text-foreground">
                {project.title}
                <ExternalLink className="h-3.5 w-3.5 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary/60">{number}</span>
      <h2 className="text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
        <span className="font-mono text-muted-foreground">{"// "}</span>
        {title}
      </h2>
      <span className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  );
}
