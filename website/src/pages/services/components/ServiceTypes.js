import styles from '../styles/service.module.css';
import Image from 'next/image';
import Link from 'next/link';


const ServiceTypes = () => {
  return (
    <div>
      <div className={styles.serviceTypesContainer}>
        <div className={styles.ServiceTypesHeadingContainer}>
          <h2 className={styles.ServiceTypesHeading}>Hearing Aids</h2>
        </div>
        <div className={styles.ServiceAboutContainer}>
          <div className={styles.ServiceAboutTextContainer}>
            <p className={styles.ServiceAboutDescription}>
              Discover a World of Clear Hearing with Our Hearing Aids. Our expert team is dedicated to providing personalized fittings and ongoing support, ensuring the perfect solution for your unique needs. Experience the joy of improved hearing through our cutting-edge technology, designed to elevate your auditory experience. At Hearing Hope, we go beyond offering products; we provide a commitment to your satisfaction and the restoration of crystal-clear sound in your everyday life. Trust us to be your partner in embracing a world of clear hearing and enhanced communication.
            </p>
            <Link href='/services/HearingAidCentre' >
            <button type='button' className={styles.ServiceTypesButton}>Know More</button>
            </Link>
          </div>
          <div className={styles.AboutServiceimge}>
            <Image
              src="/Service/ServiceHearingAids.jpg"
              alt="Service Hearing Aids"
              width={370}
              height={300}
              style={{borderRadius:'12px', objectFit:'cover'}}
            />
          </div>
        </div>
      </div>

      <div className={styles.serviceTypesContainer}>
        <div className={styles.ServiceTypesHeadingContainer2}>
          <h2 className={styles.ServiceTypesHeading}>Hearing Test</h2>
        </div>
        <div className={styles.ServiceAboutContainer}>
          <div className={styles.AboutServiceimge}>
            <Image
              src="/Service/ServiceHearingTest.png"
              alt="Service Hearing Test"
              width={370}
              height={300}
              style={{width:"500",borderRadius:'12px', objectFit:'cover'}}
            />
          </div>
          <div className={styles.ServiceAboutTextContainer}>
            <p className={styles.ServiceAboutDescription}>
              At Hearing Hope, we prioritize your auditory well-being through meticulous Hearing Tests. Our dedicated team of audiologists, driven by a commitment to your satisfaction, employs advanced techniques to ensure precision in diagnostics. As a Signia Certified center, we take pride in delivering accurate assessments and customized solutions. Trust us to guide your journey to clearer hearing with expertise and care. At Hearing Hope, our focus extends beyond tests; we are here to offer a personalized and compassionate experience, ensuring that every step toward optimal hearing is supported by our unwavering commitment to your well-being.
            </p>
            <Link href='/services/HearingTest' >
            <button type='button' className={styles.ServiceTypesButton}>Know More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.serviceTypesContainer}>
        <div className={styles.ServiceTypesHeadingContainer}>
          <h2 className={styles.ServiceTypesHeading}>Speech Therapy</h2>
        </div>
        <div className={styles.ServiceAboutContainer}>
          <div className={styles.ServiceAboutTextContainer}>
            <p className={styles.ServiceAboutDescription}>
              Our team of experienced speech therapists is committed to advancing your speech and language proficiency through individualized sessions. Committed to advancing your speech and language proficiency, we offer individualized sessions that draw on extensive expertise. Tailoring our approach to meet your unique needs, our unwavering dedication ensures comprehensive support. Trust us to guide you towards refined communication, unlocking a more fulfilling auditory experience. At Hearing Hope, we go beyond the conventional, positioning ourselves as partners in your pursuit of articulate expression. With our team commitment, expertise, and personalized approach, we are dedicated to fostering your speech and language skills for a richer, more satisfying communication journey.
            </p>
            <Link href='/services/SpeechTherapy' >
            <button type='button' className={styles.ServiceTypesButton}>Know More</button>
            </Link>
          </div>
          <div className={styles.AboutServiceimge}>
            <Image
              src="/Service/ServiceSpeechTherapy.png"
              alt="Speech Therapy"
              width={370}
              height={300}
              style={{borderRadius:'12px', objectFit:'cover'}}
            />
          </div>
        </div>
      </div>

      <div className={styles.serviceTypesContainer}>
        <div className={styles.ServiceTypesHeadingContainer2}>
          <h2 className={styles.ServiceTypesHeading}>Hearing Care</h2>
        </div>
        <div className={styles.ServiceAboutContainer}>
          <div className={styles.AboutServiceimge}>
            <Image
              src="/Service/hearingcare.jpg"
              alt="Service Hearing Test"
              width={370}
              height={300}
              style={{width:"500",borderRadius:'12px', objectFit:'cover'}}
            />
          </div>
          <div className={styles.ServiceAboutTextContainer}>
            <p className={styles.ServiceAboutDescription}>
              At Hearing Hope, we prioritize your auditory well-being through meticulous Hearing Tests. Our dedicated team of audiologists, driven by a commitment to your satisfaction, employs advanced techniques to ensure precision in diagnostics. As a Signia Certified center, we take pride in delivering accurate assessments and customized solutions. Trust us to guide your journey to clearer hearing with expertise and care. At Hearing Hope, our focus extends beyond tests; we are here to offer a personalized and compassionate experience, ensuring that every step toward optimal hearing is supported by our unwavering commitment to your well-being.
            </p>
            <Link href='/services/HearingCare' >
            <button type='button' className={styles.ServiceTypesButton}>Know More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.serviceTypesContainer}>
        <div className={styles.ServiceTypesHeadingContainer}>
          <h2 className={styles.ServiceTypesHeading}>Audiologist</h2>
        </div>
        <div className={styles.ServiceAboutContainer}>
          <div className={styles.ServiceAboutTextContainer}>
            <p className={styles.ServiceAboutDescription}>
              Our team of experienced speech therapists is committed to advancing your speech and language proficiency through individualized sessions. Committed to advancing your speech and language proficiency, we offer individualized sessions that draw on extensive expertise. Tailoring our approach to meet your unique needs, our unwavering dedication ensures comprehensive support. Trust us to guide you towards refined communication, unlocking a more fulfilling auditory experience. At Hearing Hope, we go beyond the conventional, positioning ourselves as partners in your pursuit of articulate expression. With our team commitment, expertise, and personalized approach, we are dedicated to fostering your speech and language skills for a richer, more satisfying communication journey.
            </p>
            <Link href='/services/Audiologist' >
            <button type='button' className={styles.ServiceTypesButton}>Know More</button>
            </Link>
          </div>
          <div className={styles.AboutServiceimge}>
            <Image
              src="/Service/audiologist.jpg"
              alt="Speech Therapy"
              width={370}
              height={300}
              style={{borderRadius:'12px', objectFit:'cover'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTypes;
