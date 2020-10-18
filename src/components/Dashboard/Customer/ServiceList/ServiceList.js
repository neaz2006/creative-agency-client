import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceList = ({ service }) => {
    return (
        <Col lg={4} md={6} className='mb-3'>
            <Card className='shadow'>
                <Card.Header className="" style={{ backgroundColor: 'transparent', border: '0' }} >
                    <div className="d-flex justify-content-between">
                        <img src={`data:image/png;base64,${service.image.img}`} alt="" width="60" />
                        {
                            service.status === 'Done' &&
                            <h5 className='rounded text-white bg-success px-4 my-auto py-2'>{service.status}</h5>
                        }
                        {
                            service.status === 'Pending' &&
                            <h5 className='rounded text-white bg-danger px-4 my-auto py-2'>{service.status}</h5>
                        }
                        {
                            service.status === 'Ongoing' &&
                            <h5 className='rounded text-white bg-warning px-4 my-auto py-2'>{service.status}</h5>
                        }
                    </div>
                    <h6 className='pt-3 pb-2'><b>{service.category}</b></h6>
                    <Card.Text className="m-0 text-gray">
                        {service.details}
                    </Card.Text>
                </Card.Header>
            </Card>
        </Col>
    );
};

export default ServiceList;