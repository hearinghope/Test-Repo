import { useState } from 'react';
import styles from '../../styles/products.module.css';

const RechargeableFAQS = () => {
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
    question: 'How long do the batteries in a Rechargeable Hearing Aid last on a single charge?',
    answer: ' The battery life of a Rechargeable Hearing Aid typically ranges from 12 to 30 hours on a single charge, depending on the model and usage. Most models are designed to last a full day of use, and you can simply recharge them overnight.',
  },
  {
    question: ' Are Rechargeable Hearing Aids more expensive than traditional ones?',
    answer: ' Initially, Rechargeable Hearing Aids may have a higher upfront cost compared to traditional battery-operated models. However, they can be more cost-effective in the long run as you save on the ongoing expense of disposable batteries.',
  },
  {
    question: 'Can I use my Rechargeable Hearing Aid while it is charging?',
    answer: 'Typically, Rechargeable Hearing Aids are not designed to be used while charging. It’s recommended to charge them when you’re not using them, such as overnight, ensuring they are ready for use during the day.',
  },
  {
    question: 'How often will I need to replace the rechargeable battery in my hearing aid?',
    answer: "The rechargeable batteries in Rechargeable Hearing Aids generally last for several years before they might need replacing. The exact lifespan varies by model and usage, but on average, you can expect them to last for about 3-5 years.",
  },
  {
    question: 'Are Rechargeable Hearing Aids suitable for all types of hearing loss?',
    answer: "Rechargeable Hearing Aids are available in various models that cater to different degrees of hearing loss, from mild to profound. It's important to have a professional evaluation to determine the most suitable type for your specific hearing needs.",
  },
  
  // Add more FAQ items as needed
];

export default RechargeableFAQS;
