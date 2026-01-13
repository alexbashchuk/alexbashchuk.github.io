import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JavaPlaywright() {
  const githubUrl = "https://github.com/alexbashchuk/playwright-java-demo";
  const youtubeUrl = "https://youtu.be/7d74GlFB3Lg";
   const navigate = useNavigate();

  const techStack = [
    "Java 17",
    "Playwright for Java",
    "JUnit 5",
    "Maven",
    "Allure Reporting",
    "Git Bash (GitHub updates)",
    "Shell Script (run Maven + keep Allure history)",
    "OpenCV (Bytedeco) for image matching",
  ];

  const packages = [
    {
      name: "io.github.alexbashchuk.base",
      items: [
        {
          name: "BaseUiTest.java",
          purpose:
            "Abstract base test. Creates Playwright + Chromium (Chrome channel), opens a browser with full-screen sizing, creates a fresh context/page, and navigates to the portfolio URL in @BeforeAll. Closes everything in @AfterAll.",
        },
        {
          name: "AllurePlaywrightFailureExtension.java",
          purpose:
            "JUnit 5 extension: on test failure it captures a full-page screenshot, saves it to target/screenshots, and attaches screenshot + URL + HTML to the Allure report.",
        },
        {
          name: "ImageToTemplateMatcher.java",
          purpose:
            "Image validation utility using OpenCV template matching (TM_CCOEFF_NORMED). Compares captured modal screenshots vs template originals using a threshold percent (e.g., 80%).",
        },
        {
          name: "AllureConsoleLogsExtension.java (optional)",
          purpose:
            "Optional extension (referenced in tests as commented @ExtendWith) intended to redirect logging into the Allure report.",
        },
      ],
    },
    {
      name: "io.github.alexbashchuk.pages",
      items: [
        {
          name: "LandingPage.java",
          purpose:
            "Page Object Model for the portfolio Home page: selects an Experience block by aria-label, clicks 'Choose work description', validates menu items (Short Details/Long Story/Hide), and opens certificate modals to screenshot the modal element for later image matching.",
        },
      ],
    },
    {
      name: "io.github.alexbashchuk.tests",
      items: [
        {
          name: "ButtonsFunctionalityCheckTests.java",
          purpose:
            "Test class extending BaseUiTest. Includes: (1) API request check for site status, (2) basic page title check, (3) parameterized UI validations for experience blocks, (4) parameterized certificate modal capture + image matching vs templates.",
        },
      ],
    },
  ];

  const projectTree = `playwright-java-demo
└─ src/test/java
   ├─ io.github.alexbashchuk.base
   │  ├─ AllureConsoleLogsExtension.java
   │  ├─ AllurePlaywrightFailureExtension.java
   │  ├─ BaseUiTest.java
   │  └─ ImageToTemplateMatcher.java
   ├─ io.github.alexbashchuk.pages
   │  └─ LandingPage.java
   └─ io.github.alexbashchuk.tests
      └─ ButtonsFunctionalityCheckTests.java`;

  return (
    <main className="home">
        <button
          className="navButton"
          onClick={() => navigate("/")}
        >
          ⌂ Home
        </button>

      <section className="hero" aria-label="Java Playwright Project">
        <h1 className="name">Java + Playwright Automation Project</h1>
        <p className="title">
          Portfolio UI validation • Modal certificate checks • Allure reporting
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub Repo
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
          This project tests my portfolio site content: buttons functionality validation and
          modal pop-ups content (captured by Playwright certificates pictures) validation against
          originals. After the test all information processed with the project included Allure
          reporting framework to present it in the HTML easily readable view.
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

      <section className="card" aria-label="Java Packages and Classes">
        <h2>Java Packages and Classes</h2>

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

      <section className="card" aria-label="Notes">
        <h2>Notes</h2>
        <ul className="bullets">
          <li>
            Failure screenshots are saved to <code>target/screenshots</code> and also attached to
            the Allure report automatically (JUnit 5 extension).
          </li>
          <li>
            Certificate validation is done by capturing the certificate modal screenshot and comparing
            it to an original template image using OpenCV template matching.
          </li>
          <li>
            In the current test implementation, template/capture paths are local absolute paths.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}