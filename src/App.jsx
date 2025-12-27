import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* fallback so blank pages don’t happen */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}