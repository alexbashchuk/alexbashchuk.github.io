import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function PortfolioGithub() {
  const repoUrl = "https://github.com/alexbashchuk/alexbashchuk.github.io";
  const githubPagesUrl = "https://alexbashchuk.github.io";
  const navigate = useNavigate();

  const techStack = [
    "React",
    "Vite",
    "JavaScript",
    "CSS",
    "HTML",
    "GitHub Pages",
    "GitHub Actions / Workflows",
    "Responsive portfolio UI",
    "Multi-page project showcase",
  ];

  const packages = [
    {
      name: "Website Core",
      items: [
        {
          name: "Home page",
          purpose:
            "Main landing page that introduces me as a QA Automation Engineer and provides navigation to my portfolio sections.",
        },
        {
          name: "Project pages",
          purpose:
            "Dedicated pages for individual automation projects with descriptions, tech stack, structure, and demo links.",
        },
        {
          name: "Reusable styling",
          purpose:
            "Shared Home.css styling keeps the portfolio pages visually consistent across the site.",
        },
      ],
    },
    {
      name: "Repository Structure",
      items: [
        {
          name: "src",
          purpose:
            "Contains the React source code, page components, routing logic, and UI content for the portfolio website.",
        },
        {
          name: "public",
          purpose:
            "Stores public static assets that can be served directly by the site.",
        },
        {
          name: ".github/workflows",
          purpose:
            "Contains GitHub workflow definitions used for repository automation and deployment-related processes.",
        },
      ],
    },
    {
      name: "Portfolio Content",
      items: [
        {
          name: "Professional summary",
          purpose:
            "Highlights my background, QA automation experience, and the tools and frameworks I use.",
        },
        {
          name: "Automation project showcase",
          purpose:
            "Presents practical QA and SDET projects with GitHub source code and demo details.",
        },
        {
          name: "Technology-focused pages",
          purpose:
            "Shows specific examples of work with tools such as Playwright, Appium, JMeter, Jenkins, and related frameworks.",
        },
      ],
    },
  ];

  const projectTree = `alexbashchuk.github.io
├─ .github/
│  └─ workflows/
├─ public/
├─ src/
├─ index.html
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ eslint.config.js
└─ README.md`;

  return (
    <main className="home">
      <button
        className="navButton"
        onClick={() =>
          navigate("/", {
            state: { scrollTo: "automation-projects" },
          })
        }
      >
        ⌂ Home
      </button>

      <section className="hero" aria-label="Portfolio GitHub Repository">
        <h1 className="name">GitHub Portfolio Website</h1>
        <p className="title">
          Personal QA automation portfolio • React + Vite site • GitHub-hosted source code
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={repoUrl} target="_blank" rel="noreferrer">
            Portfolio GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={githubPagesUrl} target="_blank" rel="noreferrer">
            Live Portfolio Site
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This repository contains the source code for my personal portfolio website,
          built to present my background as a <strong>QA Automation Engineer / SDET</strong>,
          along with examples of my automation frameworks, demo projects, and technical skills.
          The portfolio is designed as a practical showcase of my hands-on experience with web,
          mobile, API, and CI-oriented automation solutions.
        </p>
        <p>
          The site is implemented with <strong>React</strong> and <strong>Vite</strong>,
          and organized as a multi-page portfolio where each project can have its own detailed
          page. The goal of this repository is not only to host my portfolio publicly, but also
          to serve as a clean, maintainable codebase that demonstrates front-end structure,
          reusable styling, and project-focused technical documentation.
        </p>
      </section>

      <section className="card" aria-label="Tech Stack">
        <h2>Tech Stack</h2>
        <div className="chips" aria-label="Tech stack chips">
          {techStack.map((it) => (
            <span className="chip" key={it}>
              {it}
            </span>
          ))}
        </div>
      </section>

      <section className="card" aria-label="Repository Structure">
        <h2>Repository Structure</h2>
        <pre
          style={{
            overflowX: "auto",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
{projectTree}
        </pre>
      </section>

      <section className="card" aria-label="Repository Components">
        <h2>Repository Components</h2>

        {packages.map((pkg) => (
          <div key={pkg.name} style={{ marginTop: 14 }}>
            <h3 style={{ marginBottom: 8 }}>{pkg.name}</h3>
            <ul className="bullets">
              {pkg.items.map((c) => (
                <li key={c.name}>
                  <strong>{c.name}</strong> — {c.purpose}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="card" aria-label="Website Purpose">
        <h2>Website Purpose</h2>
        <ul className="bullets">
          <li>Present my professional QA automation and SDET experience in one place.</li>
          <li>Showcase real and demo automation projects with clear technical descriptions.</li>
          <li>Provide GitHub-ready visibility for my frameworks, tools, and coding style.</li>
          <li>Support job applications with a public portfolio that is easy to review.</li>
          <li>Demonstrate how I organize and document technical work in a maintainable format.</li>
        </ul>
      </section>

      <section className="card" aria-label="Highlights">
        <h2>Highlights</h2>
        <ul className="bullets">
          <li>
            Built as a <strong>React + Vite</strong> application for a fast and modern front-end structure.
          </li>
          <li>
            Uses a <strong>multi-page layout</strong> so each automation project can have its own focused presentation.
          </li>
          <li>
            Designed to support <strong>portfolio growth</strong> as new projects, demos, and links are added over time.
          </li>
          <li>
            Keeps the code and presentation aligned so the site works both as a portfolio and as a code sample.
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Demo Links">
        <h2>Demo Links</h2>
        <ul className="bullets">
          <li>
            Source code:{" "}
            <a className="certLink" href={repoUrl} target="_blank" rel="noreferrer">
              GitHub repository
            </a>
          </li>
          <li>
            Live website:{" "}
            <a className="certLink" href={githubPagesUrl} target="_blank" rel="noreferrer">
              GitHub Pages site
            </a>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Notes">
        <h2>Notes</h2>
        <ul className="bullets">
          <li>
            This repository serves as the <strong>central portfolio hub</strong> for my automation-related work.
          </li>
          <li>
            The structure is suitable for adding more <strong>project detail pages</strong> as the portfolio expands.
          </li>
          <li>
            The site is intended to combine <strong>technical presentation</strong> with a clean and simple user experience.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}