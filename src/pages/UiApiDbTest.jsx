import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function UiApiDbTest() {
  const githubUrl = "https://github.com/alexbashchuk/playwright-typescript-e2e-test";
  const youtubeUrl = "https://youtu.be/SD_jLkdkRt4";
  const navigate = useNavigate();

  const techStack = [
    "Playwright",
    "TypeScript",
    "Docker",
    "UI Automation",
    "API Testing",
    "Database Validation",
    "Page Object Model",
    "JSON Fixtures",
  ];

  const testDescription = `This demonstration walks through automated testing of a locally hosted, Dockerized application using TypeScript and Playwright. The suite checks the user interface, verifies data directly in the database, and validates API behavior across the user account lifecycle.

We begin with user registration. The test reads users from a JSON data file and registers each account through the browser. For every registration, it checks that the application displays the expected success message. A separate negative test attempts to register an email address that already exists and checks for the message, Email already in use.

Next, the suite verifies database persistence. It looks up each registered user by email in the User table and compares the stored name, email address, and role with the expected values. It also checks that each user has a positive identifier. This confirms that registration is backed by the expected database records.

The third stage validates the API. Using the existing user's credentials, the test requests a bearer token and checks for an HTTP two hundred response. It verifies that the response contains an access token, then uses that token to retrieve the user by email. The returned response must contain the expected success message, email address, and name.

Next comes the account update workflow in the browser. The test signs in, verifies navigation to the dashboard, and opens the user's profile. It changes the email address and checks the update confirmation. The corresponding JSON test data is updated so that later checks use the current account details.

The test then opens the password dialog and verifies its heading and instructions. After changing the password, it checks that the application returns to the login page. It signs in with the new email address and password, verifies access to the dashboard, and signs out. This checks that the updated credentials work through the application's login flow.

A follow-up database test looks up the account using its updated email address and verifies that the stored email matches the latest test data.

Finally, the suite cleans up the accounts. For each test user, it retrieves the database identifier, signs in through the API, and sends a delete request. It checks that the response status is either two hundred or two hundred and one, then queries the database again to verify that the user record is gone. For the account modified earlier, it also restores the original credentials in the JSON fixtures.

Together, these tests cover account creation, duplicate registration handling, authenticated retrieval, profile changes, and deletion. Page objects organize browser interactions, while separate API and database helpers keep the test scenarios readable and focused on their assertions.`;

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

      <section className="hero" aria-label="Playwright TypeScript E2E Project">
        <h1 className="name">UI + API + DB Test with Playwright + TypeScript + Docker</h1>
        <p className="title">
          End-to-end account lifecycle testing • Browser + API + database validation
        </p>
      </section>

      <section className="card" aria-label="Project Description">
        <h2>Project Description</h2>
        <p>
          This automation suite validates a Dockerized web application end-to-end by combining
          browser-based UI checks, API authentication flows, and direct database assertions. It
          exercises the full user account lifecycle, from registration to sign-in, profile updates,
          password changes, and cleanup.
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

      <section className="card" aria-label="Test Description">
        <h2>Test Description</h2>
        <p style={{ whiteSpace: "pre-line" }}>{testDescription}</p>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Alex Boschuk</span>
      </footer>
    </main>
  );
}
