import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css'

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedInUser.email)
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
                <h4>Name: {loggedInUser.name}</h4>
                {
                    bookings.map(book => <li>
                        {book.name} Price:{book.value}
                    </li>)
                }
            </div>
        </div>

    );
};

export default Orders;