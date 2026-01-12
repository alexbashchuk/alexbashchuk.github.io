import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import JavaPlaywright from "./pages/JavaPlaywright.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Presentation page */}
      <Route path="/java-playwright" element={<JavaPlaywright />} />

      {/* fallback so blank pages don’t happen */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}