import React from 'react';
import styles from './styles/hankYouMessage.module.css'; // You can create a separate CSS file for styling

const ThankYouMessage = ({ onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Thank You!</h2>
        <p>We will get back to you within 24 hours.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ThankYouMessage;
