import React from 'react';
import ItemSection from '../components/ItemSection';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function OrderPage( {menuItems, setMenuItems, purchasedItems, setPurchasedItems} )
{
    const navigate = useNavigate();

    function calculateTotalPrice()
    {
        let totalPrice = 0;

        purchasedItems.forEach((item) => {
            totalPrice += item["quantity"] * item["price"];
        })

        return totalPrice;
    }

    const toPaymentPage = async () => {
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
            <div className='Order-ShoppingCart-Container'>
                <FaShoppingCart id='Order-ShoppingCart'></FaShoppingCart>
                <table>
                    <thead>
                        <tr>
                            <th>Your Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {purchasedItems.map((item, i) => (
                            <tr className='CartItems'>
                                <td key={i}>{item["name"]} x{item["quantity"]}: ${item["price"] * item["quantity"]}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Subtotal: ${calculateTotalPrice()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}

export default OrderPage;