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
            {!panelOpen && (
              <span className={`chev ${menuOpen ? "open" : ""}`} aria-hidden="true">
                ▾
              </span>
            )}
          </button>

          {panelOpen && (
            <button
              className="expClose"
              type="button"
              aria-label="Close work description"
              onClick={() => {
                setPanelOpen(false);
                setMenuOpen(false);
              }}
            >
              X
            </button>
          )}

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
    `Senior SDET / QA Automation Architect with 10+ years of experience delivering automation for web, API, mobile, desktop, and enterprise applications. 
    Hands-on in Playwright, Selenium, Appium, Cypress, TypeScript, Python, Java, and C#, with recent work in Playwright migration and AI-assisted test generation. 
    Builds maintainable test frameworks, integrates automated testing into Azure DevOps and Jenkins pipelines, and has reduced manual and regression effort by up to 70% 
    while mentoring distributed QA teams`;

  const skills = [
    { title: "Automation Frameworks",
      items: ["Playwright", "Selenium", "Appium", "Cypress", "Tricentis Tosca", "WinAppDriver", "K6", "JMeter", "NeoLoad"],
    },
    { title: "Languages and test frameworks", items: ["TypeScript", "Python", "Java", "C#", "JavaScript", "TestNG", "JUnit", "NUnit", "Pytest", "BDD", "Cucumber", "Gherkin"]
    },
    { title: "AI-assisted testing",
      items: ["Cursor", "GitHub Copilot", "Azure Foundry Agents (Azure AI Foundry)", "Microsoft Agent Framework", "MCP servers", "LLM-based test generation"]
    },
    { title: "CI/CD and cloud",
      items: ["Azure DevOps", "Jenkins", "GitHub", "Docker", "Terraform", "Maven", "Git"]
    },
    { title: "API, data and observability",
      items: ["REST APIs", "Postman", "REST Assured", "SoapUI", "Swagger/OpenAPI", "SQL", "Oracle", "MongoDB", "NoSQL", "Splunk", "Charles Proxy", "Logcat"]
    },
    { title: "Leadership & Professional Skills",
      items: ["Team Leadership", "Staff Review", "Cross-Functional Collaboration", "Organization", "Prioritization", "Multi-Tasking", "Deadline Management"]
    },
  ];

  const experience = [
    {
      company: "Williams Companies",
      role: "QA Automation Architect (QA Consultant on contract)",
      location: "Tulsa, OK (Remote)",
      dates: "12/2025 – Present",
      details: `
        Co-architected the modernization of enterprise QA automation: defined modernization of legacy test infrastructure by migrating enterprise Tricentis Tosca test coverage to more flexible, scalable, 
        and less flaky Playwright and TypeScript framework. Incorporated GitHub Copilot and Playwright Agents to reduce test flakiness, improve code maintainability, and accelerate delivery cycles.
        Designed and implemented core components of a cloud-native Next-Gen semi-autonomous QA Framework: designed cloud-native, with self-healing elements automation framework within a Terraform-managed Azure environment, 
        enabling E2E centralized test execution, including UI, API, and Azure DB (using SQL), reporting, and reducing manual troubleshooting.
        Integrated into QA framework AI & Model Context Protocol (MCP) Architecture: using C# and .NET 8 integrated custom MCP server to connect QA framework with autonomous AI agents to empower it by LLM-driven test cases generation for UI, API, and load tests.
        `,
      longWorkStory: `
        I gained strong experience in AI-assisted QA framework development at Williams Companies, where I co-architected and developed a custom QA framework environment from the ground up - not simply automated test scripts.
        I used Blazor WebAssembly and C# to build the framework user interface, services, and API layers. During development, I made extensive use of agentic AI coding in Cursor IDE and created a structured set of Markdown-based 
        rules within the OpenSpec framework to guide and supervise AI-assisted development.
        The framework was designed to support the full testing lifecycle: test case creation, execution, maintenance, and archival. For test-case change control, I applied an approach I had previously used at Southern Company: 
        mapping the Application Under Test (AUT) Azure DevOps repository to UI, API, and Azure DB components. 
        As an enhancement, I incorporated Playwright Agents to help create test cases using data and workflows observed through the deployed application web interface.
        I also implemented an AI-agent feature that analyzed user manuals and user stories to generate BDD Gherkin-based test case descriptions. This helped preserve test context and support updates when the AUT changed.
        For TypeScript-based Playwright automation tests creation, I used the Gherkin test cases, AUT source code in Azure DevOps, and Playwright Agents within VS Code. By analyzing AUT code changes, I developed a process 
        that could identify affected tests and accelerate their updates, going beyond a typical self-healing approach.
        As a result, Williams Companies gained a more responsive test automation capability, with the ability to update automated tests quickly and run a full regression suite within one or two days after a new application release.

      `,
    },
    {
      company: "Southern Company",
      role: "Senior QA Automation Analyst",
      location: "Atlanta, GA (Remote)",
      dates: "07/2024 – 11/2025",
      details: `
        Designed and led implementation of Playwright Python-based automation for dynamic web applications, REST API services, and Oracle Database, reducing regression execution time by 60%.
        Developed a Java application to parse Splunk logs and connected it to the AI Agentic problems analysis for more easy debugging.
        Integrated automated suites into Azure DevOps pipelines; guided engineers in engineering-driven testing practices.
        Mapped requirements to test coverage using an integrated LLM analysis tool, identifying coverage gaps, edge cases, and risk areas.
        `,
      longWorkStory: ` 
        At Southern Company, I was responsible for designing and implementing Python-based Playwright automation that became a core part of the regression strategy for Angular-based web applications, 
        supporting REST APIs for services, and Oracle Database data validation. I personally built and maintained reusable test components, including page objects, API clients, environment configurations, and custom waits. 
        I authored end-to-end and integration-level tests covering critical user workflows and backend validations. Also, I adopted a BDD approach for test case creation using Gherkin scripts, 
        mapped AUT code to the UI, and utilized AI-driven code change analysis to keep test cases updated immediately following application updates. 
        Furthermore, I integrated each test case into Azure DevOps pipelines, executing them automatically on every build and release candidate to catch issues as early as possible.
      `
    },
    {
      company: "Lockheed Martin",
      role: "Senior QA Automation Engineer",
      location: "Fort Worth, TX (Remote)",
      dates: "07/2023 – 06/2024",
      details: `
        "Enhanced C# and WinAppDriver automation for Windows manufacturing-control applications and aerial IoT device interconnection systems in Docker environments.
        Using Grafana K6 and JavaScript created API regression automation for the 3DEXPERIENCE production-process application and its Jama PLM integration bridge.
        Reduced manual testing workload by approximately 70% and mentored five QA engineers on test architecture, coding standards, and maintainability.
        `,
      longWorkStory: ` 
        I joined Lockheed Martin as a Senior QA Automation Engineer supporting engineering and manufacturing platforms in Docker-based environments.
        I designed and implemented an experimental C# and WinAppDriver automation test framework for a manufacturing-control application, which served as the Windows native component of a hybrid application. 
        This project was created to bypass the limitations Tricentis Tosca encounters when working with native Windows applications. This initiative reduced the manual testing workload by approximately 70%.
        Aldo, I re-designed Tosca automation long test sets to much more short independent test cases with own input datasets, which allowed to run them in parallel and reduce the total execution time. 
        I also created API regression automation using Grafana k6 and JavaScript for the 3DEXPERIENCE production-process application and its Jama PLM integration bridge.
        Additionally, I mentored four QA engineers on test architecture, coding standards, and test maintainability best practices.
      `
    },
    {
      company: "Fiserv",
      role: "Senior QA Automation Engineer",
      location: "Coral Springs, FL",
      dates: "02/2020 – 07/2023",
      details: `
        Built Tosca and Cypress JavaScript automation frameworks for financial and retail applications, covering UI, REST APIs, NoSQL data, mainframe forms, and automated Splunk log analysis. 
        Created iOS and Android loyalty-application tests with Tosca Mobile Engine and added NeoLoad performance tests for loyalty services. Integrated automated test execution into Jenkins CI/CD jobs and 
        supervised a distributed team of five QA engineers.
        `,
      longWorkStory: ` 
        At Fiserv (First Data), I worked on large-scale banking and financial services platforms spanning mainframe systems, cloud applications, and modern web architectures.
        For the Bank of America loyalty program, I built Tosca automation suites covering Web UI, Host UI, APIs, NoSQL databases (MongoDB), and AWS-hosted services. 
        For major retail clients such as TJX and Marshalls, I developed JavaScript-based Cypress automation for React-driven e-commerce financial platforms with highly dynamic UI behavior. 
        I created iOS and Android loyalty-application tests with Tosca Mobile Engine and added NeoLoad performance coverage for loyalty services.
        To support CI/CD maturity, I integrated all my automated tests executions into Jenkins pipelines and implemented automated Splunk log analysis to control back-end failures.
        I also supervised a distributed team of five outsourced QA engineers, enforcing enterprise automation standards and review processes.
      `
    },
    {
      company: "Royal Caribbean Ltd.",
      role: "QA Automation System Engineer",
      location: "Miami, FL",
      dates: "09/2017 – 02/2020",
      details: `
        Architected and built a Java-based automation framework from the ground up for Android and iOS Cruise applications, validating the Adobe Analytics data layer with Selenium, Appium, Maven, TestNG, and Charles Proxy.
        Reduced manual regression effort by 70%.
      `,
      longWorkStory: ` 
        At Royal Caribbean, I implemented the Analytics team's test automation goals to run cruise applications and validate Adobe Analytics data by parsing traffic captured via Charles Proxy. 
        Because security restrictions prevented direct access to the Adobe Analytics server, I had to use a local Charles Proxy instance to capture the analytics layer. Since Charles Proxy lacked an API or CLI, 
        standard QA tools could not be used to capture this data during automated tests.
        To solve this, I leveraged the Appium and Selenium frameworks bootstrapped with Java to trigger analytics events in mobile applications while interacting with the Charles Proxy web interface to save .csv logs 
        for subsequent analysis. I built a QA automation framework supporting over 2,000 test cases with diverse coverage, which I successfully integrated into Jenkins continuous delivery pipelines. 
        This reduced regression testing time from three human-days to just a few hours. 
        Additionally, using Java Swing, JNA, and AWT libraries, I created an executable GUI tool that allowed non-technical company staff to run the QA framework locally with ease.

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
