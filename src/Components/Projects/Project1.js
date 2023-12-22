import React from "react";
import styles from "./project1.module.css";
import Navbar from "../navBar";
import Footer from "../footer";

const Project1 = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ul className={styles.title}>
          <li className={styles.title1}>Sample</li>
          <li className={styles.title2}>Project 1</li>
        </ul>
        <img src="assets/p1.png" alt="p1" className={styles.p1}/>
      </div>
      <div className={styles.content}>
        <img src="assets/p2.png" alt="p2" className={styles.p2}/>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with.
        </p>
      </div>
      <div>
         <img src="assets/p3.png" alt="p3" className={styles.p3}/>
      </div>
      <Footer />
    </div>
  );
};

export default Project1;
