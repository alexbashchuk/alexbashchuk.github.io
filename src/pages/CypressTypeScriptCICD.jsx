import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function CypressTypeScriptCICD() {
  const githubUrl = "https://github.com/alexbashchuk/TypeScript-Cypress-CICD";
  const portfolioRepoUrl = "https://github.com/alexbashchuk/alexbashchuk.github.io";
  const youtubeLocalUrl = "https://youtu.be/ePLVuEhLe9U";
  const youtubeGithubActionsUrl = "https://youtu.be/LgTh6r9JWVY";
  const navigate = useNavigate();

  const techStack = [
    "Cypress",
    "TypeScript",
    "JavaScript config",
    "Page Object Model",
    "Allure Reporting",
    "JUnit XML Reporting",
    "GitHub Actions",
    "GitHub Pages trigger flow",
    "Chrome / Edge / Firefox / Electron execution",
    "PowerShell local run helpers",
  ];

  const sections = [
    {
      name: "Project Core",
      items: [
        {
          name: "cypress.config.js",
          purpose:
            "Main Cypress configuration file. Sets browser viewport size, baseUrl for the portfolio site, JUnit reporting, and Allure reporter integration.",
        },
        {
          name: "package.json",
          purpose:
            "Defines Cypress and Allure commands for opening the runner, running tests, and generating or opening Allure reports.",
        },
        {
          name: "cypress/tsconfig.json",
          purpose:
            "TypeScript configuration for Cypress test code and support files.",
        },
      ],
    },
    {
      name: "Test Layer",
      items: [
        {
          name: "cypress/e2e/portfolio-home.cy.ts",
          purpose:
            "Main end-to-end test spec for validating portfolio home page behavior, navigation, and experience-card interactions.",
        },
        {
          name: "cypress/e2e/portfolio-certifications.cy.ts",
          purpose:
            "End-to-end test spec focused on certifications-related flows and validation of certification UI behavior.",
        },
        {
          name: "cypress/pages/HomePage.ts",
          purpose:
            "Reusable page object that centralizes locators and helper actions for the portfolio home page.",
        },
      ],
    },
    {
      name: "Support Layer",
      items: [
        {
          name: "cypress/support/commands.ts",
          purpose:
            "Project support file for reusable Cypress custom commands and shared test helpers.",
        },
        {
          name: "cypress/support/e2e.ts",
          purpose:
            "Global Cypress support entry point loaded before test execution.",
        },
        {
          name: "cypress/fixtures",
          purpose:
            "Reserved place for test data and fixture files used by specs when needed.",
        },
      ],
    },
    {
      name: "Reporting and CI/CD",
      items: [
        {
          name: "results/",
          purpose:
            "Directory used for JUnit XML output generated during automated execution, including GitHub Actions runs.",
        },
        {
          name: "allure-results / allure-reports",
          purpose:
            "Runtime reporting folders used for local Allure result generation and HTML report publishing.",
        },
        {
          name: "Portfolio repo GitHub Actions workflow",
          purpose:
            "External GitHub Actions flow in the portfolio repository that deploys the site and can be used to trigger Cypress CI execution after successful portfolio deployment.",
        },
      ],
    },
  ];

  const projectTree = `TypeScript-Cypress-CICD
├─ cypress
│  ├─ e2e
│  │  ├─ portfolio-home.cy.ts
│  │  └─ portfolio-certifications.cy.ts
│  ├─ fixtures
│  ├─ pages
│  │  └─ HomePage.ts
│  ├─ support
│  │  ├─ commands.ts
│  │  └─ e2e.ts
│  └─ tsconfig.json
├─ results
├─ cypress.config.js
├─ package.json
├─ package-lock.json
└─ .gitignore

External CI/CD integration:
alexbashchuk.github.io
└─ .github/workflows/deploy.yml`;

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

      <section className="hero" aria-label="Cypress TypeScript CI/CD Project">
        <h1 className="name">Cypress + TypeScript + Allure + GitHub Actions CI/CD Project</h1>
        <p className="title">
          UI automation • Page Object Model • Local Allure reporting • GitHub Actions execution
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={portfolioRepoUrl} target="_blank" rel="noreferrer">
            Portfolio Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={youtubeLocalUrl} target="_blank" rel="noreferrer">
            Local Run Video
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={youtubeGithubActionsUrl} target="_blank" rel="noreferrer">
            GitHub Actions Video
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project demonstrates an end-to-end automation framework built with
          <strong> Cypress and TypeScript</strong> for testing my GitHub-hosted portfolio website.
          The framework uses a <strong>Page Object Model</strong> approach for reusable locators and
          cleaner test maintenance, supports <strong>local browser execution</strong>, and produces
          both <strong>Allure HTML reports</strong> for local analysis and <strong>JUnit XML
          results</strong> for CI visibility.
        </p>
        <p>
          In addition to local execution, this demo also shows a <strong>GitHub Actions CI/CD
          integration</strong> where my portfolio repository deployment flow is connected to
          automated Cypress execution. This creates a realistic example of how UI tests can be used
          as a lightweight post-deployment quality gate for a live web project.
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

      <section className="card" aria-label="Project Structure">
        <h2>Project Structure</h2>
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

      <section className="card" aria-label="Project Files and Purpose">
        <h2>Project Files and Purpose</h2>

        {sections.map((section) => (
          <div key={section.name} style={{ marginTop: 14 }}>
            <h3 style={{ marginBottom: 8 }}>{section.name}</h3>
            <ul className="bullets">
              {section.items.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong> — {item.purpose}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="card" aria-label="Local Execution Flow">
        <h2>Local Execution Flow</h2>
        <ul className="bullets">
          <li>Portfolio site is opened through the configured Cypress baseUrl.</li>
          <li>Tests execute in the selected local browser such as Chrome, Edge, Firefox, or Electron.</li>
          <li>Page object methods are used to locate experience-card controls and other portfolio elements.</li>
          <li>Assertions validate page visibility, button functionality, menu actions, and certification behavior.</li>
          <li>Allure result files are generated during execution and then converted into an HTML report for review.</li>
        </ul>
      </section>

      <section className="card" aria-label="CI CD Flow">
        <h2>CI/CD Flow</h2>
        <ul className="bullets">
          <li>The portfolio repository is deployed to GitHub Pages through a GitHub Actions workflow.</li>
          <li>After successful deployment, the automation flow can trigger the Cypress project execution.</li>
          <li>The Cypress suite runs in GitHub Actions and publishes JUnit-style test results for CI visibility.</li>
          <li>This setup demonstrates how UI automation can be connected to a real deployment pipeline.</li>
        </ul>
      </section>

      <section className="card" aria-label="Key Project Highlights">
        <h2>Key Project Highlights</h2>
        <ul className="bullets">
          <li>Built with Cypress and TypeScript for maintainable web UI automation.</li>
          <li>Uses page objects to keep selectors and test actions reusable.</li>
          <li>Supports local execution with Allure report generation for clearer result analysis.</li>
          <li>Supports CI execution with JUnit XML output for GitHub Actions visibility.</li>
          <li>Demonstrates cross-repository automation flow tied to portfolio deployment.</li>
          <li>Shows both local and CI execution in separate demo videos.</li>
        </ul>
      </section>

      <section className="card" aria-label="Demo Links">
        <h2>Demo Links</h2>
        <ul className="bullets">
          <li>
            Source code:{" "}
            <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
              TypeScript-Cypress-CICD repository
            </a>
          </li>
          <li>
            Portfolio deployment repository:{" "}
            <a className="certLink" href={portfolioRepoUrl} target="_blank" rel="noreferrer">
              alexbashchuk.github.io
            </a>
          </li>
          <li>
            Local Cypress execution with Allure report:{" "}
            <a className="certLink" href={youtubeLocalUrl} target="_blank" rel="noreferrer">
              YouTube video
            </a>
          </li>
          <li>
            GitHub Actions execution with JUnit report:{" "}
            <a className="certLink" href={youtubeGithubActionsUrl} target="_blank" rel="noreferrer">
              YouTube video
            </a>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Notes">
        <h2>Notes</h2>
        <ul className="bullets">
          <li>
            The project focuses on <strong>web UI automation</strong> of my portfolio application
            rather than component-level unit testing.
          </li>
          <li>
            Reporting is split by use case: <strong>Allure</strong> for rich local HTML analysis and
            <strong> JUnit XML</strong> for CI-friendly results in GitHub Actions.
          </li>
          <li>
            The CI/CD design is intentionally demo-friendly and shows how a personal portfolio
            project can be connected to automated post-deployment validation.
          </li>
          <li>
            The structure is compact, but it still demonstrates important automation engineering
            concepts such as reusable page objects, reporting integration, browser execution
            control, and workflow-based CI triggering.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}