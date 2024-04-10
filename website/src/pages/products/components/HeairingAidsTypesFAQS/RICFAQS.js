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
    question: 'What are RIC Hearing Aids and how do they differ from other types of hearing aids?',
    answer: ' RIC (Receiver-in-Canal) Hearing Aids feature a design where the speaker or receiver is placed directly in the ear canal, separate from the main body of the hearing aid. This allows for a smaller, more discreet design compared to traditional behind-the-ear models. They offer superior sound quality, are less visible, and can be more comfortable due to their ergonomic design.',
  },
  {
    question: 'Are RIC Hearing Aids suitable for all types of hearing loss?',
    answer: 'RIC Hearing Aids are versatile and can be an excellent choice for a wide range of hearing loss levels, from mild to severe. However, the suitability depends on individual needs and ear anatomy. A consultation with our audiologists can help determine if RIC Hearing Aids are the best option for your specific situation.',
  },
  {
    question: 'How long do RIC Hearing Aids typically last?',
    answer: 'The lifespan of RIC Hearing Aids varies depending on usage, maintenance, and care. On average, they can last between 5-7 years. Regular servicing and proper care can help extend their lifespan.',
  },
  {
    question: 'Can RIC Hearing Aids be connected to smartphones or other devices?',
    answer: "Yes, many modern RIC Hearing Aids come equipped with wireless connectivity options like Bluetooth, allowing them to be paired with smartphones, tablets, and other devices for streaming audio directly to the hearing aids.",
  },
  {
    question: 'What kind of aftercare and support can I expect for my RIC Hearing Aids from Hearing Hope?',
    answer: ' At Hearing Hope, we offer comprehensive aftercare for your RIC Hearing Aids. This includes regular check-ups, cleaning services, repairs, and firmware updates. We also provide ongoing support and guidance to ensure you get the most out of your hearing aids.',
  },
  
  // Add more FAQ items as needed
];

export default CICFAQS;
