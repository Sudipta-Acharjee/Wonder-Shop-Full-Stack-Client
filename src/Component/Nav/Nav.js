import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div>
            <nav className="nav-name">
                <div><h3>Wonders Shop</h3></div>
                <div className="name">
                    <a href="/">Home</a>
                    <a href="/Orders">Orders</a>
                    <a href="/Admin">Admin</a>
                    <Link to="/logIn"><button>Login</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;