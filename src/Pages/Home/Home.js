import React from 'react';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id='home'>
            <Navigation></Navigation>
            <Banner></Banner>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Home;