import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles/PopupForm.module.css';
import { getApps, initializeApp, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Import your custom ThankYouMessage component
import ThankYouMessage from './ThankYouMessage';

const firebaseConfig = {
  apiKey: "AIzaSyCDaZ7cjeaI4UX-RxeA4D7VXEeIaWe-qwE",
  authDomain: "hearing-hope.firebaseapp.com",
  projectId: "hearing-hope",
  storageBucket: "hearing-hope.appspot.com",
  messagingSenderId: "441467204936",
  appId: "1:441467204936:web:26380e59d9ed0969e92f7d",
  measurementId: "G-4MEFFQ7855"
};

// Ensure Firebase app is initialized only once
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
const db = getFirestore(app);

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name.toLowerCase()]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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

      // Close the popup form
      onClose();

      // Set a flag in localStorage to indicate that the popup has been shown
      localStorage.setItem('hasPopupBeenShown', 'true');

      // Display the custom thank you message
      setThankYouVisible(true);

      // Navigate to the home page
      router.push('/');

      console.log('Form submitted successfully');
    } catch (error) {
      // Handle failed form submission
      console.error('Error submitting form:', error);
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  useEffect(() => {
    // Check if the popup should be visible based on a flag in localStorage
    const hasPopupBeenShown = localStorage.getItem('hasPopupBeenShown');
    if (!hasPopupBeenShown) {
      setIsVisible(true);
    }
  }, []);

  const handleCrossButtonClick = () => {
    setIsVisible(false);
    onClose();

    // Set a flag in localStorage to indicate that the popup has been shown
    localStorage.setItem('hasPopupBeenShown', 'true');

    // Navigate to the home page after closing the form
    router.push('/');
  };

  return (
    <>
      {isVisible && (
        <div className={styles.popup}>
          <form onSubmit={handleSubmit} method="POST">
            <div className={styles.formContainer}>
              <center>
                <h1 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '35px' }}>Connect With Us</h1>
              </center>
              <label>Name: </label>
              <input type="text" placeholder="Your Name..." name='name' onChange={handleChange} />
              <label>Phone Number: </label>
              <input type="tel" placeholder="+91 ...." name='phoneNumber' onChange={handleChange}/>
              <label>Email: </label>
              <input type="email" placeholder="@gmail.com" name='email' onChange={handleChange} />
              <label>Message: </label>
              <input type="text" placeholder="Optional..." name='message' onChange={handleChange} />

              <div className={styles.FormSubmit}>
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button onClick={handleCrossButtonClick} className={styles.btn}>
                  Later
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {thankYouVisible && (
        <ThankYouMessage onClose={() => setThankYouVisible(false)} />
      )}
    </>
  );
};

export default PopupForm;

