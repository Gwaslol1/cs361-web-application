import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OrderEntry from '../components/OrderEntry';

function PaymentPage()
{
    const location = useLocation();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({cissuer: '', fname: '', lname: '', cnumber: '', snumber: '', expdate: '', pnumber: ''});

    function calculateTotalPrice()
    {
        let totalPrice = 0;

        location.state.forEach((item) => {
            totalPrice += item["quantity"] * item["price"];
        })

        return totalPrice;
    }

    function handleSelectChange(e)
    {
        setFormValues({
            ...formValues,
            cissuer: e.target.value
        });
    }

    function handleFirstNameChange(e) 
    {
        setFormValues({
            ...formValues,
            fname: e.target.value
        });
    }

    function handleLastNameChange(e)
    {
        setFormValues({
            ...formValues,
            lname: e.target.value
        });
    }

    function handleCnumberChange(e)
    {
        if (/[a-zA-Z]/.test(e.target.value))
        {
            e.target.value = ''
        }
        
        setFormValues({
                ...formValues,
                cnumber: e.target.value
        });
    }

    function handleSnumberChange(e)
    {
        if (/[a-zA-Z]/.test(e.target.value))
        {
            e.target.value = ''
        }

        setFormValues({
            ...formValues,
            snumber: e.target.value
        });
    }

    function handleExpdateChange(e)
    {
        if (/[a-zA-Z]/.test(e.target.value))
        {
            e.target.value = ''
        }

        setFormValues({
            ...formValues,
            expdate: e.target.value
        });
    }

    function handlePNumberChange(e)
    {
        if (/[a-zA-Z]/.test(e.target.value))
        {
            e.target.value = ''
        }

        setFormValues({
            ...formValues,
            pnumber: e.target.value
        });
    }

    async function handleSubmit(e)
    {
        e.preventDefault();
        const formValuesToSend = {cissuer: formValues['cissuer'], cnumber: formValues['cnumber'], expdate: formValues['expdate']}

        fetch('http://localhost:5000/payment', {
            method: 'POST',
            body: JSON.stringify(formValuesToSend),
            headers: {
                'Content-Type': 'application/json', 
            },
        })
            .then((response) => response.text())
            .then((text) => {
                if(text === "Valid.") {
                    navigate('/receipt', {state: {purchased: location.state, total: calculateTotalPrice(), form: formValues}});
                }

                else {
                    alert("Card Declined.");
                    console.error(`Reason for card decline: ${text}`);
                }
            });
    }
    
    return (
        <div>
            <h1 id='payment-header'>Fill in your payment information below</h1>
            <div id='paymentform-container'>
                <form onSubmit={handleSubmit}>
                    <select id='form-cardselect' onChange={handleSelectChange} name='cards' defaultValue="Visa" required>
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="AmericanExpress">American Express</option>
                        <option value="Discover">Discover</option>
                    </select>
                    <br></br>
                    <label id='form-cnumberlabel'>Card number</label><br></br>
                    <input type="text" id="form-cnumber" placeholder="**** **** **** ****" onChange={handleCnumberChange} required></input><br></br>
                    <label id='form-snumberexpdatelabel'>Expiration date & security code</label><br></br>
                    <input type="text" id="form-snumber" placeholder="CVC" onChange={handleSnumberChange} required></input><br></br>
                    <input type="text" id="form-expdate" placeholder="MM / YY" onChange={handleExpdateChange} required></input><br></br>
                    <label id='form-fnamelabel'>First name</label><br></br>
                    <input type="text" id="form-fname" placeholder={formValues.fname} onChange={handleFirstNameChange} required></input><br></br>
                    <label id='form-lnamelabel'>Last name</label><br></br>
                    <input type="text" id="form-lname" placeholder={formValues.lname} onChange={handleLastNameChange} required></input><br></br>
                    <label id='form-pnumberlabel'>Phone number</label><br></br>
                    <input type="text" id='form-pnumber' placeholder="*** **** ****" onChange={handlePNumberChange} required></input>
                    <button id='form-submitbutton' type='submit'>Pay Now</button>
                </form>
            </div>
            <h2>Your order at a glance</h2>
            <ul id='payment-itemlist'>
                {location.state.map((item, i) => (
                    <OrderEntry key={i} name={item["name"]} quantity={item["quantity"]} price={item["price"]}/>
                ))}
            </ul>
            <h3>Sub-Total: ${calculateTotalPrice()}</h3>
        </div>
    );
}

export default PaymentPage;