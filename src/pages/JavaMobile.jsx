import "./Home.css";
import { useNavigate } from "react-router-dom";
import rcclMobileTestPptx from "../assets/presentations/RCCL-Mobile-Test.pptx?url";

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
        <h1 className="name">
          Java + Selenium + Appium + Charles Proxy + TestNG Automation Project
        </h1>
        <p className="title">
          Android emulator bootstrap • Mobile app testing • Proxy-based traffic validation
        </p>

        <div className="contactRow" aria-label="Project links">
          <a className="certLink" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub Repo
          </a>
          <span className="contactDot" aria-hidden="true">•</span>
          <a className="certLink" href={youtubeUrlForTests} target="_blank" rel="noreferrer">
            Test Run Video
          </a>
          <span className="contactDot" aria-hidden="true">•</span>
          <a className="certLink" href={youtubeUrlForReport} target="_blank" rel="noreferrer">
            TestNG Report Analysis
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project demonstrates a Java-based mobile automation framework for Android testing
          with Appium, Selenium WebDriver, TestNG, and Charles Proxy integration. It automates
          Royal Caribbean mobile app validation, including guest flows and backend request
          verification through captured proxy traffic.
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
          <li>Charles Proxy start</li>
          <li>AVD Emulator start</li>
          <li>Appium server start</li>
          <li>Test execution and validation through Charles Proxy log parsing</li>
          <li>Cleanup after test execution (AVD and Appium shutdown)</li>
          <li>TestNG report creation</li>
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
            TestNG report analysis:{" "}
            <a className="certLink" href={youtubeUrlForReport} target="_blank" rel="noreferrer">
              YouTube video
            </a>
          </li>
          <li>
            PowerPoint presentation:{" "}
            <a className="certLink" href={rcclMobileTestPptx} target="_blank" rel="noreferrer">
              RCCL-Mobile-Test.pptx
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
            The framework is built for <strong>Cruise Guest Experience</strong> mobile validation.
          </li>
          <li>
            The environment bootstrap is a major part of the project: emulator startup, Appium
            startup, Charles Proxy connection, port resolution, ADB readiness, and cleanup are
            handled in code.
          </li>
          <li>
            The framework is prepared for extension to additional mobile flows and real device
            execution.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}