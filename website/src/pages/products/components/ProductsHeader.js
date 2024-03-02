import Image from 'next/image';
import styles from '../styles/products.module.css';

const ProductsHeader = () => {
  return (
    <div className={styles.ProductsContainer2}>
      <div className={styles.ProductsContent}>
        <h1>Our Best Sellers</h1>
        <p>Explore Hearing Hope&apos;s top-rated hearing aids, where innovation meets comfort. Our bestsellers boast cutting-edge technology, discreet designs, and a commitment to restoring the joy of sound. Elevate your auditory experience with our curated collection, redefining the way you connect with the world. At Hearing Hope, we&apos;re here to make every moment audible and extraordinary.</p>
      </div>
      <div className={styles.Productsimge}>
        <Image src='/Products/BestSeller.png' alt='Best Seller' width={600} height={400} />
      </div>
    </div>
  );
};

export default ProductsHeader;
