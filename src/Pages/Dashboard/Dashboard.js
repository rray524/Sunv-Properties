import React from 'react';
import { Col, Nav, Row, Tab, Button, Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import FooterBottom from '../Shared/Footer/FooterBottom';
import Navigation from '../Shared/Navigation/Navigation';
import AddProduct from './AddProduct';
import './Dashboard.css';
import MakeAdmin from './MakeAdmin';
import ManageOrders from './ManageOrders';
import ManageProducts from './ManageProducts';
import Orders from './Orders';
import Payment from './Payment';
import Review from './Review';

const Dashboard = () => {
    const { logout, admin, user } = useAuth();
    return (
        <div id="dashboard">
            <Navigation></Navigation>
            <div className="tab-container" style={{ margin: '34px 0' }}>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    {!admin && <div>
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Review</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">My Orders</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Pay</Nav.Link>
                                        </Nav.Item>
                                    </div>}
                                    {admin && <div>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fourth">Add A Product</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fifth">Make Admin</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sixth">Manage All Orders</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="seventh">Manage Products</Nav.Link>
                                        </Nav.Item>
                                    </div>}
                                    <Button onClick={logout} variant="light">Logout</Button>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                {!admin && <Tab.Content>
                                    <Tab.Pane eventKey="first" style={{ marginTop: '10px' }}>
                                        <Review></Review>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" style={{ marginTop: '10px' }}>
                                        <Orders></Orders>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" style={{ marginTop: '10px' }}>
                                        <Payment></Payment>
                                        <h2 className="my-5">Payment system coming soon</h2>
                                    </Tab.Pane>
                                </Tab.Content>}
                                {admin && <Tab.Content>
                                    <h2>Welcome Dear Admin: {user.displayName}</h2>
                                    <Tab.Pane eventKey="fourth" style={{ marginTop: '10px' }}>
                                        <AddProduct></AddProduct>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fifth" style={{ marginTop: '10px' }}>
                                        <MakeAdmin></MakeAdmin>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="sixth" style={{ marginTop: '10px' }}>
                                        <ManageOrders></ManageOrders>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="seventh" style={{ marginTop: '10px' }}>
                                        <ManageProducts></ManageProducts>
                                    </Tab.Pane>
                                </Tab.Content>}

                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div >
            <Footer></Footer>
            <FooterBottom></FooterBottom>
        </div >
    );
};

export default Dashboard;