import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import './Checkout.css';
import { useParams } from 'react-router';

import { Link } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-caverns-72572.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setDetails(data[id]))
    }, [])

    const handleCheck = () => {
        const newCheck = { ...details}
        fetch('https://peaceful-caverns-72572.herokuapp.com/addCheck', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCheck)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h1 className="checkout">Checkout</h1>
            <Form>
                <header >
                    <div className="head" >
                        <div><h4>Description</h4>
                            <h5>{details.name}</h5>
                        </div>
                        <div><h4>Quantity</h4>
                            <h5>1</h5>
                        </div>
                        <div><h4>Price</h4>
                            <h5>{details.value}</h5>
                            <h5><strong>Total:</strong>{details.value}</h5>
                        </div>
                    </div>
                    <Link to={`/Orders/${id}`}><button onClick={handleCheck} className="checkOut">Checkout</button></Link>
                </header>
            </Form>
        </div>
    );
};

export default Checkout;