import Image from 'next/image';
import styles from '../styles/products.module.css';

const ProductsHeader2 = () => {
  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.ProductsContent}>
        <h1>New Arrivals</h1>
        <p>Embark on an auditory adventure with Hearing Hope&apos;s latest launches in hearing aids. Our newest arrivals blend state-of-the-art technology with sleek designs, promising an unparalleled listening experience. Discover innovation that transcends boundaries, providing clarity, comfort, and style. Elevate your hearing journey with our exciting new additions where every sound becomes a celebration. At Hearing Hope, we&apos;re delighted to introduce solutions that redefine the future of hearing.</p>
      </div>
      <div className={styles.Productsimge}>
        <Image src='/Products/Pure CnG IX.png' alt='Best Seller' width={800} height={600} />
      </div>
    </div>
  );
};

export default ProductsHeader2;
