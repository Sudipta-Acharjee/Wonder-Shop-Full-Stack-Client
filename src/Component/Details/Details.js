import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import Product from '../Fakedata';

const Details = () => {
    // const first10 = Product.slice(0, 10);
    const [details, setDetails] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/events')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    const handleAddProduct = (productInfo) => {
        const newCart = [...cart, productInfo];
        setCart(newCart);
    }
    return (
        <div>
            {
                details.map(pd => <Cart handleAddProduct={handleAddProduct} productInfo={pd}>
                </Cart>)
            }
        </div>
        
    );
};

export default Details;