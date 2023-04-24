import React from 'react';
import {Link} from 'react-router-dom'

function Navigation() 
{
    return (
        <div>
            <nav className='App-nav'>
                <span id="home-span">
                    <Link to="/" id="home-link">Home </Link>
                </span>
                <span>
                    <Link to="/order" id="order-link">Order</Link>
                </span>
            </nav>
        </div>
    )
}

export default Navigation;