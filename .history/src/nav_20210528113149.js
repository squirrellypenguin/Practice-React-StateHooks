import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div>
            <Link style={{textDecoration: 'none'}}to="/">
                <div>Main</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/main/shop">
                <div>Shops</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/main/checkout">
                <div>Checkout</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/main/icecream">
                <div>Ice Cream</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/main/user">
                <div>User</div>
            </Link>
        </div>
    )
}

export default Nav