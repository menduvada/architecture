import React from "react";
import styles from "./NavBar.module.css";
import { Outlet,Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.content}>
          <img src="/assets/logo.png" alt="Logo" className={styles.img} />
          <ul className={styles.items}>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/pd">ProjectsDetails</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
        <Outlet/>
      </div>
  );
};

export default Navbar;
