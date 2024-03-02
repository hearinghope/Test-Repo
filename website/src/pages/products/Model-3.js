import Navbar from '@/components/Navbar';
import ProductsHeader from './components/ProductsHeader';
import styles from './styles/products.module.css';
import Footer from '@/components/Footer';
import Head from 'next/head';
import WhatsAppButton from '../WhatsAppButton';
import ProductsBest from './components/ProductsBest';
import ProductsHeader2 from './components/ProductsHeader2';
import ProductsBest2 from './components/ProductsBest2';

import ProductsHeader3 from './components/ProductsHeader3';
import ProductsBest3 from './components/ProductsBest3';


const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Products</title>
        <link rel="icon" href="./favicon.png" />

      </Head>
      <Navbar />
      <ProductsHeader />
      <ProductsBest />
      <ProductsHeader2 />
      <ProductsBest2 />
      <ProductsHeader3 />
      <ProductsBest3 />
      <Footer />
    </div>
  );
};

export default ProductsPage;