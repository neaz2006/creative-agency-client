import React from 'react';
import HeaderBody from '../HeaderBody/HeaderBody';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container' style={{height: '600px'}}>
            <NavBar></NavBar>
            <HeaderBody></HeaderBody>
        </div>
    );
};

export default Header;