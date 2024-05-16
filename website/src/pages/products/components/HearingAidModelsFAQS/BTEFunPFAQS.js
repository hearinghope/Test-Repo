import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEFunPFAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordion}>
      <h2>Frequently Asked Questions</h2>

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
    question: 'What makes the Signia BTE Fun P suitable for severe hearing loss?',
    answer: 'The Signia BTE Fun P is designed with advanced sound amplification and clarity features that make it ideal for individuals with severe to profound hearing loss, ensuring they can hear clearly in various environments.',
  },
  {
    question: 'How long can I use the Signia BTE Fun P before needing to change the batteries?',
    answer: 'The batteries in the Signia BTE Fun P are designed for extended use, allowing you to enjoy uninterrupted hearing support throughout your day without frequent changes.',
  },
  {
    question: 'Can the Signia BTE Fun P connect to mobile phones or other devices?',
    answer: 'Yes, the Signia BTE Fun P features wireless connectivity options that enable seamless integration with mobile phones, TVs, and other audio devices for enhanced listening experiences.',
  },
  {
    question: 'Is the Signia BTE Fun P comfortable to wear for long periods?',
    answer: "Absolutely, the Signia BTE Fun P is crafted for comfort, with various size options to fit different ear shapes, ensuring comfort even with prolonged use.",
  },
  {
    question: 'Where can I get the Signia BTE Fun P fitted or purchase accessories?',
    answer: "You can visit authorized distributors and service centers listed on our website to get your Signia BTE Fun P professionally fitted or to purchase genuine accessories and parts.",
  },
  // Add more FAQ items as needed
];

export default BTEFunPFAQS;
