import React from 'react';
import { Col, Nav, Row, Tab, Button, Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import './Dashboard.css';
import Payment from './Payment';
import Review from './Review';

const Dashboard = () => {
    return (
        <div id="dashboard">
            <Navigation></Navigation>
            <div className="tab-container" style={{ margin: '34px 0' }}>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Review</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">My Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Pay</Nav.Link>
                                    </Nav.Item>
                                    <Button variant="light">Logout</Button>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first" style={{ marginTop: '10px' }}>
                                        <Review></Review>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" style={{ marginTop: '10px' }}>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" style={{ marginTop: '10px' }}>
                                        <Payment></Payment>
                                        <h2 className="my-5">Payment system coming soon</h2>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div>
    );
};

export default Dashboard;