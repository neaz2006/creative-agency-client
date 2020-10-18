import React from 'react';
import ClientImgSection from '../ClientImgSection/ClientImgSection';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Carosel from '../Carosel/Carosel';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <ClientImgSection></ClientImgSection>
            <Services></Services>
            <Carosel></Carosel>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </>
    );
};

export default Home;