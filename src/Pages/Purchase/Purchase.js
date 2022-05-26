import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
    const { productId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
      fetch(`http://localhost:5000/service/${productId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [productId, service]);

    const handleForm = event =>{
              event.preventDefault();
              const number = event.target.number.value;
              
    }
  return (
    <div>
      <div className="card lg:max-w-lg items-center mt-5 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={service.img} alt="Album" />
        </figure>
        <div className="card-body text-2xl text-left">
          <h2 className="card-title">Name: {service.name}</h2>
          <p className="text-xl">Description: {service.description}</p>
          <h5>Available Quantity: {service.AvailableQuantity}</h5>
          <h5>Price Per Unit: {service.pricePerUnit}</h5>
          <h5>Minimum Order Quantity: {service.minOrderQuantity}</h5>
        </div>
      </div>
      <div>
        <div class="card lg:max-w-lg items-center mx-auto my-12 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title mx-auto uppercase text-success">Purchase</h2>
            <form>
              <input className="border-2" type="number" name="number" id="" />
              <button onClick={handleForm} className="btn btn-primary block m-5">
              Place Order
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
