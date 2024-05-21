import { useState } from 'react';
import styles from '../../styles/products.module.css';

const Digital16ChannelFAQS = () => {
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
    question: 'How do I know if the Signia Digital - 16 Channel is right for my hearing needs?',
    answer: "The Signia Digital - 16 Channel is suitable for a wide range of hearing impairments, from mild to severe. We recommend scheduling a consultation with one of our audiologists who can perform a comprehensive hearing assessment and advise whether this model is the best fit for your specific condition.",
  },
  {
    question: 'Can the Signia Digital - 16 Channel connect to my smartphone or tablet?',
    answer: 'Yes, the Signia Digital - 16 Channel features Bluetooth connectivity, allowing it to wirelessly connect to your smartphone, tablet, or other Bluetooth-enabled devices. This enables you to stream audio directly to your hearing aid and control settings through a dedicated mobile app.',
  },
  {
    question: 'What is the battery life of the Signia Digital - 16 Channel, and how often will I need to charge it?',
    answer: 'The Signia Digital - 16 Channel is equipped with a rechargeable lithium-ion battery that provides up to 24 hours of usage on a single charge, depending on usage patterns. Charging is simple and can be done overnight, ensuring the hearing aid is ready to use each morning.',
  },
  {
    question: 'Are there any options available to manage tinnitus with the Signia Digital - 16 Channel?',
    answer: "Yes, the Signia Digital - 16 Channel includes a tinnitus therapy feature that offers relief to users experiencing tinnitus symptoms. This feature generates a therapeutic noise or sound pattern designed to distract from the tinnitus and reduce its impact.",
  },
  {
    question: 'What should I do if I encounter issues with my Signia Digital - 16 Channel hearing aid?',
    answer: "For any technical issues or operational concerns, contact our customer support team immediately. We offer TeleCare support, where you can receive remote assistance and adjustments from our hearing specialists. Additionally, your hearing aid comes with a comprehensive warranty and access to local service centers for more complex issues.",
  },
  // Add more FAQ items as needed
];

export default Digital16ChannelFAQS;
