import { useState } from 'react';
import styles from '../../styles/products.module.css';

const PureChargeGo1AX16Channel = () => {
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
            "question": "How long does the battery last on a full charge?",
            "answer": "The Signia Pure Charge & Go 1AX - 16 Channel Hearing Aid offers up to 24 hours of hearing support on a full charge, which includes several hours of streaming. The duration can vary slightly based on usage patterns and settings."
          },
          {
            "question": "Can I connect the Signia Pure Charge & Go 1AX to my smartphone or television?",
            "answer": "Yes, the hearing aid features Bluetooth connectivity that allows you to connect seamlessly to smartphones, televisions, and other compatible devices, enabling you to stream audio directly to your hearing aid."
          },
          {
            "question": "Is the Signia Pure Charge & Go 1AX suitable for all types of hearing loss?",
            "answer": "This model is versatile enough to accommodate a range of hearing loss levels, from mild to severe. We recommend consulting with a hearing specialist at HearingHope.in to ensure it is the right fit for your specific needs."
          },
          {
            "question": "What is Own Voice Processing Technology, and how does it help?",
            "answer": "Own Voice Processing Technology is an advanced feature that processes and optimizes the sound of your own voice separately from other sounds. This results in a more natural listening experience and clearer conversations, as it reduces the 'echo' effect that some hearing aid users experience."
          },
          {
            "question": "How do I maintain my Signia Pure Charge & Go 1AX Hearing Aid?",
            "answer": "Maintenance is straightforward: regularly clean the hearing aid with a dry, soft cloth and avoid exposure to water and extreme temperatures. It’s also important to keep the device in its charging case when not in use to protect it and ensure it is charged and ready for your next use. For more detailed care instructions, refer to the user manual or consult our support team at HearingHope.in."
          }
      
      
  // Add more FAQ items as needed
];

export default PureChargeGo1AX16Channel;
