import { useState } from 'react';
import styles from '../../styles/products.module.css';

const RICPure1XFAQS = () => {
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
          "question": "How do I know if the Signia Ric pure 1X is right for me?",
          "answer": "The Signia Ric pure 1X is suitable for a variety of hearing loss levels, from mild to severe. We recommend scheduling a consultation with a hearing specialist at HearingHope.in to assess your specific needs and determine if this model is the best fit for you."
        },
        {
          "question": "Can I connect the Signia Ric pure 1X to my smartphone or other devices?",
          "answer": "Yes, the Signia Ric pure 1X features Bluetooth connectivity, allowing you to stream audio directly from smartphones, TVs, and other compatible devices for a seamless listening experience."
        },
        {
          "question": "What is the battery life of the Signia Ric pure 1X, and how do I charge it?",
          "answer": "The Signia Ric pure 1X uses a rechargeable lithium-ion battery which can last up to 24 hours on a single charge. The device comes with a wireless charging station, making it easy to charge by simply placing the hearing aids on the charger overnight."
        },
        {
          "question": "Are there options to help with tinnitus in the Signia Ric pure 1X?",
          "answer": "Yes, the Signia Ric pure 1X includes integrated tinnitus therapy features that offer various sound therapy options to help manage and mitigate the effects of tinnitus."
        },
        {
          "question": "Is the Signia Ric pure 1X resistant to water and dust?",
          "answer": "Yes, the Signia Ric pure 1X is rated IP68 for dust and moisture resistance. This makes it durable and reliable, even in dusty environments or during light rain, suitable for active users or those living in humid climates."
        }
      
      
      
      
      
  // Add more FAQ items as needed
];

export default RICPure1XFAQS;
