import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';
import ServiceList from '../ServiceList/ServiceList';
import '../../Dashboard.css';

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-harbor-40880.herokuapp.com/customer?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <div className="dashboard-form">
                        <h1>Service List</h1>
                        <div className="form-div">
                            {!services.length &&
                                <div className='d-flex justify-content-center pt-5'>
                                    <Spinner className='mt-5 p-5' role="status" animation="border" variant="secondary" />
                                </div>
                            }
                            <Row className='p-5'>
                                {
                                    services.map(service => <ServiceList service={service} key={service._id}></ServiceList>)
                                }
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Service;