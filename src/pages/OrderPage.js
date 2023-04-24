import React from 'react';
import ItemSection from '../components/ItemSection';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function OrderPage( {menuItems, setMenuItems, purchasedItems, setPurchasedItems} )
{
    const navigate = useNavigate();

    const toPaymentPage = () => {
        if(purchasedItems.length === 0)
        {
            alert("You have no items in your cart!")
        }
        
        else
        {
            navigate('/payment', {state: purchasedItems});
        }
    }

    return (
        <div>
            <h1 id='order-header'>Place your order</h1>
            <div className='itemsection-container'>
                {menuItems.map((itemsection, i) => (
                    <ItemSection key={i} menuItems={menuItems} setMenuItems={setMenuItems} sectionIndex={i} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems}/>
                ))}
            </div>
            <div className='Payment'>
                <a className='Payment-link' onClick={() => {toPaymentPage()}}>Proceed to Checkout
                    <label>Order will be saved</label>
                </a>
            </div>
            <FaShoppingCart className='Order-ShoppingCart'></FaShoppingCart>
        </div>
    );
}

export default OrderPage;