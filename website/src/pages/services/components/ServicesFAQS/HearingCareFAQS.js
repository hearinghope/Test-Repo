import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingCareFAQS = () => {
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
    question: 'What types of hearing services does Hearing Hope offer?',
    answer: 'At our hearing care clinic in Delhi, we offer a comprehensive range of services, including hearing assessments, hearing aid consultations, fittings, maintenance, and repairs. We also provide personalized hearing loss management plans and tinnitus therapy.',
  },
  {
    question: 'How do I know if I need a hearing test?',
    answer: "If you're experiencing symptoms like difficulty understanding speech, frequently asking others to repeat themselves, or needing to increase the volume on your devices, it might be time for a hearing test. We recommend regular hearing assessments for adults, especially if you have a history of hearing loss in your family.",
  },
  {
    question: 'Are there different types of hearing aids available?',
    answer: 'Yes, we offer a variety of hearing aids to suit different preferences and needs. This includes behind-the-ear (BTE), in-the-ear (ITE), completely in-canal (CIC) models, and more. Our specialists will help you choose the best type based on your hearing assessment and lifestyle requirements.',
  },
  {
    question: 'Does Hearing Hope provide financing options for hearing aids?',
    answer: "Understanding the importance of accessible hearing care, we offer several financing options to make our services and products more affordable. Our staff can provide detailed information about payment plans and insurance coverage options during your visit.",
  },
  {
    question: 'How can I book an appointment with Hearing Hope?',
    answer: "Booking an appointment is easy! You can call us directly at our clinic, use the online booking form on our website, or send us an email. Our team will assist you in scheduling a convenient time for your visit to our hearing care clinic in Delhi.",
  },
  
  // Add more FAQ items as needed
];

export default HearingCareFAQS;
