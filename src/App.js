import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/gallery";
import Layout from "./Components/layout/layout";
import Contact from "./Components/contact";
import ProjectDetails from "./Components/projectDetails";
import Project1 from "./Components/projects/project1";

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
