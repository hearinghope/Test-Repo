import { useState } from 'react';
import styles from '../../styles/service.module.css';

const HearingAidCentreFAQS = () => {
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
    question: 'What types of hearing aids are available at your centre?',
    answer: 'At Hearing Hope, we offer a wide range of hearing aids including behind-the-ear (BTE), in-the-ear (ITE), completely-in-canal (CIC), and more. Our selection includes the latest models featuring advanced technology such as Bluetooth connectivity and rechargeable batteries.',
  },
  {
    question: 'How do I know if I need a hearing aid?',
    answer: "If you're experiencing difficulties in hearing conversations, noticing a need to increase the volume on your TV or phone, or finding it hard to hear in noisy environments, it may be time to consider a hearing aid. We recommend scheduling a hearing evaluation with our experts for a precise assessment.",
  },
  {
    question: 'How long does it take to get used to a new hearing aid?',
    answer: 'Adjustment periods vary from person to person. Generally, it can take a few weeks to a few months to fully adjust to your new hearing aid. During this time, our team at Hearing Hope provides continuous support and guidance to ensure a smooth transition.',
  },
  {
    question: ' What kind of aftercare and support do you offer?',
    answer: "We offer comprehensive aftercare, which includes regular check-ups, cleaning and maintenance services, and any necessary adjustments to ensure your hearing aid is functioning optimally. Our team is always available to assist with any concerns or questions you might have.",
  },
  {
    question: 'Can I book a hearing test and consultation online?',
    answer: "Yes, you can easily book an appointment for a hearing test and consultation through our website. Just visit our booking page, select a convenient time, and we will confirm your appointment. We welcome you to visit us at our hearing aid centre in Delhi for a personalised experience.",
  },
  
  // Add more FAQ items as needed
];

export default HearingAidCentreFAQS;
