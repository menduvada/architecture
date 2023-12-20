import React from "react";
import styles from "./Gallery.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Gallery = () => {
    return (
        <div className={styles.gallery}>
            <Navbar />
            <div className={styles.container}>
                <ul className={styles.title}>
                <li className={styles.title1}>Photo</li>
                <li className={styles.title2}>Gallery</li>
                </ul>
                <ul className={styles.images}>
                    <li><img src="assets/image1.png" alt="image1"/></li>
                    <li><img src="assets/image2.png" alt="image2"/></li>
                    <li><img src="assets/image3.png" alt="image3"/></li>
                    <li><img src="assets/image4.png" alt="image4"/></li>
                    <li><img src="assets/image5.png" alt="image5"/></li>
                    <li><img src="assets/image6.png" alt="image6"/></li>
                    <li><img src="assets/image7.png" alt="image7"/></li>
                    <li><img src="assets/image8.png" alt="image8"/></li>
                    <li><img src="assets/image9.png" alt="image9"/></li>
                    <li><img src="assets/image10.png" alt="image10"/></li>
                </ul>
                <div className={styles.number}>
                <p>01   /   05</p>
                <div className={styles.image}>
                <img src="assets/left_Ar.png" alt="left" style={{marginLeft:"50px"}}/>
                <img src="assets/right_Ar.png" alt="right" style={{marginLeft:"20px"}}/>
                </div>
                </div>
            </div>
            <Footer />
        </div>
        );
}

export default Gallery;