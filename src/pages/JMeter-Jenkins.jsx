import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function JMeterJenkins() {
  const githubUrl = "https://github.com/alexbashchuk/JMeter-Test";
  const youtubeUrl = "https://youtu.be/VEgMSr7PkVs";
  const portfolioRepoUrl = "https://github.com/alexbashchuk/alexbashchuk.github.io";
  const navigate = useNavigate();

  const techStack = [
    "Apache JMeter",
    "Jenkins",
    "Groovy Pipeline",
    "GitHub",
    "CSV test result reports",
    "HTML dashboard reports",
    "SMTP e-mail notifications",
    "REST API testing (GET / POST)",
    "Windows local CI execution",
  ];

  const packages = [
    {
      name: "JMeter Test Assets",
      items: [
        {
          name: 'Page "Response Test.jmx"',
          purpose:
            "Main JMeter test plan that sends several GET and POST API requests to the portfolio site and JSONPlaceholder endpoints.",
        },
        {
          name: "Portfolio endpoint checks",
          purpose:
            "Validates availability and response behavior of selected portfolio pages after GitHub updates are detected.",
        },
        {
          name: "JSONPlaceholder requests",
          purpose:
            "Supplemental API calls used to demonstrate GET and POST request coverage within the same JMeter suite.",
        },
      ],
    },
    {
      name: "Jenkins Projects",
      items: [
        {
          name: "Jenkins-Portfolio-Trigger",
          purpose:
            "Polling Jenkins job that listens for changes in the portfolio GitHub repository and starts an empty successful build whenever updates are detected.",
        },
        {
          name: "JMeter-Portfolio-Master",
          purpose:
            "Master Jenkins job that watches Jenkins-Portfolio-Trigger and starts the JMeter execution workflow after each successful trigger build.",
        },
      ],
    },
    {
      name: "Execution and Reporting Flow",
      items: [
        {
          name: "Download latest JMeter test plan",
          purpose:
            "The Jenkins master job pulls the latest version of the JMeter test file from the JMeter-Test GitHub repository before execution.",
        },
        {
          name: "Run JMeter locally",
          purpose:
            "Jenkins launches the local JMeter installation in non-GUI mode and executes the API test plan against the configured targets.",
        },
        {
          name: "Generate CSV results",
          purpose:
            "Execution results are saved into a CSV file for raw result tracking and troubleshooting.",
        },
        {
          name: "Generate HTML report",
          purpose:
            "JMeter dashboard report output is generated as an HTML report for cleaner presentation of execution metrics and response summaries.",
        },
        {
          name: "Send e-mail notification",
          purpose:
            "After the run completes, Jenkins sends an e-mail notification with the test results to bostchuk@gmail.com.",
        },
      ],
    },
  ];

  const projectTree = `JMeter + Jenkins Project
├─ GitHub Repositories
│  ├─ alexbashchuk.github.io
│  └─ JMeter-Test
├─ Jenkins Projects
│  ├─ Jenkins-Portfolio-Trigger
│  └─ JMeter-Portfolio-Master
├─ JMeter Test Plan
│  └─ Page "Response Test.jmx"
├─ Test Execution Output
│  ├─ results.csv
│  └─ HTML report dashboard
└─ Notifications
   └─ e-mail test report`;

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

      <section className="hero" aria-label="JMeter and Jenkins Project">
        <h1 className="name">JMeter + Jenkins API Automation Project</h1>
        <p className="title">
          GitHub-triggered portfolio monitoring • Local Jenkins execution • JMeter API validation
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
            JMeter GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={portfolioRepoUrl} target="_blank" rel="noreferrer">
            Portfolio GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={youtubeUrl} target="_blank" rel="noreferrer">
            Test Run Video (YouTube)
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project demonstrates a local CI-style automation workflow built with{" "}
          <strong>JMeter</strong> and <strong>Jenkins</strong>. I created a JMeter test plan that
          sends several API requests to my portfolio site and to JSONPlaceholder, then published the
          test plan into a dedicated GitHub repository. Jenkins monitors my portfolio GitHub
          repository for changes and automatically starts the JMeter execution flow after each new
          successful trigger build.
        </p>
        <p>
          The automation downloads the latest JMeter test file from GitHub, runs the test locally,
          creates <strong>CSV</strong> and <strong>HTML</strong> reports, and then sends an e-mail
          notification with the execution results. This project is designed as a practical demo of
          lightweight API monitoring and continuous validation for portfolio updates.
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

      <section className="card" aria-label="Project Components">
        <h2>Project Components</h2>

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

      <section className="card" aria-label="Automation Flow">
        <h2>Automation Flow</h2>
        <ul className="bullets">
          <li>Jenkins-Portfolio-Trigger polls the portfolio GitHub repository for updates.</li>
          <li>When a portfolio change is detected, the trigger job performs a successful build.</li>
          <li>JMeter-Portfolio-Master watches the trigger project and starts after its success.</li>
          <li>The master job downloads the latest JMeter test plan from GitHub.</li>
          <li>Jenkins runs JMeter locally in non-GUI mode against the configured endpoints.</li>
          <li>CSV and HTML reports are generated for result review.</li>
          <li>An e-mail notification with the execution results is sent after completion.</li>
        </ul>
      </section>

      <section className="card" aria-label="Demo Links">
        <h2>Demo Links</h2>
        <ul className="bullets">
          <li>
            Test execution demo:{" "}
            <a className="certLink" href={youtubeUrl} target="_blank" rel="noreferrer">
              YouTube video
            </a>
          </li>
          <li>
            JMeter source code:{" "}
            <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub repository
            </a>
          </li>
          <li>
            Portfolio source code:{" "}
            <a className="certLink" href={portfolioRepoUrl} target="_blank" rel="noreferrer">
              GitHub repository
            </a>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Notes">
        <h2>Notes</h2>
        <ul className="bullets">
          <li>
            The project uses <strong>two Jenkins jobs</strong> to separate GitHub change detection
            from test execution logic.
          </li>
          <li>
            The JMeter suite covers both <strong>portfolio endpoint validation</strong> and a public
            demo API for GET/POST request examples.
          </li>
          <li>
            HTML reporting makes the results easier to present during demos, while CSV output keeps
            the raw execution data available.
          </li>
          <li>
            The workflow is designed as a practical demonstration of continuous portfolio health
            checking with local tools.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}