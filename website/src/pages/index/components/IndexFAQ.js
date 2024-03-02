import { useState } from 'react';
import styles from '../styles/index.module.css';

const IndexFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      <h1>Frequently Asked Questions</h1>

      {faqData.map((faq, index) => (
        <div className={styles.accordionItem} key={index}>
          <input
            type="checkbox"
            id={`accordion${index + 1}`}
            defaultChecked={activeIndex === index}
          />
          <label
            htmlFor={`accordion${index + 1}`}
            className={styles.accordionItemTitle}
            onClick={() => handleAccordionClick(index)}
          >
            <span className={styles.icon}></span>
            {faq.question}
          </label>
          <div className={`${styles.accordionItemDesc} ${activeIndex === index ? styles.active : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

const faqData = [
  {
    question: 'What are the 3 types of hearing loss?',
    answer: 'Hearing loss affects people of all ages and can be caused by many different factors. The three basic categories of hearing loss are sensorineural hearing loss, conductive hearing loss, and mixed hearing loss.',
  },
  {
    question: 'Can hearing loss be cured?',
    answer: 'Generally, sensorineural hearing loss cannot be cured. Hearing loss is typically treated with hearing aids.',
  },
  {
    question: 'What are the most common causes of hearing loss?',
    answer: 'The most common cause of acquired hearing loss is due to age. However, heredity, exposure to loud noise, medical conditions, and unforeseen accidents also account for over one quarter of people affected by hearing loss.',
  },
  {
    question: 'How Long Does It Take To Get Used To A Hearing Aid?',
    answer: "It can take months for one to get acclimatized with a hearing aid. Small changes right from the start can be noticed, but it's important to be patient. Professional help might be needed during this acclimatization process.",
  },
  {
    question: 'How many years does a hearing aid last?',
    answer: 'Hearing aids generally carry a warranty of two to three years. Variables affecting the lifespan of a hearing aid include how well the instrument is built, how well it is maintained, and how much wear and tear it experiences being worn in your ear for many hours a day.',
  },
  // Add more FAQ items as needed
];

export default IndexFAQ;
