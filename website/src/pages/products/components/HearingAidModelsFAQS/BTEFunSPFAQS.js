import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEFunSPFAQS = () => {
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
    question: 'What makes the Signia BTE Fun SP suitable for various environments?',
    answer: 'The Signia BTE Fun SP features advanced sound technology that adjusts to different settings, ensuring clear sound whether you are in a quiet room or a noisy space.',
  },
  {
    question: 'How long does the battery last on the Signia BTE Fun SP?',
    answer: 'The battery in the Signia BTE Fun SP can last up to two weeks with regular use, depending on the usage frequency and volume settings.',
  },
  {
    question: 'Is the Signia BTE Fun SP hearing aid water-resistant?',
    answer: 'Yes, the Signia BTE Fun SP has a water-resistant rating, making it capable of withstanding moisture and ensuring functionality in diverse weather conditions.',
  },
  {
    question: 'Can I customize the Signia BTE Fun SP to match my style?',
    answer: "Absolutely! The Signia BTE Fun SP comes in various colors, allowing you to choose one that best matches your personal style or remains discreet according to your preference.",
  },
  {
    question: 'Where can I get support for my Signia BTE Fun SP hearing aid?',
    answer: "Support for your Signia BTE Fun SP can be found by contacting our customer service through the contact information provided on our website, where our specialists are ready to assist with any inquiries or support needs.",
  },
  // Add more FAQ items as needed
];

export default BTEFunSPFAQS;
