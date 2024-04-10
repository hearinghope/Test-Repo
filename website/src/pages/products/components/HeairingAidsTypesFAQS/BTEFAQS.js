import { useState } from 'react';
import styles from '../../styles/products.module.css';

const HearingAidsTypesFAQ = () => {
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
    question: 'What makes BTE hearing aids different from other types of hearing aids?',
    answer: 'BTE (Behind-The-Ear) hearing aids have the main components housed in a casing that sits behind the ear. This design allows for more power and features, making them suitable for a wide range of hearing losses.',
  },
  {
    question: 'How do I know if a BTE hearing aid is right for me?',
    answer: 'The suitability of a BTE hearing aid depends on various factors, including the degree of hearing loss, lifestyle, and personal preference. Our audiologists can help determine if a BTE hearing aid is the best choice for you during your initial consultation.',
  },
  {
    question: 'How long does it take to adjust to a new BTE hearing aid?',
    answer: 'Adjustment periods vary from person to person. Generally, it can take a few weeks to a couple of months to fully adapt to your new hearing aid. We provide guidance and support throughout this transition period.',
  },
  {
    question: 'Can BTE hearing aids be connected to smartphones or other devices?',
    answer: "Many modern BTE hearing aids come with wireless connectivity options that allow them to be paired with smartphones, TVs, and other devices for a more integrated listening experience.",
  },
  {
    question: 'How often should I have my BTE hearing aid serviced?',
    answer: 'We recommend having your BTE hearing aid professionally serviced at least once a year. However, if you notice any changes in performance, it’s best to schedule an appointment immediately.',
  },
  {
    question: 'Are there financing options available for BTE hearing aids?',
    answer: 'Yes, we offer various financing options to make BTE hearing aids more accessible. Please contact us for more information on the available plans',

  },
  {
    question: ' What should I do if I experience discomfort or feedback from my BTE hearing aid?',
    answer: 'If you experience discomfort or feedback, it’s important to contact us as soon as possible. These issues can often be resolved with a simple adjustment or repair.',
  },
  // Add more FAQ items as needed
];

export default HearingAidsTypesFAQ;
