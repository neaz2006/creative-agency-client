import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import spinner from '../../../images/spinner.gif';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);
    console.log(serviceData)
    useEffect(() => {
        fetch('https://aqueous-harbor-40880.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))

    }, [])

    return (
        <section>
            <Container className='pt-5 pb-3'>
                <h1 className='text-center'><b>Provide awesome <span className="text-highlight">services</span></b></h1>
                {!serviceData.length && <img className='d-block mx-auto' src={spinner} alt="" />}
                <Row className='my-5'>
                    {
                        serviceData.map(data => <Service data={data} key={data._id}></Service>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;