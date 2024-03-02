import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactHeader from './components/ContactHeader';
import ContactMaps from './components/ContactMaps';
import ContactStrip from './components/ContactStrip';
import ContactWhyUs from './components/ContactWhyUs';
import Head from 'next/head';
import WhatsAppButton from '../WhatsAppButton';


const ContactPage = () => {
  return (
    <div>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us</title>
        <link rel="icon" href="./favicon.png" />

      </Head>
      <Navbar />
      <ContactStrip />
      <ContactHeader />
      <ContactWhyUs />
      <ContactMaps />
      <Footer />
    </div>
  );
};

export default ContactPage;