import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../images/logos/googleLogo.png';
import './Login.css';
import logo from '../../images/logos/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        photo: '',
        isAdmin: false
    })

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                fetch('https://aqueous-harbor-40880.herokuapp.com/isAdmin?email=' + email)
                    .then(res => res.json())
                    .then(data => {
                        if(data[0]){
                            const signedInUser = {
                                name: displayName,
                                email: email,
                                photo: photoURL,
                                isAdmin: true
                            }
                            setUser(signedInUser);
                            setLoggedInUser(signedInUser);
                            history.replace(from);
                        }
                        else {
                            const signedInUser = {
                                name: displayName,
                                email: email,
                                photo: photoURL,
                                isAdmin: false
                            }
                            setUser(signedInUser);
                            setLoggedInUser(signedInUser);
                            history.replace(from);
                        }
                    })
            })
            .catch(error => {
                alert("Please Log in again");
            });
    }

    return (
        <div className="login-container">
            <Link className="pt-4" to="/">
                <img src={logo} width='200' alt="" />
            </Link>
            <div className="form-box my-auto">
                <div className="text-center m-5 p-5">
                    <h2 className="pt-5">Login With</h2>
                    <Button onClick={googleSignIn} className="login-btn mt-4 mb-3" variant="light" size="md" block>
                        <img src={googleIcon} alt="" />
                        <span className="mx-auto">Continue with Google</span>
                    </Button>
                    <p className="pb-5">Don’t have an account? <span className="create-account">Create an account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;