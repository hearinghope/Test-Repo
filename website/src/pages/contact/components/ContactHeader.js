import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import styles from '../styles/contact.module.css';

const firebaseConfig = {
  apiKey: "AIzaSyCDaZ7cjeaI4UX-RxeA4D7VXEeIaWe-qwE",
  authDomain: "hearing-hope.firebaseapp.com",
  projectId: "hearing-hope",
  storageBucket: "hearing-hope.appspot.com",
  messagingSenderId: "441467204936",
  appId: "1:441467204936:web:26380e59d9ed0969e92f7d",
  measurementId: "G-4MEFFQ7855"
};

if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Now you can use 'app' and 'db' throughout your application
}

const ContactHeader = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure that 'db' is accessible here
      const app = getApp(); // Retrieve the Firebase app
      const db = getFirestore(app); // Retrieve the Firestore instance

      // Store data in Firestore
      const docRef = await addDoc(collection(db, 'contactForms'), formData);
      console.log('Document written with ID: ', docRef.id);
  
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };


  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.rowCenter}>
          <div className={`${styles.colLg10} ${styles.colMd12}`}>
            <div className={styles.wrapper}>
              <div className={`${styles.colMd5} ${styles.flexAlignStretch}`}>
                <div className={styles.infoWrap}>
                  <h3 className={`${styles.mb4} ${styles.mtMd4}`}>Looking for the best Hearing Test in town?</h3>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/gps.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p style={{ lineHeight: '25px' }}>
                        <span style={{ color: '#ff6600' }}><b>Address:</b></span> G-14, Ground Floor, Kings Mall, Twin District Centre, Sector 10, Rohini.
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/call.png' alt='call' height={50} width={50} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Phone:</b></span> <a href="tel://9711871168">+91 9711871168</a>
                      </p>
                    </div>
                  </div>
                  <div className={styles.dbox}>
                    <div className={styles.icon}>
                      <Image src='/Contact/email.png' alt='call' height={41} width={41} />
                    </div>
                    <div className={styles.text}>
                      <p>
                        <span style={{ color: '#ff6600' }}><b>Email:</b></span>{' '}
                        <Link href="mailto:Hearinghope@gmail.com">Hearinghope@gmail.com</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.colMd7} ${styles.flexAlignStretch}`}>
                <div className={styles.contactWrap}>
                  <form className={styles.formContainer} method="POST" id={styles.contactForm} name="contactForm" onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="text"
                            className={styles.formControl}
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd6}>
                        <div className={styles.formGroup}>
                          <input
                            type="email"
                            className={styles.formControl}
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="tel"
                            className={styles.formControl}
                            name="phoneNumber"
                            id="subject"
                            placeholder="+91..."
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <textarea
                            name="message"
                            className={styles.textareaControl}
                            id="Message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className={styles.colMd12}>
                        <div className={styles.formGroup}>
                          <input
                            type="submit"
                            className={styles.btnPrimary}
                            value="Submit"
                            onChange={handleChange}

                          />
                          <div className={styles.submitting}></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactHeader;
