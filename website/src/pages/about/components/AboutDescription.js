import styles from '../styles/about.module.css';

const AboutDescriptions = () => {
  return (
    <div className={styles.AboutDescriptionContainer}>
        <h1>About<span style={{color:'#ff6600'}}> Hearing Hope</span></h1>
        <center><p>
        Our mission is to improve the health of our community by providing high quality, comprehensive hearing care in a welcoming and compassionate environment.
        On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your hearing care. Our goal is to provide the highest quality and most up-to-date Hearing treatments available in a professional and caring manner. We are committed to helping you attain your rehabilitation goals. It is also our goal to provide you with outstanding service.
        We Solve Hearing and Speech Problems with Most Efficiency
       Together our team of audiologists bring a broad spectrum of experience and professional expertise and continually undertake professional development education to remain up to date with the latest in hearing treatment options.
      </p></center>


      <div className={styles.AboutDescriptionContainer2}>

      <div className={styles.AboutDescriptionRow1}>
      <h2>Our<span style={{color:'teal'}}> Mission</span></h2>
      <p>We strive to provide the most reliable and efficient Hearing services, without compromising on quality or safety. We also aim to prove our quality skills, fair prices and customer care, so that we continue our business relationship for many years, beyond the first job we complete.</p>
      </div>

      <div  className={styles.AboutDescriptionRow2}>
      <h2>Core<span style={{color:'teal'}}> Values</span></h2>
      <ul>
        <li>Consider honesty as the key to a business trustworthiness and integrity.</li>
        <li>Always do the right thing to solve the customers problem.</li>
        <li>Perform all work with the highest level of excellence in mind.</li>
      </ul>
      </div>

      </div>

    </div>
  );
};

export default AboutDescriptions;
