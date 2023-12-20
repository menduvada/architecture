import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact_US from "../Contact_US/Contact_US";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact_US />
      <Footer />
    </div>
  );
}
export default Layout;
