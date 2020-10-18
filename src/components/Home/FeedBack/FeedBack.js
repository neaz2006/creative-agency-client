import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import spinner from '../../../images/spinner.gif';

const FeedBack = () => {
    const [feedBacks, setFeedBacks] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-harbor-40880.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setFeedBacks(data))
    })
    return (
        <Container className='my-5 py-5'>
            <h1 className="text-center"><b>Clients <span className="text-highlight">Feedback</span></b></h1>
            { !feedBacks.length && <img className='d-block mx-auto' src={spinner} alt=""/> }
            <Row className='py-5'>
                {feedBacks.map(client => <FeedBackCard client={client} key={client._id}></FeedBackCard>)}
            </Row>
        </Container>
    );
};

export default FeedBack;