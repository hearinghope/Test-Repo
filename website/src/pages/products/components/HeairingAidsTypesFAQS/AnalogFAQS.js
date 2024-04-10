import { useState } from 'react';
import styles from '../../styles/products.module.css';

const AnalogFAQS = () => {
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
    question: 'What is the main difference between Analog Hearing Aids and Digital Hearing Aids? ',
    answer: 'The primary difference lies in how they process sound. Analog Hearing Aids Amplify all sounds (speech and noise) in the same way, while digital hearing aids convert sound into digital signals and can be programmed to amplify certain frequencies more than others, providing a more customized hearing experience.',
  },
  {
    question: 'How long do Analog Hearing Aids typically last?',
    answer: 'With proper care and maintenance, Analog Hearing Aids Can last for several years. The longevity largely depends on the model, usage, and how well they are maintained.',
  },
  {
    question: 'Can Analog Hearing Aids be used for all types of hearing loss?',
    answer: 'Analog Hearing Aids Are suitable for a wide range of hearing loss levels, but they may not be the best option for everyone, especially those with severe or profound hearing loss. It’s best to consult with a specialist at Hearing Hope to determine the most appropriate type for your specific condition.',
  },
  {
    question: 'Are there waterproof Analog Hearing Aids available?',
    answer: "While most Analog Hearing Aids Are designed to be water-resistant to a certain extent, fully waterproof models are less common. It's important to check the specific features of each model and discuss your needs with a Hearing Hope professional.",
  },
  {
    question: 'How do I know if an Analog Hearing Aid is the right choice for me? ',
    answer: "The best way to determine if an Analog Hearing Aid Is right for you is to undergo a hearing evaluation and consult with our hearing specialists. Factors like your hearing loss level, lifestyle, and personal preferences play a significant role in this decision.",
  },
  
  // Add more FAQ items as needed
];

export default AnalogFAQS;
