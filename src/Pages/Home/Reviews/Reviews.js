import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import './Reviews.css'
import Rating from 'react-rating';

const Reviews = () => {
    const settings = {
        className: 'center',
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        cssEase: "linear",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div id="reviews" style={{ background: '#f0f5fa', padding: '34px 0' }}>
            <Container className="my-5">
                <h2 className="text-center my-5">Testimonials</h2>
                <Slider {...settings}>
                    {
                        reviews.map(review => <div className="text-center carousel-container" key={review._id}>
                            <img src={review.url} alt="" />
                            <h2>{review.client}</h2>
                            <Rating
                                name="rating"
                                readonly
                                initialRating={review.star}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            />
                            <p>{review.testimonial}</p>
                        </div>)
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default Reviews;