import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want delete this property?');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const rest = products.filter(product => product._id !== id);
                        setProducts(rest);
                    }
                })
        }

    }
    return (
        <div id="products">
            <Container>
                <h2 className="text-center my-5">Manage your products here:</h2>
                <Row>

                    {
                        products.map(product => <Col xs={12} sm={12} md={12} lg={6} key={product._id}>
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

                                                <Button onClick={() => handleDelete(product._id)} variant="danger">Delete Now</Button>

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

export default ManageProducts;