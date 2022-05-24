import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

     useEffect(()=>{
         fetch('tool.json')
         .then(res =>res.json())
         .then(data => setServices(data))
     },[])
    return (
      <div className="my-28">
        <div className="text-center ">
          <h3 className="text-primary text-xl font-bold uppercase">
            Our services
          </h3>
          <h2 className="text-4xl">Services We Provided</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         {
             services.map(service => <Service
             key={service._id}
             service={service}
             ></Service>)
         }
        </div>
      </div>
    );
};

export default Services;