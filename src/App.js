import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateVisit from "./pages/CreateVisit";
import VisitDetail from "./components/VisitDetail";
import tailwindCSS from "./index.css";
export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateVisit />} />
        <Route path="/visit/:id" element={<VisitDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
