import { useState } from 'react';
import styles from '../../styles/products.module.css';

const Digital12ChannelFAQS = () => {
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
    question: 'How does the Signia Digital 12 Channel hearing aid handle different sound environments? ',
    answer: "The Signia Digital is equipped with adaptive sound technology that detects and adjusts to varying noise levels. Whether you're in a quiet room or a noisy environment, the device enhances speech while reducing unwanted background noise, providing a natural listening experience.",
  },
  {
    question: 'What are the connectivity options available with the Signia Digital 12 Channel?',
    answer: 'This hearing aid offers advanced wireless connectivity options, including Bluetooth. Users can easily connect the device to smartphones, tablets, and other Bluetooth-enabled devices for streaming audio directly to the hearing aid, managing settings, and more through a dedicated mobile app.',
  },
  {
    question: 'Can the Signia Digital 12 Channel be used for all types of hearing loss?',
    answer: 'Yes, the Signia Digital is suitable for a wide range of hearing loss conditions, from mild to severe. Its 12-channel system allows for precise sound adjustments tailored to individual hearing profiles, making it a versatile choice for many users.',
  },
  {
    question: 'How do I maintain and care for my Signia Digital hearing aid?',
    answer: "Maintaining your Signia Digital involves regular cleaning with a soft, dry cloth and storing it in a dry, safe place when not in use. Avoid exposure to water and extreme temperatures. It's also recommended to check and replace the batteries or charge the device as per the manufacturer's instructions.",
  },
  {
    question: 'Where can I purchase the Signia Digital 12 Channel, and what is included in the purchase?',
    answer: "The Signia Digital 12 Channel can be purchased directly from HearingHope.in or through authorized retailers. Each purchase includes the hearing aid, a charging case (for rechargeable models), a user manual, an initial set of batteries (for non-rechargeable models), and a cleaning kit. Customers also have access to initial setup support and a two-year manufacturer warranty.",
  },
  // Add more FAQ items as needed
];

export default Digital12ChannelFAQS;
