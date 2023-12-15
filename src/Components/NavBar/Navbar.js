import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.content}>
        <img src="/assets/logo.png" alt="Logo" className={styles.img} />
        <ul className={styles.items}>
          <li><a href="main">Main</a></li>
          <li><a href="gallery">Gallery</a></li>
          <li><a href="projects">Projects</a></li>
          <li><a href="contacts">Contacts</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
