import Image from 'next/image';
import styles from './styles/service.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '../WhatsAppButton';

const HearingTest = () => {
    return(
      <>
      <div>
      <WhatsAppButton />
      </div>
        <Navbar />

        <div className={styles.BlogContainer}>

        <div className={styles.BlogHeading}>
          <h1 style={{color:'teal'}}>Hearing Test</h1>
        </div>
        <div className={styles.BlogImage}>
          <Image src='/Service/HearingTest.png' alt='Blog' height={200} width={400} style={{borderRadius:'2px'}}  />
        </div>
        <div className={styles.BlogDescription}>
          <p>At Hearing Hope, we specialize in offering comprehensive hearing test services in Rohini, Safdarjung, and Ghaziabad. Our organization is staffed with extensively trained and vetted audiologists who are dedicated to helping individuals with hearing impairments.</p>
          <br/>
          <p>We understand the importance of accurate and timely hearing test results, which is why we use the latest technology and equipment to conduct our tests. Our hearing tests are non-invasive and painless, and they are designed to provide detailed information about an individuals hearing abilities.</p>
          <br/>
          <p>Our hearing tests cover a wide range of frequencies and are customized to meet the specific needs of each individual. We also provide follow-up services such as counseling and recommendations for hearing aids and other assistive help.</p>
          <br/>
          <p>We understand that dealing with hearing loss can be challenging, which is why we strive to make the testing process as comfortable and stress-free as possible. We take the time to explain the results of the tests and answer any questions you may have.</p>
          <br/>
          <p>In summary, our organization is committed to providing high-quality hearing test services to individuals in Rohini, Safdarjung, and Ghaziabad. With our state-of-the-art technology and experienced staff, you can trust that you are receiving the best possible care.</p>

          <ul>
            <li><b>Pure Tone Audiometry</b></li>
            <li><b>Free Field Audiometry</b></li>
            <li><b>BOA( Behavioural Observational Audiometry)</b></li>
            <li><b>Impedance Audiometry</b></li>
            <li><b>OAE SCREENING </b></li>
            <li><b>BERA Test</b></li>
            <li><b>ASSR Test</b></li>
          </ul>

          <br/>
          <p>It is important to have your hearing tested regularly to ensure that you are hearing as well as possible. If you think you may have hearing loss or are experiencing difficulty hearing, it is a good idea to have a hearing test to determine the cause and find the best course of treatment.</p>
        </div>
  
        <div className={styles.BlogHeading}>
          <h1>Hearing Test Services in Rohini</h1>
        </div>
        <div className={styles.BlogDescription}>
          <p>Experience crystal-clear hearing with our state-of-the-art hearing aid test services in Rohini. Our expert audiologists use the latest technology to accurately assess your hearing and provide personalized solutions. Say goodbye to muffled sounds and hello to a whole new world of clarity.</p>
        </div>
  
        <div className={styles.BlogHeading}>
          <h1>Hearing Test Services in Safdarjung</h1>
        </div>
        <div className={styles.BlogDescription}>
          <p>Give your ears the right care with our comprehensive hearing test services in Safdarjung. Our team of audiologists uses advanced technology to diagnose and treat hearing loss, ensuring you hear every sound to its fullest. Schedule your appointment today!</p>
        </div>
  
        <div className={styles.BlogHeading}>
          <h1>Hearing Test Services in Ghaziabad</h1>
        </div>
        <div className={styles.BlogDescription}>
          <p>Hear the world in a whole new way with our expert hearing test services in Ghaziabad. Our state-of-the-art technology and skilled audiologists will provide you with accurate assessments and personalized solutions to improve your hearing. Book your appointment now.</p>
        </div>

        <div className={styles.AboutDescriptionContainer2}>

      <div className={styles.AboutDescriptionRow1}>
      <h2>PTA, FFA, BOA</h2>
      <p>This test determines the patients hearing ability relative to normal adult hearing levels to determine if there is a hearing loss, where it occurs and its type or classification. This information is critical to determine if medical or surgical intervention is possible or if hearing aids may help.</p>
      </div>
      <div className={styles.AboutDescriptionRow1}>
      <h2>OAE Screening</h2>
      <p>Measurement of oaes is used clinically as an objective test of a normal cochlear function at all ages and it has been adapted as a test of cochlear function in newborn</p>
      </div>
      <div className={styles.AboutDescriptionRow1}>
      <h2>B.E.R.A</h2>
      <p>With bc abr we can also test patients with congenital external and middle malformations. Additional use of bc bera with ac bera can also indicate a type of hearing loss. This test not only confirms a conductive loss but also helps to calculate the amount of hearing loss.</p>
      </div>
     
      </div>
  
      </div>
      <Footer />
      </>
    )
}

export default HearingTest;