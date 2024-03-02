import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from '../styles/about.module.css';

const AboutTestimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'Ritik Mehta',
      imge: 'R.png',
      stars: 5,
      review: 'Hello, I am Ritik. I recently bought a hearing aid from here. People were there very friendly and helpful and explained it very calmly and reasonably how to use it and their service was very good.',
    },
    {
      id: 2,
      name: 'Suman Kumar Mishra',
      imge: 'S.png',
      stars: 5,
      review: 'Got a new machine feeling better and balanced. Most importantly, they understand the need of a person who visits. Good experience doctor with expertise and staff well mannered. Thank you',
    },
    {
      id: 3,
      name: 'Rahul Marwah',
      imge: 'R.png',
      stars: 5,
      review: 'The staff is very co-operative. They provide the best services to their patients. Thanks.',
    },
    {
      id: 4,
      name: 'Prakash Sharma',
      imge: 'P.png',
      stars: 5,
      review: 'I am a repeat customer of Hearing Hope and bought my new Hearing Aids from them. The whole team is very customer-friendly and gives service with a smile. All the very best to the whole team! ',
    },
    {
      id: 5,
      name: 'Vasundhra Sharma',
      imge: 'V.png',
      stars: 5,
      review: 'Amazing experience and trusted when it comes to product, pricing, and after-sale services. Would highly recommend.',
    },
    {
      id: 6,
      name: 'Srishti Banzal',
      imge: 'S.png',
      stars: 5,
      review: 'The staff was very professional and friendly. They gave my grandmother a very good audiometry and hearing aid trial at home. I would recommend Hearing Hope for your needs.',
    },
    {
      id: 7,
      name: 'Gaurav Vij',
      imge: 'G.png',
      stars: 5,
      review: 'Happy with service. Explained about the product and provided a good hearing aid for my brother.',
    },
    // Add more reviews...
  ];

  return (
    <div className={styles.Testimonialcontainer}>
      <h1 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '40px' }}>Testimonials</h1>
      <div className={styles.TestimonialcardContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.Testimonialcard}>
            <div className={styles.userInfo}>
              <Image
                className={styles.userimge}
                src={`/About/${review.imge}`}
                alt={`${review.name}'s avatar`}
                width={50}
                height={50}
              />
              <div className={styles.userName}>
                {review.name}
                <span className={styles.rating}>{'\u2605'.repeat(review.stars)}</span>
              </div>
              <Image src='/About/google.png' alt='google' height={30} width={30} />
            </div>
            <div className={styles.review}>{review.review}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTestimonials;
