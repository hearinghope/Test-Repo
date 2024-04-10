import { useState } from 'react';
import styles from '../../styles/products.module.css';

const MicroInCanalFAQS = () => {
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
    question: 'What is a Micro In Canal Hearing Aid and how does it differ from other types?',
    answer: "A Micro In Canal (MIC) Hearing Aid is a type of hearing aid designed to fit almost completely inside your ear canal, making it nearly invisible. It differs from other types, like Behind-The-Ear or In-The-Ear aids, in terms of size, visibility, and how it uses the ear's natural acoustics for a more natural sound.",
  },
  {
    question: 'Who is the ideal candidate for a Micro In Canal Hearing Aid?',
    answer: "Ideal candidates for Micro In Canal hearing aids include individuals with mild to moderate hearing loss, those who prefer a discreet hearing solution, active lifestyle enthusiasts, tech-savvy users, and those comfortable with handling small devices. First-time hearing aid users may also find them appealing due to their ease of use and comfort.",
  },
  {
    question: 'How do I know if a Micro In Canal Hearing Aid is right for me?',
    answer: 'The best way to determine if a Micro In Canal hearing aid is right for you is to consult with a hearing specialist. They can assess your hearing needs, lifestyle, and preferences to recommend the most suitable option. At HearingHope.in, our experts are available to guide you through this process.',
  },
  {
    question: 'Can Micro In Canal Hearing Aids be connected to smartphones or other devices?',
    answer: "Yes, many Micro In Canal hearing aids come equipped with wireless connectivity, allowing you to easily connect with smartphones, televisions, and other electronic devices for a seamless audio experience.",
  },
  {
    question: 'What kind of after-sale support can I expect for my Micro In Canal Hearing Aid?',
    answer: "At HearingHope.in, we offer comprehensive after-sale support for your Micro In Canal hearing aid, including regular maintenance checks, repairs, and adjustments to ensure your hearing aid is functioning optimally. Our dedicated team is always available to answer your queries and provide assistance.",
  },
  
  // Add more FAQ items as needed
];

export default MicroInCanalFAQS;
