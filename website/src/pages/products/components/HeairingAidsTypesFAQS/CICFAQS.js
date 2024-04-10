import { useState } from 'react';
import styles from '../../styles/products.module.css';

const CICFAQS = () => {
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
    question: 'What makes CIC Hearing Aids different from other types of hearing aids?',
    answer: 'CIC (Completely in Canal) Hearing Aids are uniquely designed to fit entirely within the ear canal, making them virtually invisible. They are tailored for individual ear shapes for maximum comfort and utilize advanced sound processing technologies to provide superior sound quality. Their discreet design is ideal for those seeking an unobtrusive hearing solution. ',
  },
  {
    question: 'How do I know if CIC Hearing Aids are the right choice for me?',
    answer: 'CIC Hearing Aids are generally best suited for individuals with mild to moderate hearing loss who value discretion and comfort in a hearing aid. However, the best way to determine if they are right for you is through a professional hearing assessment and consultation, which we provide at HearingHope.in.',
  },
  {
    question: 'Can CIC Hearing Aids be connected to smartphones or other devices?',
    answer: 'Yes, many of our CIC Hearing Aids models come with wireless connectivity options, allowing them to be easily paired with smartphones, televisions, and other Bluetooth-enabled devices for a seamless audio experience.',
  },
  {
    question: 'How do I maintain and care for my CIC Hearing Aids?',
    answer: "Maintaining your CIC Hearing Aids involves regular cleaning with a soft, dry cloth, avoiding exposure to moisture and extreme temperatures, and changing batteries or charging them as needed. We provide comprehensive guidance and support on caring for your hearing aids at HearingHope.in.",
  },
  {
    question: 'What kind of support and aftercare can I expect with my CIC Hearing Aids?',
    answer: 'At HearingHope.in, we offer extensive aftercare support, including regular check-ups, maintenance services, and adjustments as needed. Our team is always available to answer any questions and provide assistance to ensure you have the best experience with your Completely in Canal Hearing Aids.',
  },
  
  // Add more FAQ items as needed
];

export default CICFAQS;
