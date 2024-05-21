import { useState } from 'react';
import styles from '../../styles/products.module.css';

const Silk1X16ChannelFAQS = () => {
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
        "question": "How long does the battery last in the Signia Silk 1X?",
        "answer": "The Signia Silk 1X uses disposable batteries that typically last for 3 to 7 days, depending on usage patterns, such as the amount of time spent streaming audio from external devices."
      },
      {
        "question": "Can the Signia Silk 1X be worn while exercising or during sports?",
        "answer": "Yes, the Signia Silk 1X is designed to fit securely within the ear canal, making it suitable for physical activities, including sports. It's important, however, to avoid water exposure as the device is not waterproof."
      },
      {
        "question": "Is the Signia Silk 1X compatible with all smartphones?",
        "answer": "The Signia Silk 1X is compatible with most Bluetooth-enabled devices, including iOS and Android smartphones. For specific model compatibility, you can check the Signia compatibility list available on the website or consult with your hearing specialist."
      },
      {
        "question": "How do I control the settings on my Signia Silk 1X?",
        "answer": "You can adjust the settings of your Signia Silk 1X using the Signia app, which allows you to change volume, switch between sound programs, and customize other features directly from your smartphone."
      },
      {
        "question": "What should I do if I experience discomfort or feedback from my hearing aid?",
        "answer": "If you experience any discomfort or feedback, it's recommended to first check the fit and positioning of your hearing aid. If the issue persists, contact your hearing care professional to adjust the fit or explore other settings adjustments. Regular maintenance and cleaning can also help minimize such issues."
      }
      
      
      
      
      
  // Add more FAQ items as needed
];

export default Silk1X16ChannelFAQS;
