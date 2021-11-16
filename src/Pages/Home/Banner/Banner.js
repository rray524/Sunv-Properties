import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstSlide from '../../../images/slide-1.jpg';
import secondSlide from '../../../images/slide-2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade className='banner'>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={firstSlide}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Properties in Bulgaria for sale and for rent</h1>
                    <p>Buy houses in Bulgaria , apartments and flats, land offices, rural property and hotels.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={secondSlide}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Properties in Bulgaria for sale and for rent</h1>
                    <p>Buy houses in Bulgaria , apartments and flats, land offices, rural property and hotels.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;