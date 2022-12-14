import React from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <div className="Navbar">
            <div className="bar">
                <div><Link className='pizzon'><span>Pizz</span>on</Link></div>
                <div className='items'>
                    <Link to={"/home"} className='links'>HOME</Link>
                    <Link to={"/all"} className='links'>MENU</Link>
                    <Link className='links'>RESERVATION</Link>
                    <Link className='links'>PAGES</Link>
                    <Link className='links' >+91 123 456 789</Link>
                    <Link className='links'>0 ITEMS - 0.00$</Link>
                    <Link className='links'>ORDER ONLINE</Link>
                </div>
            </div>
            <div className="titel">
                FOOD MENUS
            </div>

        </div>
    )
}

export default Navbar
