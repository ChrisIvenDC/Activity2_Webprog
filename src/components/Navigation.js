import React from 'react';
import { Link } from 'react-router-dom';

    function Navigation() {
    return (
    <div class="headerhandler">
    <nav class="Header">
        <ul class="headernav">    
            <li class="Button"><Link to="/">Home</Link></li>
            <li class="Button"><Link to="/about">About</Link></li>
            <li class="Button"><Link to="/contact">Contact</Link></li>
            <li class="Button"><Link to="/counter">Counter</Link></li>
        </ul>
    </nav>
    </div>
);
}

export default Navigation;
