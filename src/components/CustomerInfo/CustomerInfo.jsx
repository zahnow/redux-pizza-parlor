import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useDispatch } from "react-redux";

function CustomerInfo () {
    const history = useHistory()
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [street_address, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('Carryout');

    function handleNextButton(e) {
        e.preventDefault();
        console.log('In handleNextButton');
        dispatch({
            type: 'SET_CUSTOMER',
            payload: {name, street_address, city, zip, type}
        });
        history.push('/checkout')
    }

    return (
        <form className="blur">
            <h2>Here's the customer info page.</h2>
            <hr />
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" /> <br/>
            <input value={street_address} onChange={(event) => setStreetAddress(event.target.value)} placeholder="Street Address" /> <br/>
            <input value={city} onChange={(event) => setCity(event.target.value)}placeholder="City" /> <br/>
            <input value={zip} onChange={(event) => setZip(event.target.value)}placeholder="Zip" /> <br/>
            <input id="carryout" type="radio" name="method" value="carryout" checked={type === 'Carryout'} onChange={() => setType('Carryout')} /> 
            <label htmlFor="carryout">Carryout</label>
            <input id="delivery" type="radio" name="method" value="delivery" checked={type === 'Delivery'} onChange={() => setType('Delivery')} /> 
            <label htmlFor="delivery">Delivery</label>
            <hr />
            <button className="next-button" onClick={handleNextButton}>NEXT</button>
        </form>
    );
}

export default CustomerInfo;