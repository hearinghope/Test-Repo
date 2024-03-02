import Image from 'next/image';
import styles from '../styles/contact.module.css';

const ContactStrip = () => {
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
    <div className={styles.contactStripContainer}>
      <div className={styles.contactStripContent}>
        <div className={styles.contactStripText}>
          <h1 style={{ fontWeight: '600', fontSize: '2.3rem' }}>Contact us for quick support</h1>
          <p style={{ marginTop: '10px', fontSize: '1.1rem' }}>
            Our committed team is ready to assist you. Please don&apos;t hesitate to reach out for any support or queries.
            Your satisfaction is our motto. Contact us for prompt and reliable assistance.
          </p>
        </div>
        <div className={styles.contactButtons}>
          <button className={styles.btn} onClick={handleWhatsAppButtonClick}>
            <span>WhatsApp</span>
            <Image src="/Contact/whatsapp.webp" alt="WhatsApp" width={20} height={20} style={{ marginLeft: '5px' }} />
          </button>
          <button className={styles.btn} onClick={handleCallButtonClick}>
            <span>Call Now</span>
            <Image src="/Contact/call.png" alt="Call Now" width={20} height={20} style={{ marginLeft: '5px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactStrip;
