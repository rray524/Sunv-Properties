import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div id="footer">
            <Container>
                <Row>
                    <Col sm={6} md={3}><img src={logo} alt="" /></Col>
                    <Col sm={6} md={9}>

                        <p>© Copyright 2003-2021 Sunv Properties Ltd. All Rights Reserved.</p>

                        <p>SUNV PROPERTIES™, OUR COMPANY™ and the logos are trade marks of SUNV Properties Ltd., registered in Bulgaria under VAT#BG131164582 with address: 22, Zlaten Rog Str., Sofia 1407, Bulgaria.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;