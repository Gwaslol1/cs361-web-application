import React from 'react';

function OrderEntry( {name, quantity, price} )
{
    const totalPrice = Number(quantity) * price;
    return (
        <li className='OrderListEntry'>{name} x{quantity} ------ ${totalPrice}</li>
    )
}

export default OrderEntry