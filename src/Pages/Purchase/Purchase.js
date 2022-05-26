import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
    const { productId } = useParams();
    const [service, setService] = useState({})
    const [user] = useAuthState(auth);
    useEffect(() => {
      fetch(`http://localhost:5000/service/${productId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [productId, service]);

    const handleOrder = event => {
      event.preventDefault();

      const number = event.target.number.value;
      const order = {
        name: user.displayName,
        quantity: number,
        customer: user.email,
        phone: event.target.phone.value
      }

      fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => {
        throw err
      })

      event.target.number.value = ''
      event.target.phone.value = "";
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
            <form onSubmit={handleOrder}>
              <input
                className=" input input-bordered w-full max-w-xs"
                placeholder=" Quantity"
                type="number"
                name="number"
                min="5"
                max={service.AvailableQuantity}
                id=""
              />
              <input
                type="text"
                name="name"
                disabled
                value={user?.displayName || ""}
                className="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="email"
                name="email"
                disabled
                value={user?.email || ""}
                className="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs my-4"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary w-full max-w-xs my-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
