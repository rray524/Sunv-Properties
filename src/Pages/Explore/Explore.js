import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import './Explore.css'

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    return (
        <div id="explore">
            <Navigation></Navigation>
            <div id="products">
                <Container>
                    <h2 className="text-center my-5">Featured Properties</h2>
                    <Row>

                        {
                            products.map(product => <Col xs={12} sm={12} md={6} lg={4} key={product._id}>
                                <div className="card text-white card-has-bg click-col mb-4" style={{ backgroundImage: `url(${product.url})` }}>
                                    <img className="card-img d-none" src={product.url} alt="Goverment" />
                                    <div className="card-img-overlay d-flex flex-column">
                                        <div className="card-body">
                                            <small className="card-meta mb-2">Properties Title:</small>
                                            <h4 className="card-title mt-0 ">{product.name.slice(0, 30)}</h4>
                                            <p>{product.description.slice(0, 120)}</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="media">

                                                <div className="media-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Link to={`/product/${product._id}`}>
                                                        <Button variant="light">Buy Now</Button>
                                                    </Link>
                                                    <Button variant="light">${product.price}</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>)
                        }

                    </Row>
                </Container>
            </div >
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Explore;