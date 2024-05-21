import { useState } from 'react';
import styles from '../../styles/products.module.css';

const KITStyletto1AX16ChannelFAQS = () => {
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
          "question": "How do I set up my Signia KIT Styletto 1AX- 16 Channel for the first time?",
          "answer": "Setting up your new hearing aid is straightforward. First, fully charge your device using the provided charging case. Download the Signia app on your smartphone to connect via Bluetooth, and follow the in-app guide to personalize your settings. For further assistance, you can also visit our website or contact our support team."
        },
        {
          "question": "Can I connect the Styletto 1AX to my smartphone or TV?",
          "answer": "Yes, the Styletto 1AX features Bluetooth connectivity, allowing you to easily connect with smartphones, televisions, and other compatible devices. This enables you to stream audio directly to your hearing aid, enhancing your listening experience during calls, while watching TV, or listening to music."
        },
        {
          "question": "What maintenance is required for the Signia KIT Styletto 1AX?",
          "answer": "To ensure optimal performance and longevity, clean your hearing aid regularly using a soft, dry cloth. Avoid exposure to water and extreme temperatures. It's also recommended to keep the device in its charging case when not in use to protect it and ensure it is always charged."
        },
        {
          "question": "Is there a warranty on the Signia KIT Styletto 1AX- 16 Channel?",
          "answer": "Yes, the Styletto 1AX comes with a two-year manufacturer's warranty covering defects in materials and workmanship. Additional coverage options are available for purchase to extend protection and include services like damage from handling."
        },
        {
          "question": "Where can I buy the Signia KIT Styletto 1AX- 16 Channel?",
          "answer": "You can purchase this hearing aid directly from our website, HearingHope.in, or by visiting one of our authorized retailers. For a personalized purchasing experience, you can also schedule a consultation with one of our hearing specialists through the website or by calling our customer service hotline."
        }
      
      
  // Add more FAQ items as needed
];

export default KITStyletto1AX16ChannelFAQS;
