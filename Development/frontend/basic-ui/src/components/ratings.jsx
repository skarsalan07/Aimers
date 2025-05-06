import React from 'react';
import '../assets/css/rating.css';

const reviews = [
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo maiores enim?',
    name: 'Nikos',
    rating: 4,
  },
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo?',
    name: 'Sofia',
    rating: 3,
  },
  {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo maiores enim? Lorem, ipsum dolor.',
    name: 'Kostas',
    rating: 5,
  },
];

const ReviewSection = () => {
  return (
    <>
      <section className="reviewsSection bgSecondary">
        <ul className="wrapper reviewsGrid">
          {reviews.map((review, index) => (
            <li key={index} className="reviewCard">
              <span className="ratingValue" rating-value={review.rating}></span>
              <p className="reviewerText">{review.text}</p>
              <p className="reviewerName">{review.name}</p>
            </li>
          ))}
        </ul>
      </section>

      
    </>
  );
};

export default ReviewSection;
