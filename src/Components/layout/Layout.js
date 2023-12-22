import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default Layout;
