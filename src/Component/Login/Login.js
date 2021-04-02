import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const HandleGoogleSign = () => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.initializeApp(firebaseConfig);
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    return (
        <div>
            <button onClick={HandleGoogleSign} type="button" className="btn btn-warning btn-lg btn-block buttonControl">Google Sign In</button>
        </div>
    );
};

export default Login;