import React, { useState } from 'react';
import Products from '../Fakedata';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            price:data.price
        }
        const url = `http://localhost:5000/addEvent`
        console.log(eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response',res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '813aebec783c2ba818363994fee1438b')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <input name="name" defaultValue="Product Name" ref={register} />
                <br />
                <br />
                <input name="price" defaultValue="Price" ref={register} />
                <br />
                <br />
                <input type="file" name="exampleRequired" onChange={handleImageUpload} />
                <br />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;