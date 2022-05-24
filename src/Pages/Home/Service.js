import React from 'react';

const Service = ({service}) => {
    return (
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={service.img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{service.name}</h2>
          <p>Description:{service.description}</p>
          <p>Price per unit:{service.pricePerUnit}</p>
          <p>Available Quantity:{service.AvailableQuantity}</p>
          <p>Minimum Order Quantity:{service.minOrderQuantity}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Service;