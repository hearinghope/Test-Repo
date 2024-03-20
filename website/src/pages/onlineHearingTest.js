import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './hearing.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from './WhatsAppButton';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { initializeApp, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqXcsOSHbqgiI6slzpDYDkTP-pt_vU7EA",
  authDomain: "hearingtest-19462.firebaseapp.com",
  projectId: "hearingtest-19462",
  storageBucket: "hearingtest-19462.appspot.com",
  messagingSenderId: "296507999884",
  appId: "1:296507999884:web:d6702b5c541c06c3145da9",
  measurementId: "G-F2GCWY5TNQ"
};

const OnlineHearingTest = () => {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [device, setDevice] = useState('');

  let firebaseApp;
  try {
    firebaseApp = getApp();
  } catch (e) {
    firebaseApp = initializeApp(firebaseConfig);
  }

  const handleStartTest = async () => {
    const firestoreInstance = getFirestore(firebaseApp);

    try {
      await addDoc(collection(firestoreInstance, 'users'), {
        name,
        age,
        number,
        gender,
        device,
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    router.push({
      pathname: '/TestQuestion',
      query: { name, age, number, gender, device }
    });
  };

  return (
    <div>
      <Navbar />
      <WhatsAppButton />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online Hearing Test</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className={styles.hearingTestContainer}>
        <div className={styles.hearingTestHeading}>
          <h2>Online Hearing Test</h2>
        </div>
        <div className={styles.hearingTestImage}>
          <Image src="/Service/ServiceHearingTest.jpg" alt='Hearing Test' width={480} height={270} style={{ borderRadius: '5px', boxShadow: " 0 10px 7px rgba(0, 0, 0, 0.1)" }} />
        </div>
        <div className={styles.hearingTestButtons}>
          <button className={styles.hearingTestButtons1} onClick={() => setShowPopup(true)}>Start Hearing Test</button>
        </div>
        <div className={styles.hearingTestAbout} id='hearingAbout'>
        <p>Welcome to our online hearing test platform! We understand the importance of clear communication and the impact of hearing loss on daily life. Our simple and convenient online hearing test allows you to assess your hearing ability from the comfort of your own home.</p><br/>
        <p>Before you begin the test, we recommend finding a quiet place free from distractions to ensure accurate results. Hearing tests are best conducted in a peaceful environment where you can focus solely on the sounds being presented.</p><br/>
        <p>Please note that while our online hearing test provides valuable insights into your hearing ability, a comprehensive and accurate assessment can only be conducted in person at our clinic, utilizing specialized equipment in an audiometry room. The results of this online test are intended to give you an initial indication of your hearing health and should not be considered as a substitute for professional evaluation. For a thorough assessment and personalized recommendations, we encourage you to schedule an appointment with our experienced audiologists.</p><br/>
        <p>Take the first step towards better hearing health today by completing our online hearing test. Gain valuable insights and explore the possibilities of improving your hearing experience with us.</p>
        </div>

        {/* Popup Form */}
        {showPopup && (
          <div className={styles.popup}>
            <div>
              <h3>Fill the Basic Details -</h3>
              <form>
              <label>
                  Name:
                  <input type="text" value={name} placeholder='Your Name...' onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                  Age:
                  <input type="number" value={age} placeholder='Your Age...' onChange={(e) => setAge(e.target.value)} />
                </label>
                <label>
                  Ph Number:
                  <input type="tel" value={number} placeholder="+91" onChange={(e) => setNumber(e.target.value)} />
                </label>
                <label>
                  Gender:
                  <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Your Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                <label>
                  Device:
                  <select value={device} onChange={(e) => setDevice(e.target.value)}>
                    <option value="">What Device are you wearing right now?</option>
                    <option value="wiredEarphone">Wired Earphone</option>
                    <option value="wirelessEarphone">Wireless Earphone</option>
                    <option value="headphone">Headphone</option>
                  </select>
                </label>
              </form>
              <div className={styles.hearingTestButtons}>
                <button onClick={handleStartTest} className={styles.popUpStart}>Start Test</button>
                <button onClick={() => setShowPopup(false)} className={styles.popUpClose}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default OnlineHearingTest;
