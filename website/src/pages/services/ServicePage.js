import Navbar from '@/components/Navbar';
import styles from './styles/service.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import ServiceAbout from './components/ServiceAbout';
import ServiceStrip from './components/ServiceStrip';
import ServiceTypes from './components/ServiceTypes';
import ServiceStrip2 from './components/ServiceStrip2';
import WhatsAppButton from '../WhatsAppButton';

const ServicePage = () => {
  return (
    <div className={styles.container}>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Services</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Navbar />
      <ServiceAbout />
      <ServiceStrip2 />
      <ServiceTypes />
      <ServiceStrip />
      <Footer />
    </div>
  );
};

export default ServicePage;