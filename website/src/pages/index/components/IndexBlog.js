import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/index.module.css';

const cardsData = [
  {
    id: 1,
    image: '/Home/HomeBlog1.png',
    heading: '7 Healthy Habits for Lifelong Hearing Protection',
    description: 'Hearing involves the harmonious interaction of our mind and body, not just our ears. Adopting healthy practices that enhance general well-being is crucial if we are to effectively safeguard our hearing and maintain lifelong auditory health. This blog post will discuss seven essential behaviors that can promote mental and physical balance while protecting your hearing.',
  },
  {
    id: 2,
    image: '/Home/Home Blog2.png',
    heading: 'Opening Doors to a Vibrant and Connected Life',
    description: 'Imagine living a life in which every interaction, sound, and moment is distinct and alive. At Hearing Hope, we believe that everyone deserves to enjoy the joy and connection that come with having their hearing at its best. We are committed to providing individuals with hearing issues access to a vibrant and connected life through our assortment of services and unique solutions.',
  },
  {
    id: 3,
    image: '/Home/HomeBlog3.png',
    heading: 'The Path to Healthy Hearing: Empowered by Hearing Hope',
    description: 'The ability to hear is a priceless gift that connects us to the people and experiences around us in a world full of the symphony of life. Unfortunately, many people face hearing problems, which can significantly lower their quality of life. Hearing Hope is committed to assisting you on a transformative journey towards better hearing and increased well-being.',
  },
];

const Home = () => {
  return (
    <div>
      <h1 className={styles.blogHeading}>My Blog</h1>
      <div className={styles.cardsContainer}>
        {cardsData.map((card) => (
          <div key={card.id} className={styles.Blogcard}>
            <Image src={card.image} alt={card.heading} width={400} height={200} className={styles.BlogCardimg} />
            <div className={styles.BlogCardContent}>
              <h2 className={styles.BlogCardHeading}>{card.heading}</h2>
              <p className={styles.BlogCardDescription}>{card.description}</p>
              <Link href="/blog" legacyBehavior>
                <a>
              <button className={styles.BlogBtn}>Learn More</button>
              </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.ViewMoreContainer}>
              <Link href="/blog" legacyBehavior>
                <a>
              <button className={styles.ViewMoreBtn}>View More</button>
              </a>
              </Link></div>
    </div>
  );
};

export default Home;
