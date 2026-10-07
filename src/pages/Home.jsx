import { useId, useState } from "react";
import "./Home.css";
import { useEffect, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import profilePhoto from "../assets/my_photo/2025.png";
import as1Img from "../assets/certificates/AS1.jpg";
import as2Img from "../assets/certificates/AS2.jpg";
import tds1Img from "../assets/certificates/TDS1.jpg";
import tds2Img from "../assets/certificates/TDS2.jpg";
import qtestImg from "../assets/certificates/qTest.jpg";
import ctflImg from "../assets/certificates/CTFL.jpg";

function ExperienceItem({ company, role, location, dates, details, longWorkStory }) {
  const panelId = useId();
  const menuId = useId();

  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [view, setView] = useState("details"); // 'details' | 'story'

  const text = view === "story" ? longWorkStory : details;

  function openPanel(nextView) {
    setView(nextView);
    setPanelOpen(true);
    setMenuOpen(false);
  }

  return (
    <section className="expCard" aria-label={`Experience at ${company}`}>
      <header className="expHeader">
        <div className="expTitleBlock">
          <h3 className="expCompany">{company}</h3>
          <div className="expMeta">
            <span className="expMetaItem">{role}</span>
            <span className="expDot" aria-hidden="true">
              •
            </span>
            <span className="expMetaItem">{location}</span>
            <span className="expDot" aria-hidden="true">
              •
            </span>
            <span className="expMetaItem">{dates}</span>
          </div>
        </div>

        <div className="expToggleWrap">
          <button
            className="expToggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {panelOpen
              ? `Work description: ${view === "story" ? "Long Story" : "Short Details"}`
              : "Choose work description"}
            <span className={`chev ${menuOpen ? "open" : ""}`} aria-hidden="true">
              ▾
            </span>
          </button>

          {menuOpen && (
            <div id={menuId} className="expMenu" role="menu" aria-label="Work description options">
              <button
                type="button"
                className="expMenuBtn"
                role="menuitem"
                onClick={() => {
                  openPanel("details");
                  setMenuOpen(true);
                }}
              >
                Short Details
              </button>
              <button
                type="button"
                className="expMenuBtn"
                role="menuitem"
                onClick={() => {
                  openPanel("story");
                  setMenuOpen(true);
                }}
              >
                Long Story
              </button>

              {panelOpen && (
                <button
                  type="button"
                  className="expMenuBtn expMenuBtnSecondary"
                  role="menuitem"
                  onClick={() => {
                    setPanelOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  Hide description
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <div id={panelId} className={`expBody ${panelOpen ? "open" : ""}`}>
        <h4 className="expBodyTitle">
          {view === "story" ? "Work story" : "Work description"}
        </h4>
        <p className="expText" style={{ whiteSpace: "pre-line" }}>
          {text}
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const automationProjectsRef = useRef(null);
  const [activeCert, setActiveCert] = useState(null);

  useEffect(() => {
    if (location.state?.scrollTo === "automation-projects") {
      automationProjectsRef.current?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }
  }, [location]);

  function openCert(pdf) {
    setActiveCert(pdf);
    document.body.style.overflow = "hidden";
  }

  function closeCert() {
    setActiveCert(null);
    document.body.style.overflow = "";
  }

  const summary =
    "Software Development Engineer in Test (SDET) with 14 years of experience building code-driven automation frameworks for web, API, mobile, and enterprise platforms. Expert in Java, C#, Python, TypeScript, and JavaScript with a strong focus on Playwright and Selenium based automation. Proven ability to integrate automation into CI/CD pipelines and mentor engineers on modern QA engineering practices, including AI models engineering help.";

  const skills = [
    {
      title: "Automation Frameworks",
      items: ["Playwright (Java, C#)", "Selenium (Java, C#, Python)", "Appium (Java, C#)", "Cypress (JS, TS)", "Tosca (Low-Code)"],
    },
    { title: "Programming", items: ["Java", "C#", "Python", "JavaScript", "TypeScript", "Groovy"] },
    {
      title: "Test Organizing",
      items: ["JUnit", "TestNG", "NUnit", "PyTest", "Maven"],
    },
    {
      title: "CI/CD",
      items: ["Azure DevOps", "Jenkins"],
    },
    { title: "Databases", items: ["Oracle", "MongoDB", "SQL/NoSQL queries"] },
    { title: "APIs", items: ["REST APIs for SaaS", "SoapUI", "Postman", "RestAssured"] },
  ];

  const experience = [
    {
      company: "Williams Companies",
      role: "Senior QA Automation Engineer",
      location: "Tulsa, OK (Remote)",
      dates: "12/2025 – Present",
      details:
        "Migrated Tricentis Tosca test coverage to Playwright with TypeScript, using VS Code, GitHub Copilot, and Playwright Agents to improve maintainability, reduce flakiness, and accelerate test development. Helped build a custom QA automation framework for test-case creation, self-healing, centralized execution, and control in a Terraform-managed Azure environment. Implemented AI agents and custom MCP server integrations supporting LLM-based UI, API, and load-test generation and Azure service connections.",
      longWorkStory: `
        At Williams Companies, I am working as a Senior QA Automation Engineer on modernizing enterprise test automation.

        I migrated Tricentis Tosca test coverage to a TypeScript-based Playwright approach, using VS Code, GitHub Copilot, and Playwright Agents to make automated tests easier to maintain, less flaky, and faster to develop.

        I also helped build a custom QA automation framework that supports test-case creation, self-healing, centralized execution, and control. The framework ran in a Terraform-managed Azure environment.

        In addition, I implemented AI agents and custom MCP server integrations to support LLM-based generation of UI, API, and load tests and to connect the solution with Azure services.
      `,
    },
    {
      company: "Southern Company",
      role: "Senior QA Automation Analyst",
      location: "Atlanta, GA (Remote)",
      dates: "07/2024 – 11/2025",
      details: `Designed and led implementation of Python- and Playwright-based automation for dynamic web applications and SaaS REST APIs, reducing regression execution time by 60%.
          Developed a Java module to parse Splunk logs, integrated automated suites into Azure DevOps pipelines, and guided engineers in engineering-driven testing practices.
          Created requirements-to-test coverage mapping using an internally integrated LLM-based analysis tool to identify gaps, edge cases, and risk areas.`,
      longWorkStory: ` 
        I joined Southern Company in July 2024 as a contract Senior QA Automation Analyst to design and implement automation testing for dynamic web applications and SaaS REST APIs.

        I designed and led the implementation of a Python and Playwright automation solution for dynamic, JavaScript-driven user interfaces and API validation. The approach improved reliability for asynchronous UI behavior while creating reusable automated coverage.

        I developed a Java module to parse Splunk logs and integrated automated test suites into Azure DevOps pipelines. These changes reduced regression execution time by approximately 60% and strengthened engineering-driven testing practices across the team.
        
        I also mapped requirements to test coverage through an integrated LLM analysis tool, identifying coverage gaps, edge cases, and risk areas.
      `
    },
    {
      company: "Lockheed Martin",
      role: "Senior QA Automation Engineer",
      location: "Fort Worth, TX (Remote)",
      dates: "07/2023 – 06/2024",
      details:
        "Enhanced C# and WinAppDriver automation for Windows manufacturing-control applications and aerial IoT device interconnection systems in Docker environments. Created API regression automation for the 3DEXPERIENCE production-process application and its Jama PLM integration bridge using Grafana K6 and JavaScript. Reduced manual testing workload by approximately 70% and mentored five QA engineers on test architecture, coding standards, and maintainability.",
      longWorkStory: ` 
        I joined Lockheed Martin as a Senior QA Automation Engineer supporting engineering and manufacturing platforms in Docker-based environments.

        I enhanced C# and WinAppDriver automation for Windows manufacturing-control applications and aerial IoT device interconnection systems.

        I also created API regression automation with Grafana K6 and JavaScript for the 3DEXPERIENCE production-process application and its Jama PLM integration bridge.

        This work reduced manual testing workload by approximately 70%. During my first half-year, I mentored five QA engineers on test architecture, coding standards, and maintainability best practices.
      `
    },
    {
      company: "Fiserv",
      role: "Senior QA Automation Engineer",
      location: "Coral Springs, FL",
      dates: "02/2020 – 07/2023",
      details:
        "Built Tosca and Cypress JavaScript automation frameworks for financial and retail applications, covering UI, REST APIs, NoSQL data, mainframe forms, and automated Splunk log analysis. Created iOS and Android loyalty-application tests with Tosca Mobile Engine and added NeoLoad performance tests for loyalty services. Integrated automated test execution into Jenkins CI/CD jobs and supervised a distributed team of five QA engineers.",
      longWorkStory: ` 
      At Fiserv (First Data), I worked on large-scale banking and financial services platforms spanning mainframe systems, cloud applications, and modern web architectures.

      For the Bank of America loyalty program, I built Tosca automation suites covering Web UI, Host UI, APIs, NoSQL databases (MongoDB), and AWS-hosted services. 
      For major retail clients such as TJX and Marshalls, I developed JavaScript-based Cypress automation for React-driven e-commerce financial platforms with highly dynamic UI behavior.

      I created iOS and Android loyalty-application tests with Tosca Mobile Engine and added NeoLoad performance coverage for loyalty services.

      To support CI/CD maturity, I integrated automated execution into Jenkins pipelines and implemented automated Splunk log analysis.

      I also supervised a distributed team of five outsourced QA engineers, enforcing enterprise automation standards and review processes.
      `
    },
    {
      company: "Royal Caribbean Ltd.",
      role: "QA Automation System Engineer",
      location: "Miami, FL",
      dates: "09/2017 – 02/2020",
      details:
        "Architected and built a Java-based automation framework from the ground up for Android and iOS cruise applications, validating the Adobe Analytics data layer with Selenium, Appium, Maven, TestNG, and Charles Proxy. Reduced manual regression effort by 70%.",
      longWorkStory: ` 
      At Royal Caribbean, I created a complete automation testing framework from scratch for the Royal Guest Experience iOS and Android applications, including UI, API, and analytics validation using Java with Appium, Selenium frameworks, and CLI connection to Charles Proxy (MITM). 
      The framework supported more than 2,000 automated test executions with different coverage and was integrated into continuous-delivery pipelines, reducing manual regression effort by 70%.
      
      I created UI (using Java Swing, JNA, and AWT libraries) for the tests start and assembled a rack with several laptops where was connected iOS and Android devices. 
      The test goal been to run cruise application and validate Adobe Analytics information through the parsing Charles Proxy log files. That test automation application was delivered to manual test analysts who was executing it through the UI interface.
      
      Also, I created direct load/volume test for the Adobe Analytics API using JMeter within Java code through the JavaSamplerClient. That test was sending 1000 parallel API calls with different Analytics strings and saving report to the XML file. Then this file was parsed and validated against the log file from Adobe server (Royal Caribbean analytics account) to check lost analytics information.
      `
    },
    {
      company: "Canfield Scientific",
      role: "QA System Engineer",
      location: "Parsippany, NJ",
      dates: "06/2015 – 06/2017",
      details: "Contributed C# and Ranorex test scripts for medical applications and a patient portal in a regulated environment using HL7 data formats.",
      longWorkStory: ` 
      At Canfield Scientific, I worked on medical software and device-integrated applications, contributing to test automation strategies in a regulated environment.

      I contributed C# and Ranorex test scripts for Windows medical applications and a patient portal in a regulated environment using HL7 data formats.
      My work helped ensure accuracy, stability, and compliance across clinical imaging and healthcare data workflows.
      `
    },
    {
      company: "Zodiac Interactive",
      role: "QA Engineer",
      location: "Hicksville, NY",
      dates: "12/2011 – 06/2015",
      details: "UAT and regression testing for IPTV and set-top box platforms.",
      longWorkStory: ` 
      I began my QA career at Zodiac Interactive, working on IPTV and set-top box platforms in Agile environments.
      I executed extensive UAT testing, designed data-driven automation, and played a key role in preventing customer-facing defects. 
      Over time, I supervised and mentored a team of three QA engineers across onshore and offshore locations, establishing early leadership experience that shaped my later senior roles.
      `
    },
  ];

  return (
    <main className="home">
      <section className="hero" aria-label="Profile">
        <img
          className="avatar"
          src={profilePhoto}
          alt="Alex Boschuk headshot"
          width="200"
          height="240"
          loading="eager"
        />
        <h1 className="name">Alex Boschuk</h1>
        <p className="title">Senior SDET / QA Automation Engineer</p>

        <div className="contactRow" aria-label="Contact">
          <span>Boca Raton, FL</span>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <span>347-495-4965</span>
          <span className="contactDot" aria-hidden="true">
            •
          </span>
          <span>bostchuk@gmail.com</span>
          <span className="contactDot" aria-hidden="true"></span>
        </div>
        <p className="contactRow">US Citizen</p>
      </section>

      <section className="card" aria-label="Professional Summary">
        <h2>Professional Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="card" aria-label="Technical Skills">
        <h2>Technical Skills</h2>

        <div style={{ marginBottom: "12px" }}>
          <button
            className="navButton"
            onClick={() =>
              navigate("/", { state: { scrollTo: "automation-projects" } })
            }
          >
            My QA Automation Demo Projects
          </button>
        </div>

        <div className="skillsGrid">
          {skills.map((g) => (
            <div className="skillGroup" key={g.title}>
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card" aria-label="Professional Experience">
        <h2>Professional Experience</h2>
        {experience.map((job) => (
          <ExperienceItem key={`${job.company}-${job.dates}`} {...job} />
        ))}
      </section>

      <section className="card" aria-label="Education">
        <h2>Education</h2>
        <ul className="bullets">
          <li>B.S. Computer Science — University of the People (In Progress)</li>
          <li>B.S. in Business Administration, Data Science — Belarusian State Economic University</li>
        </ul>
      </section>

      <section className="card" aria-label="Certifications">
        <h2>Certifications</h2>
        <ul className="bullets certList">
          <li>
            Tricentis Tosca:
            {" "}
            <button className="certLink" onClick={() => openCert(as1Img)}>AS1</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(as2Img)}>AS2</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(tds1Img)}>TDS1</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(tds2Img)}>TDS2</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(qtestImg)}>qTest</button>
          </li>
          <li>
            ASTQB:
            {" "}
            <button className="certLink" onClick={() => openCert(ctflImg)}>CTFL</button>
          </li>
        </ul>
      </section>

      <section
        className="card"
        aria-label="Automation Projects Examples"
        ref={automationProjectsRef}
        >
        <h2>My QA Automation Demo Projects</h2>
        <ul className="bullets">
          <li>
            <span className="expCompany">
              My GitHub Portfolio Project (this website codebase):
            </span>{" "}
            <Link className="certLink" to="/portfolio-github">
              JavaScript + React + Vite
            </Link>
          </li>
          <li>
            <span className="expCompany">
              WebUI and Picture Validation QA Automation Project:
            </span>{" "}
            <Link className="certLink" to="/java-playwright">
              Java + Playwright + OpenCV + JUnit
            </Link>
          </li>
          <li>
            <span className="expCompany">
              Mobile Web App QA Automation Project:
            </span>{" "}
            <Link className="certLink" to="/csharp-mobile">
              C# + Selenium + Appium + NUnit
            </Link>
          </li>
          <li>
            <span className="expCompany">
              Mobile Hybrid App QA Automation Project:
            </span>{" "}
            <Link className="certLink" to="/java-mobile">
              Java + Selenium + Appium + Charles Proxy + TestNG
            </Link>
          </li>
          <li>
            <span className="expCompany">
              API QA Automation Project:
            </span>{" "}
            <Link className="certLink" to="/jmeter-jenkins">
              JMeter + Jenkins CI/CD
            </Link>
          </li>
          <li>
            <span className="expCompany">
              WebUI Cypress QA Automation Project:
            </span>{" "}
            <Link className="certLink" to="/cypress-typescript-cicd">
              Cypress + TypeScript + Allure + GitHub Actions
            </Link>
          </li>
        </ul>
      </section>

      {activeCert && (
        <div className="certModal" role="dialog" aria-modal="true" onContextMenu={(e) => e.preventDefault()}>
          <div className="certModalHeader">
            <button className="certCloseBtn" onClick={closeCert}>
              CLOSE ✕
            </button>
          </div>
            <img
              src={activeCert}
              alt="Certificate"
              className="certImage"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
        </div>
)}

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Boschuk</span>
      </footer>
    </main>
  );
}
