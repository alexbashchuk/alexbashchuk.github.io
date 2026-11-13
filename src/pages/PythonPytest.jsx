import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function PythonPytest() {
  const githubUrl = "https://github.com/alexbashchuk/python-playwright-tests";
  const youtubeUrl = "https://youtu.be/vD8x5wPDGC0";
  const navigate = useNavigate();

  const techStack = [
    "Python",
    "pytest",
    "Playwright (synchronous API)",
    "Page Object Model",
    "pytest-html",
    "JUnit XML reports",
    "Screenshots and Playwright traces",
    "GitHub Copilot custom agents",
  ];

  const testAreas = [
    "Portfolio profile, content sections, and project navigation",
    "Project detail pages, demo-link destinations, and home navigation",
    "Experience-card descriptions and certificate dialog behavior",
    "Keyboard navigation and narrow-viewport layouts",
    "Project-page scrolling and horizontal-overflow checks",
    "Demo-link availability and YouTube video navigation",
  ];

  const projectTree = `python-playwright-tests
├─ tests
│  ├─ conftest.py
│  └─ ui
│     ├─ test_smoke.py
│     ├─ test_portfolio_ui.py
│     ├─ ui_support.py
│     ├─ components
│     │  ├─ certificate_dialog.py
│     │  └─ experience_card.py
│     ├─ data
│     │  └─ portfolio_data.py
│     └─ pages
│        ├─ portfolio_page.py
│        └─ project_detail_page.py
├─ specs
│  └─ portfolio-ui.md
├─ pytest.ini
└─ requirements.txt`;

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

      <section className="hero" aria-label="Python pytest Playwright Project">
        <h1 className="name">Python + pytest + Playwright UI Automation Project</h1>
        <p className="title">
          Portfolio UI testing • Page Objects • Detailed execution reports
        </p>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project contains a Python UI automation suite for validating my
          portfolio website with pytest and synchronous Playwright. It uses
          reusable page objects, component helpers, and centralized test data
          to cover portfolio content, project navigation, and interactive
          behavior. Test runs can produce self-contained HTML and JUnit XML
          reports; failed browser tests retain screenshots and Playwright
          traces for investigation.
        </p>
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
            Source code:{" "}
            <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub repository
            </a>
          </li>
        </ul>
      </section>

      <section className="card" aria-label="Tech Stack">
        <h2>Tech Stack</h2>
        <div className="chips" aria-label="Tech stack chips">
          {techStack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="card" aria-label="Test Coverage">
        <h2>Test Coverage</h2>
        <ul className="bullets">
          {testAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
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

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Boschuk</span>
      </footer>
    </main>
  );
}
