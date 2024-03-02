// Footer.js

import React from 'react';
import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3 style={{color:'#ff6600'}}>Locations</h3>
        <ul>
          <li>G-14, Ground Floor, Kings Mall, Twin District, Centre, Sector 10, Rohini.</li>
          <li>B, 7/108A, Safdarjung Enclave, opposite Deer Park, Block B 7, Arjun Nagar, Extension, New Delhi, Delhi 110029, India.</li>
          <li>MFP2+8X6, Duplex Flats, Block P, Sector 23, Sanjay Nagar, Ghaziabad, Uttar Pradesh 201002.</li>
          <li>35/16 Shanker Road Rajender Nagar Opp Axis Bank And Fire station New Delhi-110060</li>
          <li>Shop No U-75 Ground Floor Cloud 9 Sector 1, Vaishali, Ghaziabad, Uttar Pradesh 201010 Near Apollo Pharmacy.</li>
        </ul>
      </div>

      <div className={styles.column2}>
        <div>
          <h3 style={{color:'#ff6600'}}>Useful Links</h3>
          <ul>
            <Link href="/about"><li>About</li></Link>
            <Link href="/service"><li>Services</li></Link>
            <Link href="/products"><li>Products</li></Link>
            <Link href="/blog"><li>Blog</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            <Link href="/privacy"><li>Privacy Policy</li></Link> {/* Add a separate page for Privacy Policy */}
          </ul>
        </div>
      </div>

      <div className={styles.socials}>
        <h3 style={{color:'#ff6600'}}>Socials</h3>
        <div className={styles.socialIcons}>
          <Link href='https://www.instagram.com/hearinghope/'><Image src="/Components/instagram.png" alt="Instagram" width={100} height={40} /></Link>
          <Link href='https://www.facebook.com/people/Hearing-Hope/100063607797322/'><Image src="/Components/facebook.png" alt="Facebook" width={100} height={40} /></Link>
          <Link href='https://www.youtube.com/@HearingHope'><Image src="/Components/youtube.png" alt="YouTube" width={100} height={40} /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
