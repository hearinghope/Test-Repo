import styles from '../styles/index.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import React, { useRef, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

const IndexCertifications = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificationsData = useMemo(
    () => [
      { id: 1, imgeUrl: '/Home/Certificate1.jpg' },
      { id: 2, imgeUrl: '/Home/Certificate2.jpg' },
      { id: 3, imgeUrl: '/Home/Certificate3.png' },
      { id: 4, imgeUrl: '/Home/Certificate4.png' },
      { id: 5, imgeUrl: '/Home/Certificate5.png' },
      { id: 6, imgeUrl: '/Home/Certificate6.png' },
      { id: 7, imgeUrl: '/Home/Certificate7.png' },
      { id: 8, imgeUrl: '/Home/Certificate8.png' },
    ],
    []
  );

  useEffect(() => {
    const handleAutomaticScroll = (direction) => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the certificationItem

      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(() => {
      handleAutomaticScroll('right');
    }, 5000); // Adjust the duration for automatic scrolling

    return () => clearInterval(interval);
  }, [currentSlide, certificationsData]);

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the certificationItem

    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Certifications</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={(e) => e.preventDefault()}>
        {certificationsData.map((certification, index) => (
          <div
            key={certification.id}
            className={styles.certificationItem}
            onClick={() => handleManualNavigation(index)}
          >
            <Image
              src={certification.imgeUrl}
              alt={`Certification ${certification.id}`}
              width={320} // Adjust the width
              height={200} // Adjust the height
            />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {certificationsData.map((_, index) => (
          <span
            key={index}
            className={currentSlide === index ? styles.activeDot : styles.dot}
            onClick={() => handleManualNavigation(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IndexCertifications;
