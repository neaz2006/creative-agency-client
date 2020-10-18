import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form } from 'react-bootstrap';
import '../../Dashboard.css';

const AddServiceForm = () => {
    const [service, setService] = useState({});
    const [file, setFile] = useState(null);
    const { register, errors, handleSubmit, reset } = useForm();

    const handleBlur = e => {
        const newServices = { ...service };
        newServices[e.target.name] = e.target.value;
        setService(newServices);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data, e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', service.title);
        formData.append('description', service.description);

        fetch('https://aqueous-harbor-40880.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Service Added Successfully')
                }
            })
            .catch(error => {
                console.error(error)
            })
        e.target.reset();
    }

    return (
        <div className='dashboard-form'>
            <h1>Add Service</h1>
            <div className="form-div">
                <Form onSubmit={handleSubmit(onSubmit)} className='form-body'>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Service Title</Form.Label>
                            <Form.Control onBlur={handleBlur} type='text' name="title" placeholder="Enter Title" ref={register({ required: true })} />
                            {errors.title && <span className='text-danger'>Title is required</span>}
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Icon</Form.Label> <br />
                            <Form.Control onChange={handleFileChange} type="file" style={{ width: '200px' }} required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} className='mr-5'>
                            <Form.Label>Description</Form.Label> <br />
                            <Form.Control onBlur={handleBlur} as="textarea" rows="5" name="description" placeholder="Description" ref={register({ required: true })} />
                            {errors.description && <span className='text-danger'>Description is required</span>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <button className='common-btn px-5 py-2' type="submit">Submit</button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
};

export default AddServiceForm;