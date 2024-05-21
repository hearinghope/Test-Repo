import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEIntuis40PSPFAQS = () => {
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
    question: 'How do I pair my Signia BTE INTUIS 4.0 P/SP with my smartphone?',
    answer: 'To pair your Signia BTE INTUIS 4.0 P/SP with a smartphone, turn on the Bluetooth setting on both the hearing aid and your phone. Search for available devices on your phone’s Bluetooth menu, select your hearing aid from the list, and follow the prompts to complete the pairing process.',
  },
  {
    question: 'What should I do if my Signia BTE INTUIS 4.0 P/SP gets wet?',
    answer: "If your Signia BTE INTUIS 4.0 P/SP becomes wet, remove it and dry it gently with a soft, dry cloth. Avoid using heat to dry the hearing aid. Although it has a high IP rating for water resistance, it’s advisable to keep the device as dry as possible.",
  },
  {
    question: 'Can I wear my Signia BTE INTUIS 4.0 P/SP while sleeping or during sports activities?',
    answer: 'It is not recommended to wear your Signia BTE INTUIS 4.0 P/SP while sleeping as it may cause discomfort and risk damage to the device. For sports, consider the nature of the activity; the device is secure for low-impact activities but may not be suitable for high-impact or water sports.',
  },
  {
    question: 'How often should I replace the batteries in my Signia BTE INTUIS 4.0 P/SP?',
    answer: "Battery life depends on usage, settings, and whether you are using rechargeable or disposable batteries. Typically, disposable batteries might need replacement every 1-2 weeks, while rechargeable batteries can last up to a full day on a single charge.",
  },
  {
    question: 'Where can I get my Signia BTE INTUIS 4.0 P/SP serviced or repaired?',
    answer: "You can take your Signia BTE INTUIS 4.0 P/SP to any authorized service center or contact hearinghope.in for assistance. They can guide you to the nearest service location or help with direct manufacturer support.",
  },
  // Add more FAQ items as needed
];

export default BTEIntuis40PSPFAQS;
