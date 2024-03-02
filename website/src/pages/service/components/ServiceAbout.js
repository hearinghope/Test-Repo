import Image from 'next/image';
import styles from '../styles/service.module.css';

const ServiceAbout = () => {
  return (
    <div className={styles.ServiceAboutContainer2}>
      <div className={styles.ServiceAboutTextContainer}>
        <h2 className={styles.ServiceAboutHeading}>Our Services</h2>
        <p className={styles.ServiceAboutDescription}>
          At Hearing Hope, a Signia Certified Centre, we prioritize world-class audiological care. Our state-of-the-art facilities offer precise diagnostic hearing tests and professional speech therapy for a comprehensive approach to your auditory well-being. Explore our range of advanced hearing aids tailored to seamlessly integrate into your lifestyle. As a team dedicated to excellence, we not only provide technical expertise but genuine commitment to improving your quality of life through optimal hearing. Trust Hearing Hope for a personalized, compassionate, and cutting-edge experience, ensuring your satisfaction and the joy of crystal-clear sound in every aspect of your life.
        </p>
      </div>
      <div className={styles.AboutServiceimge}>
        <Image src="/Service/OurService.jpg" alt="Service image" width={370} height={300} style={{ borderRadius: '9px', objectFit: 'cover', objectPosition: 'center' }} />
      </div>
    </div>
  );
};

export default ServiceAbout;
