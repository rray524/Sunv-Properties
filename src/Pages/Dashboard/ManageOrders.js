import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [reload])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want cancel order?')
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }
                })
        }
    }

    const handlePut = id => {
        const confirmation = window.confirm('Do you want Ship this order?');
        if (confirmation) {
            const url = `http://localhost:5000/confirmation/${id}`;
            fetch(url, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(true);
                    }
                })
        }

    }


    return (
        <Container>
            <h2 style={{ background: "#00acff", margin: '9px 0', padding: '6px 6px' }}>You have total: {orders.length} orders</h2>
            <Row>
                {
                    orders.map(order => <Col key={order._id} xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                            <p className="text-center">Order#{order._id}</p>
                            <Card.Body>
                                <Card.Title>{order.propertyName}</Card.Title>
                                <Card.Text>
                                    Address: {order.address}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Order Created: {order.clientName}</ListGroupItem>
                                <ListGroupItem>Price: $ {order.price}</ListGroupItem>
                                <ListGroupItem>Phone: {order.phone}</ListGroupItem>
                                <ListGroupItem>Status: {order.status}</ListGroupItem>
                                <ListGroupItem>Email: {order.email}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button onClick={() => handleDelete(order._id)} variant="danger">Delete Order</Button>
                                <Button onClick={() => handlePut(order._id)} variant="success" className="ms-2">Ship Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default ManageOrders;