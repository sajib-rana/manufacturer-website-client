import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="px-12">
          <Services></Services>
          <BusinessSummery></BusinessSummery>
          <Reviews></Reviews>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Home;