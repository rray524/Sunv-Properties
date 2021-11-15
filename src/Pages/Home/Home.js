import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id='home'>
            <Navigation></Navigation>
            <Banner></Banner>
        </div>
    );
};

export default Home;