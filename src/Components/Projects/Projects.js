import React from "react";
import styles from "./Projects.module.css";
import { hover } from "@testing-library/user-event/dist/hover";

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Our projects</h2>
      <div className={styles.content}>
        <img
          src="assets/Project1.png"
          alt="Project1"
          style={{ width: "570px", height: "255px", filter: "grayscale(90%) brightness(50%)"}}
        />
        <h1
          style={{
            position: "absolute",
            left: "25%",
            top: "250%",
            color:"white",
            fontSize:"40px"
          }}
        >
          Sample Project
        </h1>
        <button
          style={{
            position: "absolute",
            left: "25%",
            top: "265%",
            background:"whitesmoke",
            border:"none",
            padding:"10px",
            width:"150px",
          }}
        >
          View More
        </button>
        <img
          src="assets/Project2.png"
          alt="Project2"
          style={{ width: "570px", height: "255px" }}
        />
        <img
          src="assets/Project3.png"
          alt="Project3"
          style={{ width: "270px", height: "255px" }}
        />
        <img
          src="assets/Project4.png"
          alt="Project4"
          style={{ width: "470px", height: "255px" }}
        />
        <img
          src="assets/Project5.png"
          alt="Project5"
          style={{ width: "370px", height: "255px" }}
        />
      </div>
      <button className={styles.button}>All Projects</button>
    </section>
  );
};
export default Projects;
