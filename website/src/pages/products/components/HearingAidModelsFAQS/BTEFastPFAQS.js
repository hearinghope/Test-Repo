import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEFastPFAQS = () => {
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
    question: ' How does the Signia BTE Fast P enhance speech clarity in noisy environments',
    answer: 'The Signia BTE Fast P utilizes advanced sound processing technology to distinguish between speech and noise, enhancing voice clarity and reducing background sounds, ensuring clear communication in various environments.',
  },
  {
    question: 'What are the connectivity options available with the Signia BTE Fast P?',
    answer: 'This hearing aid offers Bluetooth connectivity, allowing users to wirelessly stream audio directly from smartphones, tablets, and other Bluetooth-enabled devices, enhancing the listening experience for calls and media playback.',
  },
  {
    question: 'Is the Signia BTE Fast P suitable for all levels of hearing loss?',
    answer: 'Yes, the Signia BTE Fast P is designed to accommodate a range of hearing loss levels, from mild to severe, with customizable settings that can be adjusted to meet individual auditory needs.',
  },
  {
    question: 'How long does the battery last in the Signia BTE Fast P, and is it rechargeable?',
    answer: "The battery life varies depending on usage, but typically lasts several days under normal conditions. The current model uses disposable batteries, but users should check for any updates or newer models with rechargeable options.",
  },
  {
    question: 'Can I wear the Signia BTE Fast P while participating in sports or outdoor activities?',
    answer: "Yes, the Signia BTE Fast P is designed with a durable and water-resistant build, making it suitable for sports and outdoor activities. However, it is advisable to use additional protection in extreme conditions to ensure the device's longevity.",
  },
  // Add more FAQ items as needed
];

export default BTEFastPFAQS;
