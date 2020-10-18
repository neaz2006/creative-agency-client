import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from '../../../images/logos/logo.png';
import { faCartPlus, faGripHorizontal, faSignOutAlt, faPlus, faGlobe, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { UserContext } from '../../../App';
import { Button } from 'react-bootstrap';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between pt-3 px-4">
            <ul className="list-unstyled">
                <li className='brand-img'>
                    <Link to="/" className="text-dark  mr-5">
                        <img className='pb-3' src={logo} width='150' alt="" />
                    </Link>
                </li>
                {loggedInUser.isAdmin ?
                    <>
                        <li>
                            <Link to="/admin/allData" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faGlobe} /> <span>Service list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/addService" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/makeAdmin" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faUserTie} /> <span>Make Admin</span>
                            </Link>
                        </li>
                    </>
                    :
                    <>
                        <li>
                            <Link to="/customer/order/:#" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/customer/service" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faGripHorizontal} /> <span>Service List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/customer/review" className="text-dark pl-3">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>
            <div className='log-out'>
                <Button onClick={() => setLoggedInUser({})} variant="outline-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Button>
            </div>
        </div>
    );
};

export default Sidebar;