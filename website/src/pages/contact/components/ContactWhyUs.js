import React from 'react';
import Image from 'next/image';
import styles from '../styles/contact.module.css';

const ContactWhyUs = () => {
  return (
    <div className={styles.ContactChoose}>
      <div className={styles.ChooseHeading}>
        <h1>Why People Trust Us?</h1>
      </div>
      <div className={styles.ChoosePoints}>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/certified.png" alt="certified" height={50} width={50} />
          <h3>Signia Certified Center</h3>
        </div>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/professionals.png" alt="certified" height={50} width={50} />
          <h3>Team of Professional Audiologists</h3>
        </div>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/equipments.png" alt="certified" height={50} width={50}  />
          <h3>World Class Equipments</h3>
        </div>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/experience.png" alt="certified" height={60} width={50}  />
          <h3>15+ years of experience</h3>
        </div>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/home.png" alt="certified" height={50} width={50}  />
          <h3>Home visit facility</h3>
        </div>
        <div className={styles.ChoosePoint}>
          <Image src="/Contact/speech.png" alt="certified" height={40} width={50}  />
          <h3>Speech therapy available</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactWhyUs;
