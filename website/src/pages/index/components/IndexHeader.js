// pages/index.js
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/index.module.css';

const images = [
  { path: '/Home/HomeCarousel3.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel2.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel4.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel5.png', width: 800, height: 600 },
  { path: '/Home/HomeCarousel1.png', width: 800, height: 600 },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = images.map((image, index) => {
      const img = new window.Image(); // Use the native Image constructor
      img.src = image.path;
      img.onload = () => {
        if (index === images.length - 1) {
          setIsLoaded(true);
        }
      };
      return img;
    });

    const interval = setInterval(() => {
      if (isLoaded) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isLoaded]);

  return (
    <div className={styles.Homecarousel}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.Homeslide} ${index === currentIndex ? styles.Homeactive : ''}`}
          style={{
            display: index === currentIndex ? 'block' : 'none',
            transition: 'display 1s ease-in-out',
            zIndex: index === currentIndex ? 1 : 0,
          }}
        >
          <Image src={image.path} alt={`Slide ${index + 1}`} width={image.width} height={image.height} />
        </div>
      ))}
    </div>
  );
};

const IndexHeader = () => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default IndexHeader;
