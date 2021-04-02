import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const { name, Image, value, id } = props.productInfo;
    return (
        <div className="row">
            <div className="column">
                <div class="card productCart ">
                    <img className="card-img-top " src={Image} alt="wait"></img>
                    <div className="productCart">
                        <h3>{name}</h3>
                        <div className="price"><h2>${value}</h2>
                            <button className="btn btn-warning"><Link to={`/home/Checkout/${id}`}>Buy Now</Link></button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;