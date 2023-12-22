import React from "react";
import styles from "./index.module.css";
import Navbar from "../navBar";
import Footer from "../footer";

const ProjectDetails = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <ul className={styles.title}>
          <li className={styles.title1}>Our</li>
          <li className={styles.title2}>Projects</li>
        </ul>
        <div>
          <div className={styles.content}>
            <img src="assets/Project_1.png" alt="first" />
            <div>
              <h1>Sample Project</h1>
              <p className={styles.txt}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>View More</button>
            </div>
          </div>
          <div className={styles.content}>
            <img src="assets/Project_2.png" alt="second" />
            <div className={styles.text}>
              <h1>Sample Project</h1>
              <p className={styles.txt}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>View More</button>
            </div>
          </div>
          <div className={styles.content}>
            <img src="assets/Project_3.png" alt="third" />
            <div>
              <h1>Sample Project</h1>
              <p className={styles.txt}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <button>View More</button>
            </div>
          </div>
        </div>
        <div className={styles.number}>
          <p>01 / 05</p>
          <div className={styles.image}>
            <img
              src="assets/left_Ar.png"
              alt="left"
              style={{ marginLeft: "50px" }}
            />
            <img
              src="assets/right_Ar.png"
              alt="right"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>

      </div>
      <Footer />

    </div>
  );
};

export default ProjectDetails;
