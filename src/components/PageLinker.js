import React from 'react';
import {Link} from 'react-router-dom'

function PageLinker( {path, name} ) 
{
    return (
        <span className='Link-span'>
            <Link className='App-link' to={path}>{name}</Link>
        </span>
    )
}

export default PageLinker;