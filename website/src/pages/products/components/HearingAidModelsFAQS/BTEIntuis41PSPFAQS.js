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
    question: 'How do I know if the Signia BTE INTUIS 4.1 P/SP is right for my level of hearing loss?',
    answer: 'The Signia BTE INTUIS 4.1 P/SP is designed to accommodate mild to severe hearing loss. We recommend scheduling a hearing test with one of our audiologists who can provide a comprehensive evaluation and recommend the best model for your specific needs.',
  },
  {
    question: 'Can I connect the Signia BTE INTUIS 4.1 P/SP to my smartphone or TV?',
    answer: "Yes, the Signia BTE INTUIS 4.1 P/SP features wireless connectivity options that allow you to connect seamlessly with smartphones, TVs, and other compatible devices. This makes it easier to enjoy your favorite shows, music, and conversations without missing a beat.",
  },
  {
    question: 'What maintenance is required for the Signia BTE INTUIS 4.1 P/SP?',
    answer: ' Regular maintenance for the Signia BTE INTUIS 4.1 P/SP includes daily cleaning with a soft, dry cloth, checking and replacing batteries as needed, and keeping the device dry and free from earwax. Periodic checks with an audiologist are recommended to ensure optimal performance.',
  },
  {
    question: 'Are there different color options available for the Signia BTE INTUIS 4.1 P/SP?',
    answer: "Yes, the Signia BTE INTUIS 4.1 P/SP is available in a variety of colors to suit your personal style and preference. You can choose from a range of shades that best match your skin tone or hair color, making the device as inconspicuous as you prefer.",
  },
  {
    question: 'What should I do if I experience feedback or whistling from my hearing aid?',
    answer: "Feedback or whistling can sometimes occur if the hearing aid is not seated properly in your ear or if the volume is set too high. Try reinserting the hearing aid or adjusting the volume. If the problem persists, contact us for a fit check or to explore other potential solutions like earwax removal or different ear domes. ",
  },
  // Add more FAQ items as needed
];

export default BTEIntuis40PSPFAQS;
