import React from 'react';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import About from './About/About';
import Banner from './Banner/Banner';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div id='home'>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <Reviews></Reviews>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;