import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceTable from '../ServiceTable/ServiceTable';

const AllData = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <ServiceTable></ServiceTable>
                </Col>
            </Row>
        </Container>
    );
};

export default AllData;