import React from 'react';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import './Explore.css'

const Explore = () => {
    return (
        <div id="explore">
            <Navigation></Navigation>

            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Explore;