import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom sticky-top bg-white">
        <div class="container ps-3">
            <Link to='/'> 
                <img className='m-3 ms-3' src="media/images/logo.svg" alt="logo"  style={{width:"23%"}}/>
            </Link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ps-4">
                <Link to='/signup'  class="nav-link" aria-current="page">Signup</Link>
                </li>
                <li class="nav-item ps-4">
                <Link to='/about' class="nav-link" >Abouts</Link>
                </li>
                <li class="nav-item ps-4">
                <Link to='/product' class="nav-link" aria-current="page" href="#">Products</Link>
                </li>
                <li class="nav-item ps-4">
                <Link to='/pricing' class="nav-link" >Pricing</Link>
                </li>
                <li class="nav-item ps-4">
                <Link to='/support' class="nav-link">Support</Link>
                </li>
                <li class="nav-item ps-4 fs-5">
                <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    );
}  

export default Navbar;