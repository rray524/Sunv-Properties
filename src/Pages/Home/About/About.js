import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../images/about-us.jpg';
import './About.css'

const About = () => {
    return (
        <div id='about-us'>
            <Container>

                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <img src={aboutImg} alt="" className="about-img" />
                    </Col>
                    <Col xs={12} sm={12} md={6} style={{ marginTop: '12px' }}>
                        <h2>Buying or selling property in Bulgaria?<br />
                            We will help you!</h2>
                        <p>We have been working for you for over 18 years now.
                            We look after your interests in Bulgaria and we do everything to make you happy.</p>
                        <p>Because we – SUNV PROPERTIES - are the leading real estate company in Bulgaria with offices around the country, we specialize in serving foreign buyers and sellers, we know the Bulgarian property market in details and our professional consultants offer excellent properties for sale and rent in the Bulgarian beach and ski resorts, in the rural countryside, as well as in all major cities - Sofia, Plovdiv, Varna, Burgas, Stara Zagora, Veliko Tarnovo and many others.</p>
                        <p>We have been awarded <strong>for best advertising and most dynamic development in 2020, as well as for website, agency and broker of the year 2019!</strong></p>
                        <p>Trust us! We do our job professionally!</p>
                    </Col>
                </Row>



            </Container>
        </div>
    );
};

export default About;