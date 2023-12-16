import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div>
            <img
              src="assets/Rectangle1.png"
              alt="Rectangle1"
              className={styles.left1}
            />
            <img
              src="assets/Rectangle2.png"
              alt="Rectangle2"
              className={styles.left2}
            />
          </div>
          <div>
            <img
              src="assets/Rectangle3.png"
              alt="Rectangle3"
              className={styles.left3}
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1>About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button>Read More *</button>
        </div>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Main Focus/Mission Statement</h1>
        <div className={styles.content}>
            <h1 className={styles.title1}>1</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
            <h1 className={styles.title2}>2</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
        </div>
      </div>
    </section>
      
  );
};

export default About;
