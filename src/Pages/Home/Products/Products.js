import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 6));
            })
    }, [])

    return (
        <div id="products">
            <Container>
                <h2 className="text-center my-5">Featured Properties</h2>
                <Row>

                    {
                        products.map(product => <Col xs={12} md={4} key={product._id}>
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
    );
};

export default Products;