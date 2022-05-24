import React from 'react';
import people1 from '../../images/people1.png'
import people2 from '../../images/people2.png'
import people3 from '../../images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
      {
        _id: 1,
        name: "Winson Herry",
        location: "California",
        review: "that is very good product.I am very satisfy to buy it",
        img: people1,
      },
      {
        _id: 2,
        name: "Winson Herry",
        location: "California",
        review: "Its help me a lot.Because they serve very good product",
        img: people2,
      },
      {
        _id: 3,
        name: "Winson Herry",
        location: "California",
        review: "I am very glad to use their product.that is very good product",
        img: people3,
      },
    ];
    return (
      <section className='py-10'>
        <div className="flex justify-between">
          <div className='mx-auto mt-10'>
            <h4 className="text-xl text-primary font-bold">People Review</h4>
            <h4 className="text-3xl text-success uppercase">
              What customers opinion about our product
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-gap-5">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </section>
    );
};

export default Reviews;