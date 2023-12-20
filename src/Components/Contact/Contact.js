import React from "react";
import styles from "./Contact.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div>
          <div className={styles.content}>
            <ul className={styles.title}>
              <li className={styles.title1}>Contact</li>
              <li className={styles.title2}>Information</li>
            </ul>
          </div>
          <ul className={styles.text}>
            <li style={{ fontSize: "18px", marginTop:"40px" }}>Company Name</li>
            <li>1234 Sample Street Austin Texas 76401</li>
          </ul>
          <br></br>
          <p style={{marginLeft:"40px"}}>512.333.2222</p>
          <p  style={{marginLeft:"40px", marginTop:"40px"}}>sampleemail@gmail.com</p>
          <button className={styles.button}>CONTACT US</button>
        </div>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.770318593031!2d73.17917321079304!3d22.32452457958444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8cad5ef7941%3A0x5a613ac68ff3166a!2sThe%20Maharaja%20Sayajirao%20University%20of%20Baroda!5e0!3m2!1sen!2sin!4v1702969432574!5m2!1sen!2sin"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
