import React from 'react';

function ReceiptEntry( {name, quantity, price} )
{
    const totalPrice = Number(quantity) * price;
    return (
        <li className='OrderListEntry'>{name} x{quantity} ------ ${totalPrice}</li>
    )
}

export default ReceiptEntry