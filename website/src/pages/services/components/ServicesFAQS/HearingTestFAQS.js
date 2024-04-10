import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingTestFAQS = () => {
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
    question: 'What should I expect during my first hearing test at Hearing Hope?',
    answer: "During your first visit for our Hearing Test Service in Delhi, you'll undergo a simple and painless process. It begins with a consultation to understand your hearing history and any concerns. The actual test involves listening to sounds through headphones in a controlled environment. Our audiologists will guide you through each step and explain the results afterward.",
  },
  {
    question: 'How often should I have my hearing tested?',
    answer: "We recommend adults, especially those over the age of 50, to have their hearing tested annually. However, if you are frequently exposed to loud noises, or if you notice any changes in your hearing ability, you should schedule a test sooner. Regular hearing assessments are key to detecting any issues early and managing them effectively.",
  },
  {
    question: 'Are hearing tests at Hearing Hope covered by insurance? ',
    answer: 'The coverage for hearing tests can vary depending on your insurance policy. We advise you to check with your insurance provider. Our staff can also assist you in understanding your coverage and ensuring that you make the most out of your benefits. ',
  },
  {
    question: 'Can Hearing Hope provide hearing aids if they are needed?',
    answer: "Absolutely! If your hearing test indicates that you could benefit from hearing aids, we offer a wide range of options to suit various needs and preferences. Our team will assist you in choosing the most suitable hearing aids and provide fitting, maintenance, and aftercare services",
  },
  {
    question: 'What makes Hearing Hope different from other hearing test providers in Delhi?',
    answer: "Hearing Hope stands out due to our personalized approach, state-of-the-art technology, and comprehensive care. We not only provide Hearing Test Services in Delhi but also offer a full spectrum of hearing solutions, including hearing aids, rehabilitation services, and ongoing support. Our team's expertise and dedication to patient care ensure that you receive the best possible experience and results.",
  },
  
  // Add more FAQ items as needed
];

export default HearingTestFAQS;
