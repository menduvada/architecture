import React from "react";
import Navbar from "../navBar";
import Home from "../home";
import About from "../about";
import Projects from "../projects";
import Footer from "../footer";
import ContactUs from "../contactUs";

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
