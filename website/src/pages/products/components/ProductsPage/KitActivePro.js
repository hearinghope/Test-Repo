import React from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/pages/WhatsAppButton';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from './styles/productPages.module.css';

const SilkNxCouple = () => {
  return (
    <div>
    <Navbar/>
    <WhatsAppButton />
    <div className={styles.ProductPageContainer}>
    <div className={styles.Heading}>
      <h1 >Silk Rechargeable IX</h1>
    </div>
    <div>
      <Image src='/Products/ActivePro.png' alt='KitActivePro' width={600} height={400} /> 
    </div>
    <div>
      <p>

      </p>
    </div>
    </div>
    <Footer></Footer>

    </div>
  );
};

export default SilkNxCouple;
