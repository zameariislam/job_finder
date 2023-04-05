import React, { Component } from 'react';
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
                <Link to='/'>
                    <img src={logo} alt=" job finder logo" />
                </Link>
            </nav>
        );
    }
}

export default Nav;