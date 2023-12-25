import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./components/gallery";
import Layout from "./components/layout/layout";
import Contact from "./components/contact";
import ProjectDetails from "./components/projectDetails";
import Project1 from "./components/projects/project1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pd" element={<ProjectDetails />} />
        <Route path="project1" element={<Project1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
