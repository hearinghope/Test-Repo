import React, { useState, useEffect, useMemo } from 'react';
import styles from '../styles/index.module.css';

const IndexAbout = () => {
  const countingNumbersData = useMemo(() => [
    { id: 1, value: 15, name: 'Years of Experience' },
    { id: 2, value: 20000, name: 'Happy Customers' },
    { id: 3, value: 50000, name: 'Hearing Aids Sold' },
    { id: 4, value: 55000, name: 'Hearing Tests' },
  ], []); // Empty dependency array means it only runs once on mount

  const [animatedValues, setAnimatedValues] = useState(countingNumbersData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) => {
        return prevValues.map((prevValue, index) => {
          const step = countingNumbersData[index].value / 100;
          const newValue = Math.min(prevValue + step, countingNumbersData[index].value);
          return newValue;
        });
      });
    }, 100); // Adjust the interval for smoother animation or change the animation method if needed

    return () => clearInterval(interval);
  }, [countingNumbersData]); // Run once on component mount

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutColumn}>
        <h2 style={{ color: 'teal', fontSize: '45px' }}>Welcome To Hearing Hope</h2>
        <p>
        We are <span style={{color: '#ff6600'}}>Signia Certified Center.</span> Our mission is to improve the health of our community by providing high quality, comprehensive hearing care in a welcoming and compassionate environment.

On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your hearing care. Our goal is to provide the highest quality and most up-to-date Hearing treatments available in a professional and caring manner. We are committed to helping you attain your rehabilitation goals. It is also our goal to provide you with outstanding service.
        </p>
      </div>

      <div className={styles.countingNumbersColumn}>
        <div className={styles.upperNumbers}>
          {countingNumbersData.slice(0, 2).map((number, index) => (
            <div key={number.id} className={styles.countingNumber}>
              <h3>
                {animatedValues[index].toFixed(0)}
                {number.value === 15 || number.value === 20000 ? '+' : ''}
              </h3>
              <p>{number.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.lowerNumbers}>
          {countingNumbersData.slice(2).map((number, index) => (
            <div key={number.id} className={styles.countingNumber}>
              <h3>
                {animatedValues[index + 2].toFixed(0)}
                {number.value === 50000 ? '+' : '' || 55000 ? '+' : ''} 
              </h3>
              <p>{number.name}</p>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default IndexAbout;
