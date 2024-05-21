import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BTEPromptPFAQS = () => {
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
    question: 'What makes the Signia BTE Prompt P different from other hearing aids?',
    answer: 'The Signia BTE Prompt P distinguishes itself with advanced sound technology that enhances speech clarity and reduces background noise, robust durability, and intuitive user controls. These features ensure an optimal balance of performance and user comfort, making it a standout choice for those needing reliable hearing support.',
  },
  {
    question: 'How do I maintain my Signia BTE Prompt P hearing aid for optimal performance?',
    answer: "Regular maintenance of your Signia BTE Prompt P includes daily cleaning with a soft, dry cloth, storing it in a dry, cool place, and ensuring the battery compartment is clean and free of debris. Additionally, it's important to regularly check and replace the batteries to ensure consistent performance.",
  },
  {
    question: 'Can the Signia BTE Prompt P be connected to a smartphone?',
    answer: 'Yes, the Signia BTE Prompt P features Bluetooth connectivity that allows it to seamlessly pair with most smartphones. This connectivity enables you to control the settings of your hearing aid and personalize your hearing experience directly from your phone via the Signia app.',
  },
  {
    question: 'Is the Signia BTE Prompt P suitable for all types of hearing loss?',
    answer: "The Signia BTE Prompt P is versatile and designed to cater to a broad range of hearing loss levels, from mild to severe. Its programmable settings can be precisely adjusted to match individual hearing loss patterns, making it highly effective for various auditory needs.",
  },
  {
    question: 'Where can I purchase the Signia BTE Prompt P and what support is available post-purchase?',
    answer: "The Signia BTE Prompt P can be purchased through authorized retailers, including HearingHope.in. Post-purchase support includes comprehensive customer service, access to certified audiologists for setup and customization, and a warranty for added security. Be sure to consult with a hearing specialist to ensure you choose the best model for your specific needs.",
  },
  // Add more FAQ items as needed
];

export default BTEPromptPFAQS;
