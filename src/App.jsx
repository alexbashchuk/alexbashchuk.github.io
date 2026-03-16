import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home.jsx";
import JavaPlaywright from "./pages/JavaPlaywright.jsx";
import CSharpMobile from "./pages/CSharpMobile.jsx";
import JMeterJenkins from "./pages/JMeter-Jenkins.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java-playwright" element={<JavaPlaywright />} />
        <Route path="/csharp-mobile" element={<CSharpMobile />} />
        <Route path="/jmeter-jenkins" element={<JMeterJenkins />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}