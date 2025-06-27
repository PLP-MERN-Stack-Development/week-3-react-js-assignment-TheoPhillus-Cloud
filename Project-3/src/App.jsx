import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./components/Counter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}