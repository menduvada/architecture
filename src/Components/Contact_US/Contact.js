import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
             <div>
                <h1 className={styles.title}>Contact Us</h1>
             </div>
             <div className={styles.content}>
                <form>
                    <input type="text" name="text" placeholder="Name"/> <br /><br />
                    <input type="text" name="phoneNumber" placeholder="Phone Number"/><br /><br />
                    <input type="text" name="E-mail" placeholder="E-mail"/><br /><br />
                    <input type="text" name="Interested-In" placeholder="Interested In"/><br /><br />
                    <textarea placeholder="Message"></textarea><br />
                </form>
                <img src="assets/contact.png" alt="contact"/>
             </div>
             <div>
                   <button className={styles.button}>Send Email</button>
             </div>
        </div>
    );
}

export default Contact;