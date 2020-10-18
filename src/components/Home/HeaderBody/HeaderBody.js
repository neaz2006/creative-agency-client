import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png';

const HeaderBody = () => {
    return (
        <Container>
            <Row  className='d-flex align-items-center pt-5'>
                <Col md={5} sm={12}>
                    <h1><b>Let’s Grow Your <br/>Brand To The <br/>Next Level</b></h1>
                    <p className='py-3 blockquote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="common-btn px-5 py-2">Hire Us</button>
                </Col>
                <Col md={{ span: 6, offset: 1 }} className='d-none d-md-block'>
                    <img className='img-fluid' src={frame} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default HeaderBody;