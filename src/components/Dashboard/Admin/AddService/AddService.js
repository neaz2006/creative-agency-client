import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';
import AddServiceForm from '../AddServiceForm/AddServiceForm';

const AddService = () => {
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <AddServiceForm></AddServiceForm>
                </Col>
            </Row>
        </Container>
    );
};

export default AddService;