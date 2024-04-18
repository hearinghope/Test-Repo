import { useState } from 'react';
import styles from '../../styles/service.module.css';

const AudiologistFAQS = () => {
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
    question: 'What types of hearing assessments do you offer at your clinic?',
    answer: "At Hearing Hope, we offer a range of comprehensive hearing assessments, including pure-tone audiometry, speech audiometry, tympanometry, and otoacoustic emissions testing. These assessments help us accurately diagnose the nature and extent of hearing loss and guide us in creating a personalized treatment plan.",
  },
  {
    question: 'Can I trial different hearing aids before making a decision?',
    answer: "Yes, we understand the importance of finding the right hearing aid for your needs. We offer trial periods for various models of hearing aids, allowing you to experience different types and find the one that suits you best in terms of comfort, functionality, and aesthetics.",
  },
  {
    question: 'Do you provide services for children with hearing difficulties?',
    answer: 'Absolutely! We offer pediatric audiology services, including specialized hearing assessments and hearing aid fittings designed for children. Our audiologists are experienced in working with children and provide a friendly and supportive environment for them and their families.    ',
  },
  {
    question: 'How can I manage my tinnitus?',
    answer: "Tinnitus management is a key service at our clinic. We begin with a thorough evaluation to understand the impact of your tinnitus. Based on the assessment, we may recommend various management strategies such as sound therapy, hearing aids with tinnitus masking features, and counseling to help you cope with the condition.",
  },
  {
    question: 'Is ongoing support available after I get my hearing aids?',
    answer: "Yes, we provide continuous support and aftercare for all our patients with hearing aids. This includes regular check-ups, adjustments, and maintenance of the devices. We also offer guidance and tips for better usage, ensuring you get the most out of your hearing aids.",
  },
  
  // Add more FAQ items as needed
];

export default AudiologistFAQS;
