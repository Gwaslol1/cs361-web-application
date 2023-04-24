import React from 'react';
import { GoArrowUp, GoArrowDown, GoUnverified } from 'react-icons/go';

function Item( {menuItems, setMenuItems, itemIndex, sectionIndex, purchasedItems, setPurchasedItems} )
{

    function handleOnPlusClick(itemindex, sectionindex)
    {
        const updatedMenuItems = menuItems.map((itemsection, i) => {
            if(i === sectionindex)
            {
                return menuItems[i].map((item, x) => {
                    if(x === itemindex)
                    {
                        return {name: item["name"], quantity: item["quantity"] + 1, price: item["price"], image: item["image"]};
                    }

                    else
                    {
                        return item;
                    }
                });
            }
            
            else 
            {
                return itemsection;
            }
        });
        
        const updatedPurchasedItems = purchasedItems;
        let found = false;

        for(let i = 0; i < purchasedItems.length; i++)
        {
            if(updatedPurchasedItems[i]["name"] === menuItems[sectionindex][itemindex]["name"]) {
                updatedPurchasedItems[i]["quantity"] += 1;
                found = true
                break;
            }
        }

        if(!found) 
        {
            updatedPurchasedItems.push({name: menuItems[sectionindex][itemindex]["name"], quantity: menuItems[sectionindex][itemindex]["quantity"] + 1, 
            price: menuItems[sectionIndex][itemIndex]["price"], image: menuItems[sectionIndex][itemIndex]["image"]});
        }

        setMenuItems(updatedMenuItems);
        setPurchasedItems(updatedPurchasedItems)
    }

    function handleOnMinusClick(itemindex, sectionindex)
    {
        const updatedMenuItems = menuItems.map((itemsection, i) => {
            if(i === sectionindex)
            {
                return menuItems[i].map((item, x) => {
                    if(x === itemindex)
                    {
                        return item["quantity"] === 0 ? item : {name: item["name"], quantity: item["quantity"] - 1, price: item["price"], image: item["image"]}
                    }

                    else
                    {
                        return item;
                    }
                });
            }
            
            else 
            {
                return itemsection;
            }
        });
        
        const updatedPurchasedItems = purchasedItems;
        let found = false;

        for(let i = 0; i < purchasedItems.length; i++)
        {
            if(updatedPurchasedItems[i]["name"] === menuItems[sectionindex][itemindex]["name"]) {
                updatedPurchasedItems[i]["quantity"] -= 1;

                if(updatedPurchasedItems[i]["quantity"] <= 0)
                {
                    updatedPurchasedItems.splice(i, 1);
                }

                console.log(updatedPurchasedItems[i]);

                found = true
                break;
            }
        }

        if(!found && menuItems[sectionIndex][itemIndex]["quantity"] > 0) 
        {
            updatedPurchasedItems.push({name: menuItems[sectionindex][itemindex]["name"], 
            quantity: menuItems[sectionindex][itemindex]["quantity"] - 1, 
            price: menuItems[sectionIndex][itemIndex]["price"], image: menuItems[sectionIndex][itemIndex]["image"]});
        }

        setMenuItems(updatedMenuItems);
        setPurchasedItems(updatedPurchasedItems)
    }

    function handleOnChange(e)
    {
        const updatedMenuItems = menuItems.map((itemsection, i) => {
            if(i === sectionIndex)
            {
                return menuItems[i].map((item, x) => {
                    if(x === itemIndex)
                    {
                        return {name: item["name"], quantity: e.target.value >= 0 ? Number(e.target.value) : 0, 
                        price: menuItems[sectionIndex][itemIndex]["price"], image: menuItems[sectionIndex][itemIndex]["image"]};
                    }

                    else
                    {
                        return item;
                    }
                });
            }
            
            else 
            {
                return itemsection;
            }
        });
        
        const updatedPurchasedItems = purchasedItems;
        let found = false;

        for(let i = 0; i < purchasedItems.length; i++)
        {
            if(updatedPurchasedItems[i]["name"] === menuItems[sectionIndex][itemIndex]["name"]) {
                updatedPurchasedItems[i]["quantity"] = e.target.value >= 0 ? Number(e.target.value) : 0;

                if(updatedPurchasedItems[i]["quantity"] === 0)
                {
                    updatedPurchasedItems.splice(i, 1);
                }

                found = true
                break;
            }
        }

        if(!found && e.target.value > 0) 
        {
            updatedPurchasedItems.push({name: menuItems[sectionIndex][itemIndex]["name"], quantity: Number(e.target.value), 
            price: menuItems[sectionIndex][itemIndex]["price"], img: menuItems[sectionIndex][itemIndex]["image"]});
        }

        setMenuItems(updatedMenuItems);
        setPurchasedItems(updatedPurchasedItems)
    }

    return(
        <div className='item' id={`section${sectionIndex}item${itemIndex}`}>
            <img id='image' src={menuItems[sectionIndex][itemIndex]["image"]}></img>
            <h2 className='item-headname'>{menuItems[sectionIndex][itemIndex]["name"]}
            <br></br>
            {`$${menuItems[sectionIndex][itemIndex]["price"]}`}
            </h2>
            <label className='item-quantity'>x{menuItems[sectionIndex][itemIndex]["quantity"]}</label>
            <GoArrowUp className='item-plusicon' onClick={() => {handleOnPlusClick(itemIndex, sectionIndex)}}>Select</GoArrowUp>
            <GoArrowDown className='item-minusicon' onClick={() => {handleOnMinusClick(itemIndex, sectionIndex)}}>Select</GoArrowDown>
            <input className='item-quantity-input' type='number' min='0' value={menuItems[sectionIndex][itemIndex]["quantity"]} onChange={handleOnChange}></input>
            <div className='Tooltip-icon'>
                <GoUnverified></GoUnverified>
                <span className='Tooltip-text'>Manually enter large quantities</span>
            </div>
        </div>
    )
    
}

export default Item;