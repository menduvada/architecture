import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
      <div>
        <img src="assets/footer.png" alt="logo" className={styles.image} />
      </div>
      <div className={styles.intro}>
        <p>Introduction</p>
        <p>Main</p>
        <p>Gallery</p>
        <p>Projects</p>
        <p>Contacts</p>
      </div>
      <div className={styles.contact}>
        <ul>
          <p className={styles.header}>Contacts</p>
          <li className={styles.item1}>
            <img src="assets/Vector.png" alt="map" />
            <div>
              <p>1234 Sample Street Austin Texas 78704</p>
            </div>
          </li>
          <li className={styles.item2}>
            <img src="assets/Call.png" alt="call" />
            <div>
              <p>512.333.2222</p>
            </div>
          </li>
          <li className={styles.item3}>
            <img src="assets/email.png" alt="email" />
            <div>
              <p>sampleemail@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.media}>
        <p>Social Media</p>
        <ul>
          <li>
            <img src="assets/facebook.png" alt="facebook" />
          </li>
          <li>
            <img src="assets/Shape.png" alt="Shape" />
          </li>
          <li>
            <img src="assets/linkdin.png" alt="linkdin" />
          </li>
          <li>
            <img src="assets/pininterest.png" alt="pinterest" />
          </li>
        </ul>
      </div>
        </div>
        <div className={styles.footer}>
          <p>&copy; 2023 All rights reserved.</p>
        </div>
    </div>
  );
};

export default Footer;
