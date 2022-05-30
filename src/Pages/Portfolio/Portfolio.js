import React from 'react';
import portPic from "../../images/SajibPortfolio.jpeg";

const Portfolio = () => {
    return (
      <div>
        <div class="avatar">
          <div class="w-34 my-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={portPic} alt="" />
          </div>
        </div>
        <div className="text-2xl text-primary ">
          <h2>Name: Sajib Rana</h2>
          <h2>Education Qualification: BSC in CSE</h2>
          <h2>Email: sajibrana444@gmail.com</h2>
          <h2>
            Skill: html, CSS, Bootstrap, Javascript, React, Node, Express.js,
            Mongodb
          </h2>
        </div>
        <div>
          <ul className='my-20 text-2xl text-purple-500'>
            <li>
              <a href="https://monitor-maniacs.netlify.app/">
                First Live website
              </a>
            </li>
            <li>
              <a href="https://rococo-puffpuff-0ac9de.netlify.app/home">
                Second Live website
              </a>
            </li>
            <li>
              <a href="https://adoring-wright-0376ff.netlify.app/">
                Third Live website
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Portfolio;