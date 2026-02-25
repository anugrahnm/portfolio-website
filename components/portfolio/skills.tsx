const skillCategories = [
  {
    title: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "SQL (PostgreSQL)",
      "Python",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Supabase",
      "Git/GitHub",
      "Docker",
      "Vercel",
      "Cloudflare Pages",
      "Vite",
      "Figma",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="02" title="skills" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
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
