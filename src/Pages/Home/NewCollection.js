import React from 'react';
import collection from '../../images/NewCollection2.jpg'

const NewCollection = () => {
    return (
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={collection} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Our New Collection</h1>
            <p class="py-6">
              This product are very essential for people. We are good review for this product.
            </p>
            <button class="btn btn-primary">See Detail</button>
          </div>
        </div>
      </div>
    );
};

export default NewCollection;