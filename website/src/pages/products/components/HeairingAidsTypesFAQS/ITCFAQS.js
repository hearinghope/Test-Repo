import { useState } from 'react';
import styles from '../../styles/products.module.css';

const ITCFAQS = () => {
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
    question: ' What makes ITC Hearing Aids different from other types of hearing aids?',
    answer: 'ITC (In-The-Canal) Hearing Aids are custom-fitted to sit comfortably inside the ear canal, making them less visible compared to other types. They are designed for mild to moderately severe hearing loss and offer advanced features like noise reduction and wireless connectivity, all in a discreet package.',
  },
  {
    question: 'How do I know if an ITC Hearing Aid is the right choice for me?',
    answer: 'The suitability of an ITC Hearing Aid depends on several factors including the degree of hearing loss, ear anatomy, lifestyle needs, and personal preference. We recommend scheduling a consultation with our audiologists at HearingHope, who can provide a comprehensive assessment and advice.',
  },
  {
    question: 'Can ITC Hearing Aids be connected to smartphones or other devices?',
    answer: 'Yes, many of our ITC Hearing Aids come with wireless connectivity options, allowing them to sync with smartphones, TVs, and other compatible devices. This feature enables easy control and streaming of audio directly to your hearing aids.',
  },
  {
    question: ' How should I care for my ITC Hearing Aid to ensure its longevity?',
    answer: "Regular maintenance is key. This includes daily cleaning, avoiding exposure to moisture and extreme temperatures, and changing batteries or charging as required. We provide detailed care instructions and offer support for any maintenance needs.",
  },
  {
    question: 'What kind of aftercare and support can I expect from HearingHope for my ITC Hearing Aid?',
    answer: 'At HearingHope, we offer extensive aftercare services including regular check-ups, maintenance, and adjustments. Our team is always available for any queries or support, ensuring you continue to enjoy optimal performance from your ITC Hearing Aid.',
  },
  
  // Add more FAQ items as needed
];

export default ITCFAQS;
