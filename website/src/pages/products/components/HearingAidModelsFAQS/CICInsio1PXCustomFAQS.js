import { useState } from 'react';
import styles from '../../styles/products.module.css';

const CICPromptCustomFAQS = () => {
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
    question: 'How do I know if the Signia CIC Insio 1Px Custom is right for my hearing needs?',
    answer: "The Signia CIC Insio 1Px Custom is suitable for individuals with mild to moderately severe hearing loss. It’s best to consult with an audiologist who can perform a hearing test and recommend whether this model is appropriate for your specific auditory profile.",
  },
  {
    question: 'Can I use the Signia CIC Insio 1Px Custom with my smartphone?',
    answer: "Yes, the Signia CIC Insio 1Px Custom is equipped with Bluetooth technology, allowing it to connect seamlessly with most smartphones. This feature enables direct streaming of calls, music, and other audio directly to your hearing aids for a more integrated hearing experience.",
  },
  {
    question: 'What is the battery life of the Signia CIC Insio 1Px Custom, and how often will I need to replace the battery?',
    answer: 'The battery in the Signia CIC Insio 1Px Custom typically lasts between 7 to 10 days, depending on usage. Factors such as the amount of streaming and the listening environment can affect battery life. It uses a size 10 battery, which is readily available and easy to replace.',
  },
  {
    question: ' How can I maintain my Signia CIC Insio 1Px Custom hearing aids to ensure longevity?',
    answer: "To maintain your hearing aids, it is recommended to clean them daily with a soft, dry cloth. Avoid exposure to water and extreme temperatures. Regularly check and replace batteries, and ensure that the battery compartment is clean and dry. For optimal performance, have them checked by an audiologist periodically.",
  },
  {
    question: 'What warranty comes with the Signia CIC Insio 1Px Custom, and what does it cover?',
    answer: "The Signia CIC Insio 1Px Custom typically comes with a warranty that covers any manufacturing defects for a period of up to two years from the date of purchase. This warranty does not cover damages caused by mishandling, improper maintenance, or exposure to water. Be sure to check with your provider for specific warranty details and any additional coverage options available.",
  },
  // Add more FAQ items as needed
];

export default CICPromptCustomFAQS;
