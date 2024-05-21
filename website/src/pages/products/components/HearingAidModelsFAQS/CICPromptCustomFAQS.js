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
    question: 'How long does the battery last in the Signia CIC Prompt Custom?',
    answer: "The battery life depends on usage, but typically, the zinc-air batteries can last up to 7 days with standard use. There's also a rechargeable option available which can be recharged overnight for a full day's use.",
  },
  {
    question: 'Is the Signia CIC Prompt Custom suitable for all types of hearing loss?',
    answer: "The Signia CIC Prompt Custom is most suitable for individuals with mild to moderately severe hearing loss. It may not be suitable for severe to profound hearing loss, so it's best to consult with an audiologist for a personalized assessment.",
  },
  {
    question: 'Can I use the Signia CIC Prompt Custom with my smartphone?',
    answer: 'Yes, the Signia CIC Prompt Custom is equipped with Bluetooth technology that allows it to connect with compatible smartphones. This connectivity enables direct streaming of calls and media as well as control over the hearing aid settings through dedicated apps.',
  },
  {
    question: 'Are there any waterproof options available for the Signia CIC Prompt Custom?',
    answer: "The Signia CIC Prompt Custom is designed to be durable and includes models that are rated IP68 for water and dust resistance. While they are resistant to moisture and can handle sweat or light rain, they are not fully waterproof and should not be submerged in water.",
  },
  {
    question: 'What warranty options are available with the Signia CIC Prompt Custom?',
    answer: "The Signia CIC Prompt Custom comes with a standard 2-year manufacturer's warranty, which covers any defects in materials or workmanship. Extended warranties and service plans may also be available through your hearing aid provider or specialist.",
  },
  // Add more FAQ items as needed
];

export default CICPromptCustomFAQS;
