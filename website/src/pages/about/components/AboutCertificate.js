import React, { useRef, useState, useEffect, useMemo } from 'react';
import styles from '../styles/about.module.css';
import Image from 'next/image'; // Import the Image component

const AboutCertifications = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Wrap the initialization of 'certificationsData' in useMemo
  const certificationsData = useMemo(
    () => [
      { id: 1, imageUrl: '/About/Certificate1.jpg' },
      { id: 2, imageUrl: '/About/Certificate2.jpg' },
      { id: 3, imageUrl: '/About/Certificate3.png' },
      { id: 4, imageUrl: '/About/Certificate4.png' },
      { id: 5, imageUrl: '/About/Certificate5.png' },
      { id: 6, imageUrl: '/About/Certificate6.png' },
      { id: 7, imageUrl: '/About/Certificate7.png' },
      { id: 8, imageUrl: '/About/Certificate8.png' },
    ],
    []
  );

  useEffect(() => {
    const handleAutomaticScroll = () => {
      const nextSlide = (currentSlide + 1) % certificationsData.length;
      setCurrentSlide(nextSlide);
      const scrollPosition = nextSlide * 320; // Adjust based on the width of the certificationItem
  
      // Check if carouselRef.current is not null before using it
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    };
  
    const interval = setInterval(() => {
      handleAutomaticScroll('right');
    }, 7000); // Adjust the duration for automatic scrolling
  
    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, certificationsData]);
  

  const handleManualNavigation = (index) => {
    setCurrentSlide(index);
    const scrollPosition = index * 320; // Adjust based on the width of the certificationItem

    // Use scrollTo with behavior: 'smooth' for smooth scrolling
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <h1 style={{ color: '#ff6600', fontSize: '45px' }}>Certifications</h1>
      <div className={styles.carousel} ref={carouselRef} onWheel={(e) => e.preventDefault()}>
        {certificationsData.map((certification, index) => (
          <div key={certification.id} className={styles.certificationItem}>
            <Image src={certification.imageUrl} alt={`Certification ${certification.id}`} width={320} height={200} />
            <h3>{certification.heading}</h3>
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

export default AboutCertifications;
