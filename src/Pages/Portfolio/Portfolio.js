import React from 'react';
import portPic from "../../images/SajibPortfolio.jpeg";

const Portfolio = () => {
    return (
      <div>
        <div class="avatar">
          <div class="w-34 my-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={portPic} alt=''/>
          </div>
        </div>
        <div className='text-2xl text-primary '>
            <h2>Name: Sajib Rana</h2>
            <h2>Education Qualification: BSC in CSE</h2>
            <h2>Email: sajibrana444@gmail.com</h2>
            <h2>Skill: html, CSS, Bootstrap, Javascript, React, Node, Express.js, Mongodb</h2>
        </div>
      </div>
    );
};

export default Portfolio;