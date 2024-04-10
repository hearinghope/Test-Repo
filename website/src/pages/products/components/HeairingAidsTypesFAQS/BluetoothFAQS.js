import { useState } from 'react';
import styles from '../../styles/products.module.css';

const BluetoothFAQS = () => {
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
    question: 'How do Bluetooth Hearing Aids differ from regular hearing aids?',
    answer: 'Bluetooth Hearing Aids offer advanced connectivity features, allowing them to wirelessly connect to various Bluetooth-enabled devices like smartphones, TVs, and tablets. This enables direct streaming of audio, hands-free calling, and more personalized control through smartphone apps, which are not typically available in regular hearing aids.',
  },
  {
    question: 'Can Bluetooth Hearing Aids connect to any Bluetooth-enabled device?',
    answer: "Most Bluetooth Hearing Aids are designed to be compatible with a wide range of Bluetooth-enabled devices. However, compatibility can vary based on the specific model of the hearing aid and the device. It's recommended to check the compatibility of your hearing aid with the intended devices.",
  },
  {
    question: 'Are Bluetooth Hearing Aids difficult to set up and use?',
    answer: 'Bluetooth Hearing Aids are designed with user-friendliness in mind. Setting them up usually involves a simple pairing process similar to connecting Bluetooth headphones to your smartphone. Many come with easy-to-use apps that guide you through the setup and daily use.',
  },
  {
    question: 'Will using Bluetooth drain the battery of my hearing aid faster?',
    answer: "While using Bluetooth functionality can consume more battery than standard hearing aid use, many modern Bluetooth Hearing Aids are designed to be energy-efficient. Rechargeable models are also available, offering a convenient and eco-friendly option.",
  },
  {
    question: 'Are Bluetooth Hearing Aids more expensive than traditional hearing aids?',
    answer: "The cost of Bluetooth Hearing Aids can be higher than traditional hearing aids due to the advanced technology and features they offer. However, the range of prices and models available means there are options for various budgets, and the additional benefits they provide can be a worthwhile investment.",
  },
  
  // Add more FAQ items as needed
];

export default BluetoothFAQS;
