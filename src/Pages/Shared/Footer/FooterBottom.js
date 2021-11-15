import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const FooterBottom = () => {
    return (
        <div id="footer-bottom">
            <Container>
                <Row>
                    <h4>Popular searches:</h4>
                    <Col xs={6} md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Top Properties</ListGroup.Item>
                            <ListGroup.Item>Beach Properties</ListGroup.Item>
                            <ListGroup.Item>Apartments in Sofia</ListGroup.Item>
                            <ListGroup.Item>Apartments in Sunny Beach</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Best Bargain Properties</ListGroup.Item>
                            <ListGroup.Item>Ski Properties</ListGroup.Item>
                            <ListGroup.Item>Apartments in Varna</ListGroup.Item>
                            <ListGroup.Item>Apartments in Bansko</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={6} md={4}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Discounted Properties</ListGroup.Item>
                            <ListGroup.Item>City Properties</ListGroup.Item>
                            <ListGroup.Item>Apartments in Burgas</ListGroup.Item>
                            <ListGroup.Item>First line plots</ListGroup.Item>
                        </ListGroup>
                    </Col>

                </Row>
                <Row>
                    <div className="footer-text">
                        <p>All photos, texts, video clips, charts and banners on our website are property of our company or of our partners and are protected by the Copyright Act of the Republic of Bulgaria. Any unauthorized use of photos, texts, videos and other materials from our website by third parties will be subject to immediate claim on the part of the copyright owners. The information on our website is with information and advertising purposes. Alhtough we have made all efforts to provide accurate information, there may be some mistakes. For full and correct information is considered only the information received at the offices of Sunv Properties Ltd.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default FooterBottom;