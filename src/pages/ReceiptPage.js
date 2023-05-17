import React from 'react';
import { useLocation } from 'react-router-dom';
import ReceiptEntry from '../components/ReceiptEntry';

function ReceiptPage () 
{
    const location = useLocation();

    const currentDate = new Date();

    return (
        <div>
            <h1 id='receipt-header'>Thank you for shopping with us!</h1>
            <h3 id='receipt-date'>{currentDate.toLocaleDateString()}</h3>
            <h3 id='receipt-time'>{currentDate.toLocaleTimeString()}</h3>
            <p id ='receipt-line'>***********************************************</p>
            <table id='receipt-itemtable'>
                <thead>
                    <tr>
                        <th id='receipttable-quantityhead'>Qty</th>
                        <th id='receipttable-itemhead'>Item</th>
                        <th id='receipttable-pricehead'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {location.state["purchased"].map((item, i) => (
                        <ReceiptEntry key={i} name={item["name"]} quantity={item["quantity"]} price={item["price"]}/>
                    ))}
                </tbody>
            </table>
            <div id='receipt-misccontainer'>
                <p>Sub-Total: ${location.state["total"]}</p>
                <p>Sales Tax: $0</p>
                <p>Total: ${location.state["total"]}</p>
                <p>Card: XXXX XXXX XXXX {location.state["form"]["cnumber"].slice(-4)}</p>
            </div>
        </div>
    );
}

export default ReceiptPage;