import React, { useEffect, useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button, Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import './Product.css';
import ad from '../../images/advertisement.png'
import useAuth from '../../hooks/useAuth';

const Product = () => {
    const { productID } = useParams();
    const [products, setProducts] = useState([]);
    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = { clientName: user.displayName, email: user.email, phone: '', address: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    useEffect(() => {
        const url = `http://localhost:5000/products/${productID}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo)

    }

    const handSubmit = e => {
        e.preventDefault();
        const confirmation = window.confirm('Are you sure to place an order?');
        if (confirmation) {
            const booking = {
                propertyName: products.name,
                price: products.price,
                status: 'pending',
                ...bookingInfo
            }
            fetch('http://localhost:5000/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(booking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        setSuccess(true);
                    }
                })
        }

    }

    return (
        <div id="single-product">
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={8} style={{ marginTop: '25px' }}>
                        <h2>{products.name}</h2><br />
                        <img src={products.url} alt="" /><br /><br />
                        <p className="mb-5">{products.description}</p>
                        <Button variant="light">Price: $ {products.price}</Button><br /><br />
                    </Col>
                    <Col xs={12} sm={12} md={4} style={{ marginTop: '25px' }}>
                        <h2 className="mb-5 sidebar-title">Purchase (Share Details)</h2>
                        <form onSubmit={handSubmit}>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Your Name"
                                className="mb-3"
                            >
                                <Form.Control onBlur={handleOnBlur} defaultValue={user.displayName} type="text" name="clientName" required />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Property Name"
                                className="mb-3"
                            >
                                <Form.Control onBlur={handleOnBlur} defaultValue={products.name} type="text" name="propertyName" readOnly />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Property Price"
                                className="mb-3"
                            >
                                <Form.Control onBlur={handleOnBlur} type="number" defaultValue={products.price} name="price" readOnly />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingEmail" label="Email">
                                <Form.Control onBlur={handleOnBlur} type="email" defaultValue={user.email} name="email" required />
                            </FloatingLabel><br />
                            <FloatingLabel controlId="floatingNumber" label="Phone">
                                <Form.Control onBlur={handleOnBlur} type="number" name="phone" required />
                            </FloatingLabel><br />

                            <div className="form-floating">
                                <textarea onBlur={handleOnBlur} required name="address" className="form-control" id="floatingTextarea"></textarea>
                                <label htmlFor="floatingTextarea">Write Your Delivery Address</label>
                            </div><br />
                            <Button type='submit' variant="light">Place Order</Button>
                        </form><br /><br />


                        {success && <Alert variant="success">
                            Your order has been placed successfully.
                        </Alert>}


                        <img src={ad} alt="" className="adv mb-3" />
                    </Col>

                </Row>
            </Container>

            <Footer></Footer>
            <FooterBottom></FooterBottom>

        </div>
    );
};

export default Product;