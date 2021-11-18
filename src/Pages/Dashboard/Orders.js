import React, { useEffect, useState } from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orderIndividual?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
        return () => {
            setOrders({});
        };
    }, [])
    const handleDelete = id => {
        const confirmation = window.confirm('Do you want cancel order?');
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
    return (
        <Container>
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
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Orders;