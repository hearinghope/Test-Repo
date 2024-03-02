import Navbar from '@/components/Navbar';
import AboutHeader from './components/AboutHeader';
import styles from './styles/about.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import AboutDescriptions from './components/AboutDescription';
import AboutTestimonials from './components/AboutTestimonials';
import AboutCertifications from './components/AboutCertificate';
import AboutCards from './components/AboutCards';
import WhatsAppButton from '../WhatsAppButton';

const AboutPage = () => {
  return (
    <div className={styles.container}>
       <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Navbar />
      <AboutHeader />
      <AboutDescriptions />
      <AboutCards />
      <AboutTestimonials />
      <AboutCertifications />
      <Footer />
    </div>
  );
};

export default AboutPage;