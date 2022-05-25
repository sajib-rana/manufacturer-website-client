import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
  const { _id, name, img, description, pricePerUnit, AvailableQuantity, minOrderQuantity } = service;
  const navigate = useNavigate();
  const ProductPurchase = (id) => {
    navigate(`/service/${id}`);
  };

  
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{name}</h2>
          <p>Description:{description}</p>
          <p>Price per unit:{pricePerUnit}</p>
          <p>Available Quantity:{AvailableQuantity}</p>
          <p>Minimum Order Quantity:{minOrderQuantity}</p>
          <div className="card-actions justify-end">
            <button onClick={() => ProductPurchase(_id)} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
};

export default Service;