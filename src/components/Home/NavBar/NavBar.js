import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from '../../../App';

const NavBar = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar collapseOnSelect expand="xl" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} width='150' alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link className='mx-2 text-dark' to="/">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='mx-2 text-dark' to="#">Our Portfolio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='mx-2 text-dark' to="#">Our Team</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='mx-2 text-dark' to="#">Contact Us</Link>
                        </Nav.Link>
                            <Nav.Link>
                                <Link className='mx-2 text-dark' to="/admin/addService">Admin Panel</Link>
                            </Nav.Link>
                    </Nav>
                    {(loggedInUser.email) ?
                        <button onClick={() => setLoggedInUser({})} className='common-btn py-2 px-4 ml-2 mt-2'>Log Out</button>
                        :
                        <button onClick={() => history.push('/login')} className='common-btn py-2 px-4 ml-2 mt-2'>Log In</button>
                    }
                    {loggedInUser.photo && <img className='rounded-circle ml-4 mt-2' src={loggedInUser.photo} width='40' alt="" />}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;