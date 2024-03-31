// ServiceStrip2.js
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/service.module.css';

const ServiceStrip2 = () => {
  return (
    <div className={styles.serviceStripContainer}>
      <div className={styles.serviceStripContent}>
        <div className={styles.serviceStripImage}>
          <Image
            src='/Service/HearingAids.png'
            alt='Hearing Aids'
            width={390} // Set the desired width
            height={380} // Set the desired height
          />
        </div>
        <div className={styles.serviceStripText}>
          <h1 style={{ fontWeight: '600' }}>Hear the World Around You</h1>
          <p style={{ marginTop: '10px' }}>
            At Clear Sound, we bring change in the way you approach wellness and care.
          </p>
        </div>
        <div className={styles.serviceStripButtons}>
          <Link href="/contact" legacyBehavior>
          <a><button className={styles.btn}>
            <span>Book an appointment</span>
          </button></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceStrip2;
