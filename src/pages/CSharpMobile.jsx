import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function CSharpMobile() {
  const githubUrl = "https://github.com/alexbashchuk/CSharp_Selenium_Appium_NUnit";
  const youtubeUrl = "https://youtu.be/WYbm4WLOnes";
  const navigate = useNavigate();

  const techStack = [
    "C# .NET 8",
    "Appium for C#",
    "Selenium WebDriver",
    "NUnit",
    "Android Emulator (AVD)",
    "Chrome mobile web testing",
    "ADB / Appium server bootstrap utilities",
    "Windows .bat / PowerShell test run helpers",
    "Visual Studio + GitHub",
  ];

  const packages = [
    {
      name: "Infrastructure.PreChecks",
      items: [
        {
          name: "Cli.cs",
          purpose:
            "Reusable command runner for external tools like adb, emulator, appium, and shell commands. Captures stdout/stderr, supports timeout handling, and kills hung processes safely.",
        },
        {
          name: "AndroidChecks.cs",
          purpose:
            "Android SDK / adb related validation helpers used before startup so the test environment fails early if required Android tooling is missing or not reachable.",
        },
        {
          name: "AppiumChecks.cs",
          purpose:
            "Pre-run validation for Appium availability and related prerequisites so the framework can confirm the Appium command chain is usable before trying to launch sessions.",
        },
        {
          name: "EmulatorChecks.cs",
          purpose:
            "Checks whether the requested AVD exists by querying available emulator profiles and throws a clear error if the configured emulator is missing.",
        },
        {
          name: "PortChecks.cs",
          purpose:
            "Resolves the requested Appium port or falls back to a free localhost port when the preferred one is already occupied.",
        },
      ],
    },
    {
      name: "Infrastructure.Utils",
      items: [
        {
          name: "AVDStart.cs",
          purpose:
            "Starts the Android emulator, waits until adb reports exactly one online emulator, verifies Android boot completion, and attempts device wake/unlock before tests begin.",
        },
        {
          name: "AppiumServerStart.cs",
          purpose:
            "Starts the Appium server process, monitors startup output, waits until the server is responsive, and preserves recent log lines for easier diagnostics if startup fails.",
        },
        {
          name: "EnvironmentBootstrap.cs",
          purpose:
            "Main orchestration layer that performs environment validation, starts the emulator, starts Appium, and returns the final runtime details needed by the tests.",
        },
        {
          name: "ProcessCleanupOnce.cs",
          purpose:
            "One-time global cleanup utility that kills leftover emulator and Appium processes before the run starts, while using a mutex guard to avoid disrupting parallel environments.",
        },
      ],
    },
    {
      name: "Infrastructure.Tests",
      items: [
        {
          name: "GlobalSetup.cs",
          purpose:
            "NUnit [SetUpFixture] that runs once per suite, performs global cleanup, bootstraps the emulator and Appium server, and stores shared runtime values like Appium port and emulator serial.",
        },
        {
          name: "BaseMobileTest.cs",
          purpose:
            "Abstract base test that creates the AndroidDriver session with Chrome mobile web capabilities, binds the driver to the bootstrapped emulator/Appium server, and opens the portfolio site before each test.",
        },
        {
          name: "POM_LandingPage.cs",
          purpose:
            "Page Object Model for the portfolio landing page. Handles mobile scrolling/swiping, locates company experience blocks, opens work description menus, and validates Short Details / Long Story / Hide Description flows.",
        },
        {
          name: "ButtonsFunctionalityCheckTests.cs",
          purpose:
            "Parameterized NUnit test suite that validates access to the portfolio site and checks work-description button behavior across multiple company experience cards.",
        },
      ],
    },
    {
      name: "Repo Root / Support Files",
      items: [
        {
          name: "Drivers/chromedriver.exe",
          purpose:
            "Local ChromeDriver binary used by Appium for automating Chrome on the Android emulator.",
        },
        {
          name: "BAT_AndroidEmulatorStart.bat / PS_AndroidEmulatorStart.ps1",
          purpose:
            "Helper scripts for starting the Android emulator outside or alongside the automated test workflow.",
        },
        {
          name: "BAT_AppiumServerRunWithAllowances.bat",
          purpose:
            "Convenience script for launching Appium with required allowances/settings on Windows.",
        },
        {
          name: "TEST_RUN.bat / Maximum dotnet test diagnostics.bat",
          purpose:
            "Batch helpers for executing the NUnit suite and collecting more verbose diagnostics during demo or troubleshooting runs.",
        },
        {
          name: "nunit.runsettings",
          purpose:
            "Run settings file used to control NUnit / test execution behavior for the solution.",
        },
      ],
    },
  ];

  const projectTree = `CSharp_Selenium_Appium_NUnit
├─ Drivers
│  └─ chromedriver.exe
├─ Infrastructure
│  ├─ PreChecks
│  │  ├─ AndroidChecks.cs
│  │  ├─ AppiumChecks.cs
│  │  ├─ Cli.cs
│  │  ├─ EmulatorChecks.cs
│  │  └─ PortChecks.cs
│  ├─ Tests
│  │  ├─ BaseMobileTest.cs
│  │  ├─ ButtonsFunctionalityCheckTests.cs
│  │  ├─ GlobalSetup.cs
│  │  └─ POM_LandingPage.cs
│  └─ Utils
│     ├─ AVDStart.cs
│     ├─ AppiumServerStart.cs
│     ├─ EnvironmentBootstrap.cs
│     └─ ProcessCleanupOnce.cs
├─ BAT_AndroidEmulatorStart.bat
├─ BAT_AppiumServerRunWithAllowances.bat
├─ TEST_RUN.bat
├─ Maximum dotnet test diagnostics.bat
├─ nunit.runsettings
└─ CSharp_Appium.csproj`;

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

      <section className="hero" aria-label="C# Mobile Automation Project">
        <h1 className="name">C# + Selenium + Appium + NUnit Automation Project</h1>
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
          <a className="certLink" href={youtubeUrl} target="_blank" rel="noreferrer">
            Test Run Video (YouTube)
          </a>
        </div>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This project demonstrates a C# mobile web automation framework that starts an Android
          emulator, launches an Appium server, opens Chrome on the emulator, and validates
          functionality on my portfolio website. The current tests focus on experience-card work
          description behavior, including menu actions such as <strong>Short Details</strong>,
          <strong> Long Story</strong>, and <strong>Hide Description</strong>.
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

      <section className="card" aria-label="C# Project Files and Classes">
        <h2>C# Project Files and Classes</h2>

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

      <section className="card" aria-label="Framework Flow">
        <h2>Framework Flow</h2>
        <ul className="bullets">
          <li>Global one-time cleanup removes ghost Appium and emulator processes.</li>
          <li>Environment checks validate AVD, Appium, Android tooling, and free port usage.</li>
          <li>Framework starts the Android emulator and waits for full device boot.</li>
          <li>Appium server starts and becomes reachable on the resolved localhost port.</li>
          <li>AndroidDriver opens Chrome on the emulator and navigates to my portfolio site.</li>
          <li>Parameterized NUnit tests validate work-description controls across experience cards.</li>
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
            The framework is built for Android <strong>mobile web</strong> automation rather than
            native-app automation in its current form.
          </li>
          <li>
            The environment bootstrap is a major part of the project: emulator startup, Appium
            startup, port resolution, adb readiness, and cleanup are all handled in code.
          </li>
          <li>
            The Page Object uses scrolling/swiping support because some portfolio elements are far
            down the mobile page and need to be brought into view before interaction.
          </li>
          <li>
            This project is designed as a demo-friendly automation run that shows realistic mobile
            infrastructure setup, not just isolated test methods.
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Bachuk</span>
      </footer>
    </main>
  );
}