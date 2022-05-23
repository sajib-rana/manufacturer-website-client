import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;