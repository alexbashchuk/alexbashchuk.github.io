import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function JavaMobile() {
  const githubUrl = "https://github.com/alexbashchuk/Java-TestNG-Selenium-Appium-ProxyServer";
  const youtubeUrlForTests = "https://youtu.be/OImSZfvOeYk";
  const youtubeUrlForReport = "https://youtu.be/-Y6T5DNOoWA";
  const navigate = useNavigate();

  const techStack = [
    "Java 1.8",
    "Appium for Java",
    "Selenium WebDriver",
    "TestNG",
    "Maven for dependencies and build management",
    "Android Emulator (AVD)",
    "Royal Caribbean Mobile App.",
    "ADB / Appium server bootstrap utilities",
    "Charles Proxy for network inspection",
    "Java Swing + AWT for custom GUI Interface",
  ];

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

      <section className="hero" aria-label="Java Mobile Automation Project">
        <h1 className="name">Java + Selenium + Appium + Charles Proxy + TestNG Automation Project</h1>
        <p className="title">
          Android emulator bootstrap • Mobile Chrome web testing • Portfolio UI validation
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={youtubeUrlForTests} target="_blank" rel="noreferrer">
            Test Run Video (YouTube)
          </a>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <a className="certLink" href={youtubeUrlForReport} target="_blank" rel="noreferrer">
            TestNG Report Analysis Video (YouTube)
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project demonstrates a Java mobile web automation framework that starts an Android
          emulator, launches an Appium server, opens the Royal Caribbean Mobile App on the emulator,
          and validates basic functionality. The current tests focus on Guest Experience with Cruise
          Planner and Day Planner.
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

      <section className="card" aria-label="Framework Flow">
        <h2>Framework Flow</h2>
        <ul className="bullets">
          <li>AVD emulator cleanup</li>
          <li>Charles Proxy Start</li>
          <li>AVD Emulator Start</li>
          <li>Appium server start</li>
          <li>Test Cases Execution and Information Validation through the Charles Proxy Server log file parsing</li>
          <li>Cleanup After Test Execution (AVD and Appium server stop)</li>
          <li>TestNG Report creation</li>
        </ul>
      </section>

      <section className="card" aria-label="Demo Links">
        <h2>Demo Links</h2>
        <ul className="bullets">
          <li>
            Test execution demo:{" "}
            <a className="certLink" href={youtubeUrlForTests} target="_blank" rel="noreferrer">
              YouTube video
            </a>
          </li>
          <li>
            TestNG Report Analysis:{" "}
            <a className="certLink" href={youtubeUrlForReport} target="_blank" rel="noreferrer">
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
            The framework is built for <strong>Cruise Guest Experience Mobile Hybrid App</strong>.
          </li>
          <li>
            The environment bootstrap is a major part of the project: emulator startup, Appium
            startup, Charles Proxy bootstrap with the mobile device, ports resolution, adb
            readiness, and cleanup - all handled in code.
          </li>
          <li>
            The Page Object uses scrolling/swiping support because some elements are far
            down the mobile pages and need to be brought into view before interaction.
          </li>
          <li>
            This project is a cut for the Portfolio demo. All business sensitive files (i.e.
            certificates, keystores, etc.) are removed to avoid any security issues. The framework
            is built to be easily extendable for real devices.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}