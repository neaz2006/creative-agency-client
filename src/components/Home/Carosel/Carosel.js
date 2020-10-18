import React from 'react';
import './Carosel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../../../images/carousel-1.png';
import item2 from '../../../images/carousel-2.png';
import item3 from '../../../images/carousel-4.png';
import item4 from '../../../images/carousel-5.png';
import { Container } from 'react-bootstrap';

const Carosel= () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="work-section">
            <h1 className='text-center py-5 text-white'><b>Here are some of <span className='text-highlight'>our works</span></b></h1>
            <Container>
                <Carousel responsive={responsive}>
                    <img src={item1} height='250' className='img-fluid m-3 p-2' alt="" />
                    <img src={item2} height='250' className='img-fluid m-3 p-2' alt="" />
                    <img src={item3} height='250' className='img-fluid m-3 p-2' alt="" />
                    <img src={item4} height='250' className='img-fluid m-3 p-2' alt="" />
                </Carousel>
            </Container>
        </section>
    );
};

export default Carosel;