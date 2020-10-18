import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Service = ({ data }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const path = loggedInUser.isAdmin ? '/admin/allData' : `/customer/order/${data._id}`;
    return (
        <Col lg={4} md={6} className="pb-5">
            <Link to={path} className="link_style">
                <animated.div
                    className="card"
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}
                >
                    <Card style={{ width: '20rem' }} className='m-2 p-3 service-card'>
                        <Card.Body className='d-flex flex-column'>
                            <img className="m-auto mr-3" src={`data:image/png;base64,${data.image.img}`} alt="" width="60" />
                            <h5 className='text-center py-3 text-dark'>{data.title}</h5>
                            <Card.Text className='text-center text-secondary'>{data.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </animated.div>
            </Link>
        </Col>
    );
};
export default Service;