import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';
import '../../Dashboard.css';

const MakeAdmin = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://aqueous-harbor-40880.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('not-upload').innerText = '';
                    document.getElementById('upload').innerText = 'Admin added Successful';
                    document.getElementById('email').value = '';
                }
                else {
                    document.getElementById('not-upload').innerText = 'Admin added Unsuccessful';
                    document.getElementById('upload').innerText = '';
                    document.getElementById('email').value = '';
                }
            })
    }
    return (
        <Container fluid>
            <Row>
                <Col lg={2} md={12}>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg={10} md={12}>
                    <div className="dashboard-form">
                        <h1>Make Admin</h1>
                        <div className="form-div">
                            <Form className='form-body' onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group>
                                    <Form.Control type='email' name="email" id='email' placeholder="Enter Email..." ref={register({ required: true })} />
                                    {errors.email && <span className='text-danger'>Admin email is required</span>}
                                </Form.Group>
                                <Form.Group>
                                    <button className='common-btn px-5 py-2' type="submit">Submit</button>
                                </Form.Group>
                            </Form>
                            <p className='text-center p-3 text-success' id='upload'></p>
                            <p className='text-center p-3 text-danger' id='not-upload'></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default MakeAdmin;