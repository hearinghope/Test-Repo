import React from 'react';
import styles from '../styles/service.module.css';
import Image from 'next/image';

const ServiceStrip = () => {
  const phoneNumber = '9711871168'; // Replace with your actual phone number

  const handleWhatsAppButtonClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  const handleCallButtonClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <div className={styles.serviceStripContainer}>
      <div className={styles.serviceStripContent}>
        <div className={styles.serviceStripText}>
          <h1 style={{ fontWeight: '600', fontSize: '2.3rem' }}>Contact us for quick support</h1>
          <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
            Our committed team is ready to assist you. Please don&rsquo;t hesitate to reach out for any support or queries.
            Your satisfaction is our motto. Contact us for prompt and reliable assistance.
          </p>
        </div>
        <div className={styles.serviceButtons}>
          <button className={styles.btn} onClick={handleWhatsAppButtonClick}>
            <span>WhatsApp</span>
            <Image src="/Service/whatsapp.webp" alt="WhatsApp" width={20} height={20} style={{ marginLeft: '5px' }} />
          </button>
          <button className={styles.btn} onClick={handleCallButtonClick}>
            <span>Call Now</span>
            <Image src="/Service/call.png" alt="Call Now" width={20} height={20} style={{ marginLeft: '5px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip;
