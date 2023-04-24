import React from 'react';
import Item from './Item';

function ItemSection( {menuItems, setMenuItems, sectionIndex, purchasedItems, setPurchasedItems} )
{
    return(
        <div className='item-container' id={`section${sectionIndex}`}>
            {menuItems[sectionIndex].map((item, i) => (
                <Item key={i} menuItems={menuItems} setMenuItems={setMenuItems} itemIndex={i} sectionIndex={sectionIndex} purchasedItems={purchasedItems} setPurchasedItems={setPurchasedItems}/>
            ))}
        </div>
    )

}

export default ItemSection;