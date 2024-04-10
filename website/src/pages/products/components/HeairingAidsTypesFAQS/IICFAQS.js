import { useState } from 'react';
import styles from '../../styles/products.module.css';

const IICFAQS = () => {
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
    question: 'What are IIC Hearing Aids and how do they differ from other types of hearing aids?',
    answer: 'IIC Hearing Aids, or Invisible-In-Canal aids, are designed to be virtually undetectable when worn. Unlike larger, more visible types, they fit deep within the ear canal, offering a discreet solution for hearing enhancement. Their advanced technology provides clear sound quality while being hidden from view.',
  },
  {
    question: 'Are IIC Hearing Aids comfortable to wear?',
    answer: "Yes, IIC Hearing Aids are custom-made to fit the unique shape of your ear canal, ensuring maximum comfort. Users often report that after a brief adjustment period, they barely notice they're wearing them. ",
  },
  {
    question: 'Can IIC Hearing Aids help with all types of hearing loss?',
    answer: "IIC Hearing Aids are most effective for individuals with mild to moderate hearing loss. It's important to consult with a hearing specialist at Hearing Hope to determine if this type of aid is suitable for your specific hearing needs.",
  },
  {
    question: ' How do I maintain my IIC Hearing Aids and ensure their longevity?',
    answer: "Regular cleaning and proper storage are key to maintaining your IIC Hearing Aids. It's recommended to use a soft, dry cloth for cleaning and to keep them in a moisture-free case when not in use. Hearing Hope also offers maintenance services and advice.",
  },
  {
    question: 'Can I trial IIC Hearing Aids before making a purchase?',
    answer: 'At Hearing Hope, we understand the importance of finding the right hearing aid. We offer a trial period for our IIC Hearing Aids so you can experience the comfort and quality firsthand before making a decision.',
  },
  
  // Add more FAQ items as needed
];

export default IICFAQS;
