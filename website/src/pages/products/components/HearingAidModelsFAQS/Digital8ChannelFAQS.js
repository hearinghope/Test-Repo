import { useState } from 'react';
import styles from '../../styles/products.module.css';

const Digital8ChannelFAQS = () => {
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
    question: 'How does the Signia Digital 8 Channel hearing aid improve speech clarity in noisy environments?',
    answer: 'The Signia Digital 8 Channel utilizes advanced speech enhancement technology and directional microphones to isolate and amplify speech. This feature helps users clearly hear conversations even in busy settings by focusing on sounds coming from in front of them and reducing background noise.',
  },
  {
    question: 'Can I connect my Signia Digital 8 Channel hearing aid to my smartphone or other Bluetooth devices?',
    answer: 'Yes, the Signia Digital 8 Channel hearing aid is equipped with Bluetooth connectivity, allowing you to stream audio directly from smartphones, tablets, and other Bluetooth-enabled devices. This includes phone calls, music, and sounds from television.',
  },
  {
    question: 'What kind of battery options are available for the Signia Digital 8 Channel hearing aid?',
    answer: 'The Signia Digital 8 Channel is available with both rechargeable and disposable battery options. The rechargeable model offers up to 24 hours of power on a single charge, while the high-quality disposable batteries provide several days of continuous use.',
  },
  {
    question: 'Are there any specific care or maintenance tips for the Signia Digital 8 Channel hearing aid?',
    answer: "To ensure optimal performance and longevity of your Signia Digital 8 Channel hearing aid, regular maintenance such as cleaning the device with a dry, soft cloth and avoiding exposure to water or extreme temperatures is recommended. It’s also important to regularly check and replace batteries as needed and use the dedicated cleaning tools provided to clear any debris from the microphone ports.",
  },
  {
    question: ' How can I adjust the settings on my Signia Digital 8 Channel hearing aid?',
    answer: "The Signia Digital 8 Channel can be adjusted manually on the device itself or through a dedicated smartphone app. The app allows for convenient control over volume, sound profiles, and program settings, enabling you to customize your hearing experience based on different environments or personal preferences.",
  },
  // Add more FAQ items as needed
];

export default Digital8ChannelFAQS;
