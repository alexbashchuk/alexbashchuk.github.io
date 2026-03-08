import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./Home";
import JavaPlaywright from "./JavaPlaywright";
import CSharpMobile from "./CSharpMobile";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/java-playwright" element={<JavaPlaywright />} />
        <Route path="/csharp-mobile" element={<CSharpMobile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}