import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Layout from "./NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;