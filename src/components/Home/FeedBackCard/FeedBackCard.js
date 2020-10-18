import React from 'react';
import { Card, Col } from 'react-bootstrap';

const FeedBackCard = ({client}) => {
    return (
        <Col lg={4} md={6} sm={12} className='mb-3'>
            <Card className='shadow'>
                <Card.Header className="d-flex align-items-center" style={{backgroundColor: 'transparent', border: '0'}} >
                    <img className="mx-3 rounded-circle" src={client.photo} alt="" width="60" />
                    <div>
                        <h6 className='text-title'><b>{client.name}</b></h6>
                        <p className="m-0 text-gray">{client.designation}</p>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Text className="m-0 text-gray" >
                        {client.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default FeedBackCard;