import { useState } from 'react';
import styles from '../../styles/products.module.css';

const WirelessFAQS = () => {
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
    question: 'How long do the batteries last in Wireless Hearing Aids?',
    answer: 'The battery life of Wireless Hearing Aids varies depending on the model and usage. Rechargeable wireless hearing aids can last anywhere from 12 to 30 hours on a single charge, while those with disposable batteries typically last 5 to 14 days, based on usage patterns.',
  },
  {
    question: 'Can Wireless Hearing Aids connect to any smartphone or device?',
    answer: "Most Wireless Hearing Aids are compatible with a wide range of smartphones and devices, especially those with Bluetooth capabilities. However, compatibility can vary, so it's always best to check with Hearing Hope or refer to the specific model's specifications.",
  },
  {
    question: 'Are Wireless Hearing Aids difficult to use for those who are not tech-savvy?',
    answer: 'Wireless Hearing Aids are designed to be user-friendly, with intuitive controls and easy connectivity options. Many models come with smartphone apps that simplify control and customization. Hearing Hope also provides comprehensive guidance and support to ensure users are comfortable with their new hearing aids.',
  },
  {
    question: 'Will Wireless Hearing Aids be affected by interference from other wireless devices?',
    answer: "Modern Wireless Hearing Aids use advanced technology to minimize interference from other devices. They operate on specific frequencies and have built-in features to reduce the likelihood of interference, ensuring clear and consistent sound quality.",
  },
  {
    question: 'Are Wireless Hearing Aids more expensive than traditional hearing aids?',
    answer: "The cost of Wireless Hearing Aids can be higher than some traditional models due to advanced technology and features. However, considering their benefits like connectivity, sound quality, and convenience, many find them to be a valuable investment in their hearing health and quality of life.",
  },
  
  // Add more FAQ items as needed
];

export default WirelessFAQS;
