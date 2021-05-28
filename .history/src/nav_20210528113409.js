import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div>
            <Link style={{textDecoration: 'none'}}to="/">
                <div>Main</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/store">
                <div>Shops</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/checkout">
                <div>Checkout</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/creems">
                <div>Ice Cream</div>
            </Link>
            <Link style={{textDecoration: 'none'}}to="/user">
                <div>User</div>
            </Link>
        </div>
    )
}

export default Nav