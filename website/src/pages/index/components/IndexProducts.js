import styles from '../styles/index.module.css';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const IndexProducts = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const certificationsData = useMemo(
    () => [
      { id: 1, imageUrl: '/Products/BestSeller.png', description: 'Silk Rechargeable IX', href: '/products/components/ProductsPage/SilkRechargeableIX' },
      { id: 2, imageUrl: '/Products/SilkNxCouple.png', description: 'Silk Nx Couple', href: '/products/components/ProductsPage/SilkNxCouple' },
      { id: 3, imageUrl: '/Products/Motion CnG SP X.png', description: 'Motion CnG SP X', href: '/products/components/ProductsPage/MotionCnGSPX' },
      { id: 4, imageUrl: '/Products/Styletto RIC.png', description: 'Styletto RIC', href: '/products/components/ProductsPage/StylettoRIC' },
      { id: 5, imageUrl: '/Products/Pure312X.png', description: 'Pure 312X', href: '/products/components/ProductsPage/Pure312X' },
      { id: 6, imageUrl: '/Products/X Charger Styletto.png', description: 'X Charger Styletto', href: '/products/components/ProductsPage/XChargerStyletto' },
      { id: 7, imageUrl: '/Products/Product2.png', description: 'Kit Pure Charge & Go 1AX', href: '/products/components/ProductsPage/KitPureCharge&GoAX' },
      { id: 8, imageUrl: '/Products/InsioCharge&GoAX.png', description: 'Kit Insio Charge & Go AX', href: '/products/components/ProductsPage/KitInsioCharge&GoAX' },
      { id: 9, imageUrl: '/Products/ActivePro.png', description: 'Kit Active Pro', href: '/products/components/ProductsPage/KitActivePro' },
      { id: 10, imageUrl: '/Products/BTEmotionCharge.png', description: 'Kit BTE Motion Charge & Go SP 1X', href: '/products/components/ProductsPage/KitBTEMotionCharge&GoSP1X' },
      { id: 11, imageUrl: '/Products/Styletto.png', description: 'Styletto AX', href: '/products/components/ProductsPage/StylettoAX' },
      { id: 12, imageUrl: '/Products/PureCharge&GoAX.png', description: 'Kit Pure Charge & Go AX', href: '/products/components/ProductsPage/KitPureCharge&GoAX' },
    ],
    []
  );

  const handleImageClick = (href) => {
    router.push(href);
  };

  useEffect(() => {
    const handleAutomaticScroll = () => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the products
      carouselRef.current?.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(handleAutomaticScroll, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the products
    carouselRef.current?.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  const handleWheel = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.ProductcarouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Our Products</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={handleWheel}>
        {certificationsData.map((certification, index) => (
          <div key={certification.id} className={styles.certificationItem} onClick={() => handleManualNavigation(index)}>
            <div onClick={() => handleImageClick(certification.href)}>
              <Image src={certification.imageUrl} alt={`Certification ${certification.id}`} width={350} height={300} />
            </div>
            <p className={styles.ProductsName}>{certification.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {certificationsData.map((_, index) => (
          <span key={index} className={currentSlide === index ? styles.activeDot : styles.dot} onClick={() => handleManualNavigation(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default IndexProducts;
