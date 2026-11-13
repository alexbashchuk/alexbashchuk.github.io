import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home.jsx";
import PortfolioGithub from "./pages/PortfolioGithub.jsx";
import JavaPlaywright from "./pages/JavaPlaywright.jsx";
import UiApiDbTest from "./pages/UiApiDbTest.jsx";
import CSharpMobile from "./pages/CSharpMobile.jsx";
import JavaMobile from "./pages/JavaMobile.jsx";
import JMeterJenkins from "./pages/JMeter-Jenkins.jsx";
import CypressTypeScriptCICD from "./pages/CypressTypeScriptCICD.jsx";
import PythonPytest from "./pages/PythonPytest.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio-github" element={<PortfolioGithub />} />
        <Route path="/ui-api-db-test" element={<UiApiDbTest />} />
        <Route path="/java-playwright" element={<JavaPlaywright />} />
        <Route path="/csharp-mobile" element={<CSharpMobile />} />
        <Route path="/java-mobile" element={<JavaMobile />} />
        <Route path="/jmeter-jenkins" element={<JMeterJenkins />} />
        <Route path="/cypress-typescript-cicd" element={<CypressTypeScriptCICD />} />
        <Route path="/python-pytest" element={<PythonPytest />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}