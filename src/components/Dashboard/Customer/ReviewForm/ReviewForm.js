import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../../../App';
import '../../Dashboard.css';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, errors, handleSubmit, reset } = useForm();
    const onSubmit = (data, e) => {
        const review = { ...data, photo: loggedInUser.photo }
        fetch('https://aqueous-harbor-40880.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    document.getElementById('not-upload').innerText = '';
                    document.getElementById('upload').innerText = 'Review Posted Successful';
                }
                else {
                    document.getElementById('not-upload').innerText = 'Review Posted Unsuccessful';
                    document.getElementById('upload').innerText = '';
                }
            })
        e.target.reset();
    }
    return (
        <div className='dashboard-form'>
            <h1>Review</h1>
            <div className="form-div">
                <Form className='form-body' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Control type='text' name="name" value={loggedInUser.name} placeholder="Your name" ref={register({ required: true })} />
                        {errors.name && <span className='text-danger'>Name is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type='text' name="designation" placeholder="Company’s name, Designation" ref={register({ required: true })} />
                        {errors.designation && <span className='text-danger'>Designation is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <Form.Control as="textarea" rows="3" name="description" placeholder="Description" ref={register({ required: true })} />
                        {errors.description && <span className='text-danger'>Description is required</span>}
                    </Form.Group>

                    <Form.Group>
                        <button className='common-btn px-5 py-2' type="submit">Submit</button>
                    </Form.Group>
                </Form>
                <p className='text-center p-3 text-success' id='upload'></p>
                <p className='text-center p-3 text-danger' id='not-upload'></p>
            </div>
        </div>
    );
};

export default ReviewForm;