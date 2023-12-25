import React from "react";
import styles from "./index.module.css";

const Home = () => {
  return (
    <div className={styles.container} id="main">
        <div className={styles.left}>
            <div className={styles.content}>
            <p className={styles.title}>Projects</p>
            <p className={styles.text}>Lorum</p>
            </div>
            <div className={styles.image}>
                <img src="assets/left_ar.png" alt="left" />
                <img src="assets/right_ar.png" alt="right" />
            </div>
            <p className={styles.number}> 01 / 02 </p>
        </div>
        <div className={styles.right}>
            <img src="assets/home.png" alt="home"/>
             <button className={styles.button}>View Project</button> 
        <div/>
    </div>
    </div>
  );
};

export default Home;
