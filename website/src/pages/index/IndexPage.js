import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import IndexHeader from './components/IndexHeader';
import styles from './styles/index.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import IndexCards from './components/IndexCards';
import IndexAbout from './components/IndexAbout';
import IndexProducts from './components/IndexProducts';
import IndexTrust from './components/IndexTrust';
import IndexTestimonials from './components/IndexTestimonials';
import IndexCertifications from './components/IndexCertifications';
import IndexLocations from './components/IndexLocations';
import IndexFAQ from './components/IndexFAQ';
import IndexBlog from './components/IndexBlog';
import WhatsAppButton from '../WhatsAppButton';
import PopupForm from '@/components/PopupForm';
const IndexPage = () => {
  // State to manage the visibility of the form
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Function to handle the form close event
  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    
    <div className={styles.container}>
       <div>
        {/* Render the form if it's open */}
        {isFormOpen && <PopupForm onClose={handleFormClose} />}
      </div>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <link rel="icon" href="./favicon.png" />
      </Head>
      <Navbar />
      <IndexHeader />
      <IndexCards />
      <IndexAbout />
      <IndexProducts />
      <IndexTrust />
      <IndexTestimonials />
      <IndexCertifications />
      <IndexLocations />
      <IndexFAQ />
      <IndexBlog />
      <Footer />
    </div>
  );
};

export default IndexPage;