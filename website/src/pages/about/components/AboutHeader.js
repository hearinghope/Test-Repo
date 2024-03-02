import React from 'react';
import CountUp from 'react-countup';
import Image from 'next/image'; // Import the Image component
import styles from '../styles/about.module.css';

const AboutHeader = ({ start, end, heading }) => {
  return (
    <div className={styles.AboutCounter}>
      <CountUp
        start={start}
        end={end}
        duration={13}
        formattingFn={(value) => (value <= 55000 ? `${value.toLocaleString()} +` : value.toLocaleString())}
        className={styles.CountUp}
      />
      <h2>{heading}</h2>
    </div>
  );
};

const Page = () => {
  const counters = [
    { start: 0, end: 15, heading: 'Years of Experience' },
    { start: 1000, end: 20000, heading: 'Happy Customers' },
    { start: 1000, end: 50000, heading: 'Hearing Aids Sold' },
    { start: 1000, end: 55000, heading: 'Hearing Tests' },
  ];

  return (
    <div className={styles.AboutContainer}>
      <Image src='/About/AboutHeader.png' alt='AboutHeader' width={1200} height={600} />
      <div className={styles.countersContainer}>
        {counters.map((counter, index) => (
          <AboutHeader
            key={index}
            start={counter.start}
            end={counter.end}
            heading={counter.heading}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
