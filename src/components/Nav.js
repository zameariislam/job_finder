import React, { Component } from 'react';
import logo from '../assets/images/logo.svg'

class Nav extends Component {

    render() {
        return (
            <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
               <img src={logo} alt=" job finder logo" />
            </nav>
        );
    }
}

export default Nav;