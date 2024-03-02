import Image from 'next/image';
import styles from '../styles/products.module.css';

const ProductsHeader3 = () => {
  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.ProductsContent}>
        <h1>All Products</h1>
        <p>Experience the pinnacle of hearing innovation with Hearing Hope&apos;s Signia collection. From discreet designs to powerful digital solutions, each Signia hearing aid combines cutting-edge technology with comfort and style. Rediscover the joy of clear, natural sound as we redefine your auditory experience. At Hearing Hope, we&apos;re committed to bringing you the best in hearing solutions.</p>
      </div>
      <div className={styles.Productsimge}>
        <Image src='/Products/ActivePro.png' alt='Best Seller' width={800} height={400} />
      </div>
    </div>
  );
};

export default ProductsHeader3;
