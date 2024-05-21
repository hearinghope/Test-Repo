import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEPromptSPFAQS = () => {
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
    question: ' What types of hearing loss is the Signia BTE Prompt SP suitable for?',
    answer: 'The Signia BTE Prompt SP is specifically designed for individuals with severe to profound hearing loss. It offers advanced features that enhance sound clarity and speech understanding in various environments.',
  },
  {
    question: 'How long does the battery last in the Signia BTE Prompt SP?',
    answer: "The battery life of the Signia BTE Prompt SP depends on usage, especially with features like wireless streaming. Typically, the battery can last several days under normal usage conditions before needing a replacement.",
  },
  {
    question: 'Can I connect the Signia BTE Prompt SP to my smartphone or other devices?',
    answer: 'Yes, the Signia BTE Prompt SP features wireless connectivity options that allow you to stream audio directly from smartphones, TVs, and other compatible devices, enhancing your listening experience.',
  },
  {
    question: 'Is the Signia BTE Prompt SP water-resistant?',
    answer: "The Signia BTE Prompt SP is designed to be robust and durable, with a level of water resistance that protects it from moisture and dust. However, it is not fully waterproof and should not be submerged in water.",
  },
  {
    question: 'How can I adjust the settings on my Signia BTE Prompt SP?',
    answer: "The Signia BTE Prompt SP comes with user-friendly controls that allow you to easily adjust volume and settings. Additionally, it can be connected to a mobile app for more detailed personalization and control over its functions.",
  },
  // Add more FAQ items as needed
];

export default BTEPromptSPFAQS;
