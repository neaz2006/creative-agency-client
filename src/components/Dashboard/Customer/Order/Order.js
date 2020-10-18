import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import OrderForm from '../OrderForm/OrderForm';

const Order = () => {
    const { serviceId } = useParams();
    const [selectedService, setSelectedService] = useState({});
    useEffect(() => {
        fetch(`https://aqueous-harbor-40880.herokuapp.com/${serviceId}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [])
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <OrderForm service={selectedService}></OrderForm>
                </Col>
            </Row>
        </Container>
    );
};

export default Order;