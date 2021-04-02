import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-caverns-72572.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            <div className="Summery">
                <h1>Ordered Summery</h1>
            </div>
            <br />
            <div className="form">
                <h4>Email: {loggedInUser.email}</h4>
                {
                    bookings.map(product => <li>
                        {product.name} Price:{product.value}
                    </li>)
                }
            </div>
        </div>

    );
};

export default Orders;