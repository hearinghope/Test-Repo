import { useState } from 'react';
import styles from '../../styles/products.module.css';

const PocketFAQS = () => {
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
    question: 'What is a Pocket Hearing Aid?',
    answer: "A pocket hearing aid is a compact and portable hearing device that typically consists of a small unit carried in the pocket connected to earphones. It's designed for individuals with hearing impairment, offering ease of use, discretion, and effective sound amplification.",
  },
  {
    question: 'How Does a Pocket Hearing Aid Differ from Other Types of Hearing Aids?',
    answer: "Pocket hearing aids differ primarily in size and style. Unlike behind-the-ear or in-the-ear models, they are not worn entirely on the ear but are carried in a pocket with earphones providing the sound. This design makes them more user-friendly, especially for those with dexterity issues or who prefer a less visible hearing aid solution.",
  },
  {
    question: 'Are Pocket Hearing Aids Suitable for All Types of Hearing Loss?',
    answer: "Pocket hearing aids are suitable for most types of mild to moderate hearing loss. However, it's important to have a professional assessment to determine if a pocket hearing aid is the best option for your specific hearing needs.",
  },
  {
    question: 'Can I Adjust the Volume and Settings on My Pocket Hearing Aid?',
    answer: "Yes, most pocket hearing aids come with adjustable volume and settings, allowing you to tailor the sound to your preference and adapt to different listening environments.",
  },
  {
    question: 'How Do I Care for and Maintain My Pocket Hearing Aid?',
    answer: "Caring for your pocket hearing aid involves regular cleaning, proper storage, and routine checks. Avoid exposure to moisture and extreme temperatures. It's also important to regularly check and replace batteries or charge the device as per the manufacturer's instructions.",
  },
  
  // Add more FAQ items as needed
];

export default PocketFAQS;
