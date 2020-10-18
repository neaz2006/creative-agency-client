import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import { Col, Container, Row } from 'react-bootstrap';

const ClientImgSection = () => {
    return (
        <Container className='my-5'>
            <Row className='mx-auto'>
                <Col lg={2} md={3} sm={4} xs={6} className='mx-3 d-flex align-items-center justify-content-center'>
                    <img src={slack} className='img-fluid p-3' alt=""/>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className='mx-3 d-flex align-items-center justify-content-center'>
                    <img src={google} className='img-fluid p-3' alt=""/>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className='mx-3 d-flex align-items-center justify-content-center'>
                    <img src={uber} className='img-fluid p-4' alt=""/>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className='mx-3 d-flex align-items-center justify-content-center'>
                    <img src={netflix} className='img-fluid p-3' alt=""/>
                </Col>
                <Col lg={2} md={3} sm={4} xs={6} className='mx-3 d-flex align-items-center justify-content-center'>
                    <img src={airbnb} className='img-fluid p-3' alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientImgSection;