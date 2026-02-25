import { ExternalLink, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "Freelance",
    role: "Web Developer",
    company: "B&A Systems",
    companyUrl: "#",
    description:
      "Designed and engineered a professional single-page business application for a quantitative analytics firm catering to UCITS fund managers.",
    bullets: [
      "Built a high-performance, responsive UI using HTML, CSS, JavaScript, and Tailwind CSS, ensuring 100% cross-browser compatibility.",
      "Streamlined deployment workflows via Cloudflare Pages and Git-based CI/CD pipelines, reducing manual deployment time to zero.",
      "Configured automated business email routing and secure contact forms, collaborating directly with stakeholders to meet technical and branding requirements.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Cloudflare Pages",
      "CI/CD",
    ],
  },
];

const educationItems = [
  {
    school: "University of West London",
    location: "London, UK",
    degree: "B.S. (Hons) Computer Science",
    details:
      "Graduated: January 2026 — First Class Honours (75% Overall). Coursework: Data Structures & Algorithms, OOP, Software Engineering, UX/UI, Database Management Systems.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader number="04" title="experience" />

        {/* Work experience */}
        <div className="mt-12 flex flex-col gap-10">
          {experiences.map((exp) => (
            <a
              key={exp.company}
              href={exp.companyUrl}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:bg-card/80"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="inline-flex items-center gap-1 text-primary">
                    {"· "}
                    {exp.company}
                    <ExternalLink className="inline-block h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5">
                {exp.bullets.map((bullet) => (
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
                {exp.skills.map((skill) => (
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

        {/* Education sub-section */}
        <div className="mt-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Education
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {educationItems.map((item) => (
              <div
                key={item.school}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">
                    {item.school}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.location}
                  </p>
                  <p className="mt-2 text-sm text-secondary-foreground">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
