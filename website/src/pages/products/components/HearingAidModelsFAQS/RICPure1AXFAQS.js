import { useState } from 'react';
import styles from '../../styles/products.module.css';

const RICPure1AXFAQS = () => {
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
        "question": "How long does the battery last on a full charge?",
        "answer": "The Signia Ric pure 1AX has a high-capacity lithium-ion battery that lasts up to 24 hours with typical use on a full charge. This allows users to enjoy a full day of hearing without the need for frequent recharging."
      },
      {
        "question": "Can I connect the Signia Ric pure 1AX to my smartphone or TV?",
        "answer": "Yes, the Signia Ric pure 1AX features Bluetooth 5.0 connectivity, allowing it to connect seamlessly with smartphones, TVs, and other Bluetooth-enabled devices. This enables direct streaming of calls, music, and television audio right into your hearing aids."
      },
      {
        "question": "Is the Signia Ric pure 1AX suitable for all levels of hearing loss?",
        "answer": "The Signia Ric pure 1AX is designed to accommodate a wide range of hearing loss levels, from mild to severe. It is recommended to consult with a hearing care professional to ensure it is the right fit for your specific hearing needs."
      },
      {
        "question": "What is OVP™, and how does it enhance my hearing experience?",
        "answer": "OVP™ stands for Own Voice Processing, a technology unique to Signia that processes the wearer's voice separately from other sounds. This helps to maintain a natural voice sound, making conversations more enjoyable and personal communication less strenuous."
      },
      {
        "question": "How can I manage settings and adjustments on my Signia Ric pure 1AX?",
        "answer": "The Signia app, available for both iOS and Android devices, offers extensive control over the settings of your Signia Ric pure 1AX. Through the app, you can adjust volume, change programs, and customize settings according to different listening environments, all from your smartphone. This feature adds a layer of convenience and personalization to your hearing aid experience."
      }
      
      
      
  // Add more FAQ items as needed
];

export default RICPure1AXFAQS;
