import { useState } from 'react';
import styles from '../../styles/products.module.css';

const KitActive16ChannelFAQS = () => {
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
        "question": "How long does the battery last on a single charge?",
        "answer": "The Signia Kit Active - 16 Channel is equipped with a rechargeable battery that lasts up to 24 hours on a full charge. This duration can vary slightly based on usage patterns, especially if connected to Bluetooth devices frequently."
      },
      {
        "question": "Is the Signia Kit Active - 16 Channel suitable for all types of hearing loss?",
        "answer": "Yes, the Signia Kit Active is designed to accommodate a wide range of hearing loss levels, from mild to severe. However, we recommend consulting with a hearing specialist to ensure it is the best fit for your specific needs."
      },
      {
        "question": "Can I connect the hearing aid to my smartphone or TV?",
        "answer": "Absolutely! The Signia Kit Active - 16 Channel features Bluetooth connectivity, allowing you to easily pair it with smartphones, TVs, and other Bluetooth-enabled devices for a seamless audio experience."
      },
      {
        "question": "What are the options if the hearing aid gets damaged or stops working?",
        "answer": "Signia offers a comprehensive warranty that covers repairs and replacements for damaged devices. Additionally, our customer service team is always available to help troubleshoot any issues you may encounter."
      },
      {
        "question": "How can I adjust the settings on my Signia Kit Active hearing aid?",
        "answer": "You can adjust the settings directly via the onboard controls on the hearing aid or through the Signia smartphone app. The app provides a user-friendly interface for adjusting volume, sound profiles, and other settings, and it also offers remote control functionality if you prefer making adjustments without touching the device."
      },
  // Add more FAQ items as needed
];

export default KitActive16ChannelFAQS;
