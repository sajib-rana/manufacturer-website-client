import React from "react";
import bg from "../../images/bg.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${bg})` }} >
      <div className="text-2xl text-success uppercase my-5">
        <h3>For More Infomation</h3>
        <h2>Stay Connected With Us</h2>
      </div>
      <form>
        <input
          className=" w-96 p-2 rounded fs-5"
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          className="mt-2 w-96 p-2 rounded fs-5"
          type="text"
          placeholder="Your address"
        />
        <br />
        <textarea
          className="mb-2 mt-2 w-96 h-64 p-2 rounded fs-5"
          type="text"
          placeholder="Your opinion"
        />
      </form>
    </div>
  );
};

export default Contact;
