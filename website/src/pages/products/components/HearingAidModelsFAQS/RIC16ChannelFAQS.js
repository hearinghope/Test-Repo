import { useState } from 'react';
import styles from '../../styles/products.module.css';

const RIC16ChannelFAQS = () => {
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
          "question": "How do I know if the Signia RIC 16-Channel Hearing Aid is right for me?",
          "answer": "The Signia RIC 16-Channel is suitable for individuals with mild to severe hearing loss. It's best to consult with a hearing specialist who can perform a comprehensive hearing test and determine if this model fits your specific hearing needs based on its features and your lifestyle."
        },
        {
          "question": "Can I connect the Signia RIC 16-Channel to my smartphone?",
          "answer": "Yes, the Signia RIC 16-Channel Hearing Aid features Bluetooth connectivity that allows you to connect seamlessly to both Android and iOS devices. You can stream audio directly from your phone, including calls, music, and other media."
        },
        {
          "question": "What is the battery life of the Signia RIC 16-Channel Hearing Aid?",
          "answer": "The Signia RIC offers two battery options: disposable and rechargeable. The rechargeable model provides up to 24 hours of usage on a single charge, while the disposable battery life can vary depending on usage, typically lasting several days."
        },
        {
          "question": "Are there different color options available for the Signia RIC 16-Channel?",
          "answer": "Yes, the Signia RIC 16-Channel Hearing Aid comes in a variety of colors to match your personal style and preference. Common choices include black, silver, and beige, but additional colors may be available. Check with your provider for all available options."
        },
        {
          "question": "What should I do if I experience feedback or whistling sounds from my hearing aid?",
          "answer": "The Signia RIC is equipped with advanced feedback cancellation technology to minimize or eliminate whistling sounds. If you experience ongoing feedback, consider checking the fit of your hearing aid, as an improper fit is a common cause. Additionally, consult with your hearing care professional to adjust the settings or examine the device for any issues."
        }
      
      
  // Add more FAQ items as needed
];

export default RIC16ChannelFAQS;
