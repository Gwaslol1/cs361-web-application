import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ReceiptEntry from '../components/ReceiptEntry';

function PaymentPage()
{
    const location = useLocation();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({card: '', fname: '', lname: '', cnumber: '**** **** **** ****', snumber: 'CVC', expdate: 'MM / YY', pnumber: '*** *** ****'});

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
            card: e.target.value
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
        setFormValues({
            ...formValues,
            cnumber: e.target.value
        });
    }

    function handleSnumberChange(e)
    {
        setFormValues({
            ...formValues,
            snumber: e.target.value
        });
    }

    function handleExpdateChange(e)
    {
        setFormValues({
            ...formValues,
            expdate: e.target.value
        });
    }

    function handlePNumberChange(e)
    {
        setFormValues({
            ...formValues,
            pnumber: e.target.value
        });
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        navigate('/receipt');
    }
    
    return (
        <div>
            <h1 id='payment-header'>Fill in your payment information below</h1>
            <div id='paymentform-container'>
                <form onSubmit={handleSubmit}>
                    <select id='form-cardselect' onChange={handleSelectChange} name='cards' required>
                        <option value="visa">Visa</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="express">American Express</option>
                        <option value="discover">Discover</option>
                    </select>
                    <br></br>
                    <label id='form-cnumberlabel'>Card number</label><br></br>
                    <input type="text" id="form-cnumber" placeholder={formValues.cnumber} onChange={handleCnumberChange} required></input><br></br>
                    <label id='form-snumberexpdatelabel'>Expiration date & security code</label><br></br>
                    <input type="text" id="form-snumber" placeholder={formValues.snumber} onChange={handleSnumberChange} required></input><br></br>
                    <input type="text" id="form-expdate" placeholder={formValues.expdate} onChange={handleExpdateChange} required></input><br></br>
                    <label id='form-fnamelabel'>First name</label><br></br>
                    <input type="text" id="form-fname" placeholder={formValues.fname} onChange={handleFirstNameChange} required></input><br></br>
                    <label id='form-lnamelabel'>Last name</label><br></br>
                    <input type="text" id="form-lname" placeholder={formValues.lname} onChange={handleLastNameChange} required></input><br></br>
                    <label id='form-pnumberlabel'>Phone number</label><br></br>
                    <input type="text" id='form-pnumber' placeholder={formValues.pnumber} onChange={handlePNumberChange} required></input>
                    <button id='form-submitbutton' type='submit'>Pay Now</button>
                </form>
            </div>
            <h2>Your order at a glance</h2>
            <ul id='payment-orderlist'>
                {location.state.map((item, i) => (
                    <ReceiptEntry key={i} name={item["name"]} quantity={item["quantity"]} price={item["price"]}/>
                ))}
            </ul>
            <h3>Sub-Total: ${calculateTotalPrice()}</h3>
        </div>
    );
}

export default PaymentPage;