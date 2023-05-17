import React from 'react';

function ReceiptEntry( {name, quantity, price} )
{
    const totalPrice = Number(quantity) * price;
    return (
        <tr>
            <td>{quantity}</td>
            <td>{name}</td>
            <td>${totalPrice}</td>
        </tr>
    )
}

export default ReceiptEntry