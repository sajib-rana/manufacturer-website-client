import React from 'react';

const Blogs = () => {
    return (
      <div className="px-64 mx-auto">
        <h2 className="text-2xl text-primary">
          {" "}
          How will you improve the performance of a React Application?
        </h2>
        <p>
          Optimizing performance in a React application. 1. Keeping component
          state local where necessary.2.Memoizing React components to prevent
          unnecessary re-renders.3.Code-splitting in React using dynamic
          import().4Windowing or list virtualization in React.5.Lazy loading
          images in React.
        </p>
        <h2 className="text-2xl text-primary">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          There are four main types of state you need to properly manage in your
          React apps:Local state, Global state, Server state, URL state.
        </p>
        <h2 className="text-2xl text-primary">
          How does prototypical inheritance work?
        </h2>
        <p>
          Every object with its methods and properties contains an internal and
          hidden property known as [[Prototype]]. The Prototypal Inheritance is
          a feature in javascript used to add methods and properties in objects.
          It is a method by which an object can inherit the properties and
          methods of another object. Traditionally, in order to get and set the
          [[Prototype]] of an object, we use Object.getPrototypeOf and
          Object.setPrototypeOf. Nowadays, in modern language, it is being set
          using __proto__.
        </p>
        <h2 className="text-2xl text-primary">
          Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts
        </h2>
        <p>
          One should never update the state directly because of the following
          reasons: If you update it directly, calling the setState() afterward
          may just replace the update you made. When you directly update the
          state, it does not change this.state immediately. Instead, it creates
          a pending state transition, and accessing it after calling this method
          will only return the present value. You will lose control of the state
          across all components.
        </p>
        <h2 className="text-2xl text-primary">
          What is a unit test? Why should write unit tests?
        </h2>
        <p>
          Unit testing still causes controversy among developers and product
          managers. There are both opponents and supporters of this kind of
          testing. In this article, I’ll highlight the main advantages of unit
          testing.
        </p>
      </div>
    );
};

export default Blogs;