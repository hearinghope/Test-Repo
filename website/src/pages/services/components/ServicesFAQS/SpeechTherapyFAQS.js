import { useState } from 'react';
import styles from '../../styles/service.module.css';

const SpeechTherapyFAQS = () => {
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
    question: 'What age groups do your Speech Therapy Services in Delhi cater to?',
    answer: " Our Speech Therapy Services in Delhi are designed to cater to individuals of all ages, from young children to adults. Each age group receives specialized care tailored to their specific needs.",
  },
  {
    question: ' How long does a typical course of Speech Therapy Services in Delhi last?  ',
    answer: "The duration of speech therapy varies depending on the individual's needs and goals. After an initial assessment, we provide an estimated timeline, but therapy is often adjusted based on progress and ongoing evaluation.    ",
  },
  {
    question: ' Are your Speech Therapy Services in Delhi covered by insurance?  ',
    answer: 'Coverage for speech therapy services depends on your insurance policy. We recommend checking with your insurance provider. Our team can assist with necessary documentation to facilitate claims ',
  },
  {
    question:  'Can I receive Speech Therapy Services at home in Delhi?  ',
    answer: "Yes, we offer flexible options for speech therapy, including in-clinic sessions and at-home services in Delhi, ensuring convenience and comfort for our clients.",
  },
  {
    question: 'What differentiates your Speech Therapy Services in Delhi from others?',
    answer: "At Hearing Hope, we pride ourselves on our personalized approach, qualified therapists, state-of-the-art techniques, and a supportive environment. Our comprehensive and tailored services are designed to meet the unique needs of each individual.",
  },
  
  // Add more FAQ items as needed
];

export default SpeechTherapyFAQS;
