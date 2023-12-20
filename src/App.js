import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Components/Gallery/Gallery";
import Layout from "./Components/layout/Layout";
import Contact from "./Components/Contact/Contact";
import Project_Details from "./Components/Project_Details/Project_Details";
import Project1 from "./Components/Projects/Project1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="pd" element={<Project_Details />} />
        <Route path="project1" element={<Project1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
