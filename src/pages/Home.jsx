import { useId, useState } from "react";
import "./Home.css";
import profilePhoto from "../assets/my_photo/2025.png";
import as1Pdf from "../assets/certificates/AS1.pdf";
import as2Pdf from "../assets/certificates/AS2.pdf";
import tds1Pdf from "../assets/certificates/TDS1.pdf";
import tds2Pdf from "../assets/certificates/TDS2.pdf";
import qtestPdf from "../assets/certificates/qTest.pdf";
import ctflPdf from "../assets/certificates/CTFL.pdf";

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
  const [activeCert, setActiveCert] = useState(null);

  function openCert(pdf) {
    setActiveCert(pdf);
    document.body.style.overflow = "hidden";
  }

  function closeCert() {
    setActiveCert(null);
    document.body.style.overflow = "";
  }

  const summary =
    "Software Development Engineer in Test (SDET) with 13+ years of experience building code-driven automation frameworks for web, API, mobile, and enterprise platforms. Expert in Java, C#, Python, and TypeScript with a strong focus on Playwright and Selenium based automation. Proven ability to integrate automation into CI/CD pipelines and mentor engineers on modern QA engineering practices, including AI models engineering help.";

  const skills = [
    {
      title: "Automation Frameworks",
      items: ["Playwright (Java, C#)", "Selenium", "Appium (Java)", "Cypress (JS)"],
    },
    { title: "Programming", items: ["Java", "C#", "Python", "JavaScript", "Groovy"] },
    {
      title: "Testing & CI/CD",
      items: ["JUnit", "TestNG", "NUnit", "PyTest", "Maven", "Azure DevOps", "Jenkins"],
    },
    { title: "Databases", items: ["Oracle", "MongoDB", "SQL/NoSQL queries"] },
    { title: "APIs", items: ["REST APIs for SaaS", "SoapUI", "Postman", "RestAssured"] },
  ];

  const experience = [
    {
      company: "Southern Company",
      role: "Senior QA Automation Analyst",
      location: "Atlanta, GA (Remote)",
      dates: "07/2024 – 11/2025",
      details: ` Designed and implemented Java-based Playwright automation for Angular web applications, REST APIs for SaaS applications, and Oracle databases achieving ~80% regression execution time reduction.
          Integrated automation into Azure DevOps pipelines and led engineers in adopting engineering-driven testing standards.
          Created requirements-to-test coverage mapping using an internally integrated LLM-based analysis tool to identify gaps, edge cases, and risk areas.`,
      longWorkStory: ` 
        I joined Southern Company in July 2024 as a contract Senior QA Automation Analyst to design and implement automation testing for the Energy Assistance Program (EAP) web portal. At that time, Southern Company had existing automation efforts for internal corporate portals using Java + Selenium and for the Builders Connect portal using Java + Playwright, but the EAP portal relied entirely on manual testing.

        Because the EAP application was heavily built with Angular and dynamic JavaScript-driven UI rendering, I selected Java with Playwright as the core automation technology. Compared to Selenium, Playwright provided superior handling of dynamic DOM updates and asynchronous UI behavior, significantly improving locator stability and test reliability.

        Starting from scratch, I architected and developed 16 scalable Java Playwright automation suites, using JUnit 5 for test control and Maven for build orchestration.
        I used Playwright requests to validate API interface of the EAP portal and Java JDBC connection to validate results of UI operations in the Oracle databases (users, payments).
        
        I published the automation framework to Azure Repos, including the Maven Wrapper, ensuring consistent builds across local environments and Azure DevOps pipelines.
        The automation reduced regression execution time by approximately 80% compared to manual testing and enabled CI/CD integration through Azure DevOps pipelines. 
        
        My contract concluded in November 2025 following federal funding cuts to the EAP program.
      `
    },
    {
      company: "Lockheed Martin",
      role: "Senior QA Automation Engineer",
      location: "Fort Worth, TX (Remote)",
      dates: "07/2023 – 06/2024",
      details:
        "Developed C# Playwright + WinAppDriver automation for hybrid web and Windows desktop applications supporting engineering and manufacturing systems in containerized environments. Mentored 5 QA engineers on automation architecture and maintainability best practices.",
      longWorkStory: ` 
        I joined Lockheed Martin as a Senior QA Automation Engineer supporting engineering and manufacturing platforms built around Dassault 3D CAD systems, deployed within Docker-based environments and exposed through both Web UI and APIs.

        One of my primary responsibilities was developing a C#-based automation framework using Playwright and WinAppDriver to test a hybrid Web + Windows native supply coordination system.

        Aldo, I made a test set for Dassault application API test cases which was validating program interconnections with the supply line application.

        During my first half-year of the work I mentored 5 QA engineers on automation architecture and maintainability best practices
      `
    },
    {
      company: "Fiserv",
      role: "Senior QA Automation Engineer",
      location: "Coral Springs, FL",
      dates: "02/2020 – 07/2023",
      details:
        "Built Tosca (Low-Code) and Cypress (JavaScript based) automation frameworks for financial applications, REST APIs, NoSQL databases and Mainframe forms. Integrated automation executions into CI/CD Jenkins jobs. Supervised distributed QA team of 5 engineers.",
      longWorkStory: ` 
      At Fiserv (First Data), I worked on large-scale banking and financial services platforms spanning mainframe systems, cloud applications, and modern web architectures.

      For the Bank of America loyalty program, I built Tosca automation suites covering Web UI, Host UI, APIs, NoSQL databases (MongoDB), and AWS-hosted services. 
      For major retail clients such as TJX and Marshalls, I developed JavaScript-based Cypress automation for React-driven e-commerce financial platforms with highly dynamic UI behavior.

      I led the migration of API testing from SoapUI and Postman into reusable Tosca API modules, standardized Salesforce LWC automation, and authored a custom Java-based Terraform automation tool to accelerate environment reconfiguration through .tf.json files.

      To support CI/CD maturity, I integrated Tosca execution into Jenkins pipelines, implementing advanced log parsing using a custom Java ANTLR-based application. 

      I also supervised a distributed team of five outsourced QA engineers, enforcing enterprise automation standards and review processes.
      `
    },
    {
      company: "Ford Motor Company",
      role: "QA Automation Engineer",
      location: "Sunrise, FL",
      dates: "02/2019 – 02/2020",
      details: "Optimized Python PyTest automation for ECU and embedded systems using CAN protocol.",
      longWorkStory: ` 
      At Ford Motor Company, I supported embedded automotive systems testing focused on ECU, multimedia, and vehicle network integrations.

      I managed Jenkins controller and agent infrastructure using Groovy and DSL scripting and optimized Python PyTest automation leveraging CAN and CANtools libraries, improving test reliability by approximately 30%.

      Also, my work included hands-on configuration of ECU->Multimedia->Network lab environments setup and connections to the Jenkins agents, enabling firmware and software validation over the CAN protocol within Ford’s internal testing facilities.
      `
    },
    {
      company: "Royal Caribbean Ltd.",
      role: "QA Automation System Engineer",
      location: "Miami, FL",
      dates: "09/2017 – 02/2019",
      details:
        "Created from scratch Java-based, Maven built, TestNG organized Selenium and Appium automation frameworks for the Royal Guest Experience mobile and web platforms, significantly reducing manual regression effort.",
      longWorkStory: ` 
      At Royal Caribbean, I created a complete automation testing framework from scratch for the Royal Guest Experience iOS and Android applications, including UI, API, and analytics validation using Java with Appium, Selenium frameworks, and CLI connection to Charles Proxy (MITM). 
      The framework supported over 2,000 automated test executions with different test coverages and was integrated into continuous delivery pipelines, reducing regression time sevenfold. 
      
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
      details: "Supported automated testing of medical applications and patient portals using C# and Ranorex.",
      longWorkStory: ` 
      At Canfield Scientific, I worked on medical software and device-integrated applications, contributing to test automation strategies in a regulated environment.

      I participated in automation development for Windows medical applications, ANSI X12 medical claims portals, and patient healthcare portals, using Ranorex with C#, Selenium for .NET, and NUnit for test management.
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
            <button className="certLink" onClick={() => openCert(as1Pdf)}>AS1</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(as2Pdf)}>AS2</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(tds1Pdf)}>TDS1</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(tds2Pdf)}>TDS2</button>,
            {" "}
            <button className="certLink" onClick={() => openCert(qtestPdf)}>qTest</button>
          </li>
          <li>
            ASTQB:
            {" "}
            <button className="certLink" onClick={() => openCert(ctflPdf)}>CTFL</button>
          </li>
        </ul>
      </section>

      {activeCert && (
        <div className="certModal" role="dialog" aria-modal="true">
          <div className="certModalHeader">
            <button className="certCloseBtn" onClick={closeCert}>
              CLOSE ✕
            </button>
          </div>
            <iframe
              src={activeCert}
              title="Certificate PDF"
              className="certFrame"
            />
        </div>
)}

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Boschuk</span>
      </footer>
    </main>
  );
}
