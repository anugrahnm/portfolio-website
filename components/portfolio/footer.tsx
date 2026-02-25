export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center">
      <p className="text-xs text-muted-foreground">
        {"Made with passion by Anugrah NM. All rights reserved."}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary-foreground transition-colors hover:text-primary"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary-foreground transition-colors hover:text-primary"
        >
          Tailwind CSS
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-secondary-foreground transition-colors hover:text-primary"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
