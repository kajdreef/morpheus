import React from 'react';
import './Header.scss'

const Header = (props) => {
    return (
        <div class='header'>
            <h1>{ props.title }</h1>
        </div>
    )
}


export default Header;