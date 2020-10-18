import React, { useContext } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
import '../../Dashboard.css';

const OrderForm = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;
    const { register, errors, handleSubmit, reset } = useForm();

    const onSubmit = (data, e) => {
        const customerData = { ...data, serviceId: service._id, image: service.image, status: 'Pending' };
        fetch('https://aqueous-harbor-40880.herokuapp.com/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('not-upload').innerText = '';
                    document.getElementById('upload').innerText = 'User data updated Successful';
                }
                else {
                    document.getElementById('not-upload').innerText = 'User data updated unsuccessful';
                    document.getElementById('upload').innerText = '';
                }
            })
        e.target.reset();
    }

    return (
        <div className='dashboard-form'>
            <h1>Order</h1>
            <div className="form-div">
                <Form onSubmit={handleSubmit(onSubmit)} className='form-body'>
                    <Form.Group>
                        <Form.Control type='text' name="name" value={name} placeholder="Your name / company’s name" ref={register({ required: true })} />
                        {errors.name && <span className='text-danger'>First name is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='email' name="email" value={email} placeholder="Your email address" ref={register({ required: true })} />
                        {errors.email && <span className='text-danger'>Email is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text' name="category" value={service.title} placeholder="Category you are selected" ref={register({ required: true })} />
                        {errors.category && <span className='text-danger'>Category is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="textarea" rows="3" name="details" value={service.description} placeholder="Project Details" ref={register({ required: true })} />
                        {errors.details && <span className='text-danger'>Project details is required</span>}
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control type="number" ref={register({ required: true })} name="price" placeholder="Price" />
                            {errors.age && <span className="text-danger">Price is required</span>}
                        </Form.Group>

                        <Form.Group as={Col}>
                            <input type="file" style={{ width: '200px' }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <button className='common-btn px-5 py-2' type="submit">SEND</button>
                    </Form.Group>
                </Form>
                <p className='text-center p-3 text-success' id='upload'></p>
                <p className='text-center p-3 text-danger' id='not-upload'></p>
            </div>
        </div>
    );
};

export default OrderForm;