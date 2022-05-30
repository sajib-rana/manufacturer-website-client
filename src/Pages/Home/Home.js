import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Contact from './Contact';
import Footer from './Footer';
import NewCollection from './NewCollection';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="px-12">
          <Services></Services>
          <NewCollection></NewCollection>
          <Contact></Contact>
          <BusinessSummery></BusinessSummery>
          <Reviews></Reviews>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Home;